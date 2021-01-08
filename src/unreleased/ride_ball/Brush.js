import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import { rotateQuaternionByNormalChangeToRef, setDirectionToRef } from '@/utils/babylon-math3d';
import { perlin2 } from '@/utils/perlin';

export class Brush {
  // Объект главной сцены
  scene = null;

  // Минимальная скорость
  speed = 2.25;

  instance = null;

  // Порядковый уникальный номер кисти (идентификатор)
  idx = 0;

  // Хранилище под временные объекты для экономии памяти
  // чтоб каждый раз не создавать объекты, будем использовать через
  // Ref-методы BABYLON для присвоения значений к уже готовым объектам
  _tmp = {
    bPos: BABYLON.Vector3.Zero(),
    rayFrom: BABYLON.Vector3.Zero(),
    rayTo: BABYLON.Vector3.Zero(),
    ray: new BABYLON.Ray(BABYLON.Vector3.Zero(), BABYLON.Vector3.Zero(), 1.2),
  };

  // Угол поворода (радианы)
  angle = 0;

  constructor(options) {
    Object.assign(this, options);

    this.init();
  }

  init() {
    this.instance.isPickable = false;

    // Направляющая для кисти,
    // хранит в себе данные полученные при рейкасте
    this.generalNode = new BABYLON.TransformNode('general-node');

    const a = Math.PI * 2 * Math.random();
    this.generalNode.position = new BABYLON.Vector3(Math.sin(a) * 5, Math.cos(a) * 5, 0);
    this.generalNode.prevPosition = BABYLON.Vector3.Zero();
    this.generalNode.prevPrevPosition = BABYLON.Vector3.Zero();
    this.generalNode.rotationQuaternion = new BABYLON.Quaternion();
    this.generalNode.directedRotationQuaternion = new BABYLON.Quaternion();

    // Направляющая для вращения прицела для луча
    this.rotationPivot = new BABYLON.TransformNode('rotation-pivot');
    this.rotationPivot.position = BABYLON.Vector3.Zero();

    // Сам прицел для луча
    this.rayPilot = new BABYLON.TransformNode('rayPilot');
    this.rayPilot.parent = this.rotationPivot;
    this.rayPilot.position = new BABYLON.Vector3(1, 0, 1);

    // Инициализируем положение кисти через направляющую
    this.instance.parent = this.generalNode;
    this.instance.position = new BABYLON.Vector3.Zero();
    this.instance.rotationQuaternion = new BABYLON.Quaternion();

    this.prevPosition = this.generalNode.position;
    this.direction = new BABYLON.Vector3.Zero();

    // Инициализируем вспомогательные значения для перемещения
    this.reset();
  }

  reset() {
    this.prevNormal = null;
    this.nextNormal = null;
    this.quatRot = null;
    this.isFreeModeActiveDrawing = false;
  }

  update() {
    const timeDiffXSpeed = this.scene.deltaTime * this.speed;

    BABYLON.Quaternion.SlerpToRef(
      this.instance.rotationQuaternion,
      this.generalNode.directedRotationQuaternion,
      timeDiffXSpeed * 6,
      this.instance.rotationQuaternion,
    );

    this.updateInDriveMode();
  }

  /**
   * Обновление кисти в режиме DRIVE
   */
  updateInDriveMode(retry = 0) {
    const angleDiff = 0.02 + 0.3 / (this.speed * 3);

    this.angle += angleDiff * perlin2(this.idx * 100, this.scene.time) * 2.0;

    // ----------------------------------------------------

    // Cчитаем боковое отклонение для стреляющего луча
    this.rayPilot.position.x = Math.sin(this.angle + retry * 0.3);
    this.rayPilot.position.z = Math.cos(this.angle + retry * 0.3);

    // Определяющие для положения стреляющего луча
    const s1 = this.speed * this.scene.deltaTime * (2 + retry * 0.25); // высота точки выстрела луча над поверхностью
    const s2 = this.speed * this.scene.deltaTime; // шаг/отдаление от текущей позиции

    if (!this.nextNormal) {
      this.nextNormal = new BABYLON.Vector3(0, 1, 0);
    }

    const {
      _tmp: { rayFrom, rayTo, ray, bPos },
    } = this;

    // Поднимаемся над поверхностью в направление вектора нормали на высоту s1
    this.nextNormal.scaleToRef(s1, bPos);

    // Прибавляем позиции в направлении вращения на велицину шага s2
    bPos.addToRef(this.rayPilot.getAbsolutePosition().scale(s2), bPos);

    // Позиционируем на мировоую координату по текущей позиции направляющей
    bPos.addToRef(this.generalNode.position, rayFrom);

    const negateNextNormal = this.nextNormal.negate();
    bPos.addToRef(negateNextNormal, rayTo);
    rayTo.normalizeToRef(rayTo);

    ray.origin = rayFrom;
    ray.direction = rayTo;

    const pickInfo = this.scene.pickWithRay(ray, (pickMesh) => {
      return pickMesh === this.earthMeshPicking;
    });

    if (pickInfo.hit) {
      this.handlePickHit(pickInfo);

      this.rotationPivot.rotationQuaternion = this.quatRot;

      this.drawPoint(pickInfo, this.color);
    }

    if (this.generalNode.prevPrevPosition) {
      const { prevPrevPosition, position } = this.generalNode;

      const diff =
        Math.abs(position.x - prevPrevPosition.x) +
        Math.abs(position.y - prevPrevPosition.y) +
        Math.abs(position.z - prevPrevPosition.z);

      // Если движения нет - вероятно застряли - делаем попытку выбраться (не больше 10 раз)
      if (diff === this.moveDiff) {
        if (retry < 10) {
          this.updateInDriveMode(retry + 1);
        }
      }

      this.moveDiff = diff;
    }
  }

  handlePickHit(pickInfo) {
    this.generalNode.prevPrevPosition.copyFrom = this.generalNode.prevPosition;
    this.generalNode.prevPosition.copyFrom(this.generalNode.position);
    this.generalNode.position.copyFrom(pickInfo.pickedPoint);

    this.generalNode.position.subtractToRef(this.prevPosition, this.direction);
    this.direction.normalizeToRef(this.direction);

    this.prevNormal = this.nextNormal;
    this.nextNormal = pickInfo.getNormal();

    if (!this.quatRot) {
      this.quatRot = setDirectionToRef(this.nextNormal, this.quatRot);
    } else {
      rotateQuaternionByNormalChangeToRef(this.quatRot, this.prevNormal, this.nextNormal, this.quatRot);

      const r = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 1, 0), this.angle);

      this.generalNode.directedRotationQuaternion = this.quatRot.multiply(r).normalize();
    }
  }
}
