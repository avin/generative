import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Rendering/prePassRendererSceneComponent';
import '@babylonjs/core/Meshes/thinInstanceMesh';

const settings = {
  animate: true,
  context: 'webgl2',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = Color3.FromHexString('#10161A');

  const cAlpha = -Math.PI / 2;
  const cBeta = Math.PI / 2;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 2, new Vector3(0, 0.0, 0), scene);
  camera.minZ = 0.1;
  camera.fov = 1.2;

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-0.25, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  baseLight.specular = new Color3(0.25, 0.25, 0.25);

  // ----------------------------

  const faceColors = Array(6)
    .fill(0)
    .map((_, idx) => {
      const c = new Color3();
      Color3.HSVtoRGBToRef((360 / 6) * idx, 0.75, 1, c);
      return c;
    });

  const box = MeshBuilder.CreateBox('box', { faceColors }, scene);

  const boxLeft = MeshBuilder.CreateBox('box', { faceColors }, scene);
  boxLeft.position.x = -1.5;

  const boxRight = MeshBuilder.CreateBox('box', { faceColors }, scene);
  boxRight.position.x = 1.5;

  // ----------------------------

  function rotationBehaviour(object, speed = 0.005) {
    let isDragging = false;

    let prevX;
    let prevY;

    function rotateAroundWorldAxisWithBake(object, axis, radians) {
      const rotationMatrix = Matrix.RotationAxis(axis.normalize(), radians);

      object.bakeTransformIntoVertices(rotationMatrix);
    }

    function rotateAroundWorldAxis(axis, radians) {
      object.rMatrix = object.rMatrix || Matrix.Identity();
      const rotationMatrix = Matrix.RotationAxis(axis.normalize(), radians);
      object.rMatrix.multiplyToRef(rotationMatrix, object.rMatrix);
      object.rotationQuaternion = Quaternion.FromRotationMatrix(object.rMatrix);
    }

    const handlePointerDown = (e) => {
      isDragging = true;

      prevX = e.clientX;
      prevY = e.clientY;
    };

    const handlePointerMove = (e) => {
      if (isDragging) {
        const dX = (prevX - e.clientX) * speed;
        const dY = (prevY - e.clientY) * speed;

        prevX = e.clientX;
        prevY = e.clientY;

        // rotateAroundWorldAxisWithBake(box, new Vector3(0, 1, 0), dX);
        // rotateAroundWorldAxisWithBake(box, new Vector3(1, 0, 0), dY);

        rotateAroundWorldAxis(new Vector3(0, 1, 0), dX);
        rotateAroundWorldAxis(new Vector3(1, 0, 0), dY);
      }
    };

    const handlePointerLeave = (e) => {
      isDragging = false;
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerLeave);
    canvas.addEventListener('pointerleave', handlePointerLeave);

    return {
      dispose: () => {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointermove', handlePointerMove);
        canvas.removeEventListener('pointerup', handlePointerLeave);
        canvas.removeEventListener('pointerleave', handlePointerLeave);
      },
    };
  }

  rotationBehaviour(box);

  // ----------------------------

  return {
    render({ time, width, height, frame, deltaTime }) {
      scene.render();
    },
    resize({ pixelRatio, width, height }) {
      engine.resize();
    },
    unload() {
      engine.dispose();
    },
  };
};

export default { sketch, settings };
