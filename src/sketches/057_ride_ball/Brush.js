import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import { rotateQuaternionByNormalChangeToRef, setDirectionToRef } from '@/utils/babylon-math3d';
import { perlin2 } from '@/utils/perlin';

export class Brush {
  scene = null;

  _speed = 0.025;

  instance = null;

  idx = 0;

  _tmp = {
    bPos: BABYLON.Vector3.Zero(),
    rayFrom: BABYLON.Vector3.Zero(),
    rayTo: BABYLON.Vector3.Zero(),
    ray: new BABYLON.Ray(BABYLON.Vector3.Zero(), BABYLON.Vector3.Zero(), 1.2),
  };

  // Bend angle
  angle = 0;

  constructor(options) {
    Object.assign(this, options);

    this.init();
  }

  get speed() {
    let speed = this._speed / this.scene.deltaTime;
    if (this.scene.time < .1) {
      speed = 0.01;
    }
    return speed;
  }

  init() {
    this.instance.isPickable = false;

    // Brush guide, stores the data received during raycast
    this.generalNode = new BABYLON.TransformNode('general-node');

    const a = Math.PI * 2 * Math.random();
    this.generalNode.position = new BABYLON.Vector3(Math.sin(a) * 5, Math.cos(a) * 5, 0);
    this.generalNode.prevPosition = BABYLON.Vector3.Zero();
    this.generalNode.prevPrevPosition = BABYLON.Vector3.Zero();
    this.generalNode.rotationQuaternion = new BABYLON.Quaternion();
    this.generalNode.directedRotationQuaternion = new BABYLON.Quaternion();

    // Guide to rotate the sight for the beam
    this.rotationPivot = new BABYLON.TransformNode('rotation-pivot');
    this.rotationPivot.position = BABYLON.Vector3.Zero();

    // Sight for ray
    this.rayPilot = new BABYLON.TransformNode('rayPilot');
    this.rayPilot.parent = this.rotationPivot;
    this.rayPilot.position = new BABYLON.Vector3(1, 0, 1);

    // Initialize the position of the brush through the guide
    this.instance.parent = this.generalNode;
    this.instance.position = new BABYLON.Vector3.Zero();
    this.instance.rotationQuaternion = new BABYLON.Quaternion();

    this.prevPosition = this.generalNode.position;
    this.direction = new BABYLON.Vector3.Zero();

    // Initializing auxiliary values for the move
    this.reset();
  }

  reset() {
    this.prevNormal = null;
    this.nextNormal = null;
    this.quatRot = null;
    this.isFreeModeActiveDrawing = false;
  }

  update() {
    this.instance.rotationQuaternion = this.generalNode.directedRotationQuaternion

    this.updateInDriveMode();
  }

  updateInDriveMode(retry = 0) {
    const speed = this.speed;
    const angleDiff = 0.02 + 0.3 / (speed * 3);

    this.angle += angleDiff * perlin2(this.idx * 100, this.scene.time) * 2.0;

    // ----------------------------------------------------

    // Calculate the lateral deviation for the shooting beam
    this.rayPilot.position.x = Math.sin(this.angle + retry * 0.3);
    this.rayPilot.position.z = Math.cos(this.angle + retry * 0.3);

    // Determinants for the position of the shooting beam
    const s1 = speed * this.scene.deltaTime * (2 + retry * 0.25); // высота точки выстрела луча над поверхностью
    const s2 = speed * this.scene.deltaTime; // шаг/отдаление от текущей позиции

    if (!this.nextNormal) {
      this.nextNormal = new BABYLON.Vector3(0, 1, 0);
    }

    const {
      _tmp: { rayFrom, rayTo, ray, bPos },
    } = this;

    // Rise above the surface in the direction of the normal vector to the height "s1"
    this.nextNormal.scaleToRef(s1, bPos);

    // Add positions in the direction of rotation by the step size "s2"
    bPos.addToRef(this.rayPilot.getAbsolutePosition().scale(s2), bPos);

    // Positioning on the world coordinate at the current position of the guide
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

      // If there is no movement - probably stuck - we try to get out (no more than 10 times)
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
