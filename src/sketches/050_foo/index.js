import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { SpotLight } from '@babylonjs/core/Lights/spotLight';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { Vector3, Matrix, Quaternion } from '@babylonjs/core/Maths/math';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { MotionBlurPostProcess } from '@babylonjs/core/PostProcesses/motionBlurPostProcess';
import '@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent';
import { ShadowGenerator } from '@babylonjs/core/Lights/Shadows/shadowGenerator';
import { PointLight } from '@babylonjs/core/Lights/pointLight';
// import vertexDefinitions from './shaders/vertexDefinitions.glsl'
// import vertexBeforePositionUpdated from './shaders/vertexBeforePositionUpdated.glsl'
// import fragmentDefinitions from './shaders/fragmentDefinitions.glsl'
// import fragmentBeforeFragColor from './shaders/fragmentBeforeFragColor.glsl'

const settings = {
  animate: true,
  context: 'webgl',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true);

  const scene = new Scene(engine);
  scene.clearColor = new Color3(16 / 255, 22 / 255, 26 / 255);

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.7, Math.PI / 3.5, 100, new Vector3(0, 0, 0), scene);
  camera.attachControl(canvas, true);
  camera.fov = 1.0;
  camera.minZ = 0.1;
  // camera.wheelPrecision = 150.0;

  var light = new SpotLight('spotLight', new Vector3(-80, 100, -80), new Vector3(1, -1, 1), Math.PI / 3, 30, scene);
  // light.position = new Vector3(-40, 80, -40);

  const shadowGenerator = new ShadowGenerator(1024, light);

  // light.shadowMaxZ = 1100;
  // light.shadowMinZ = 100;
  shadowGenerator.useContactHardeningShadow = true;
  shadowGenerator.setDarkness(0.5);

  // shadowGenerator.useBlurCloseExponentialShadowMap = true;
  // shadowGenerator.forceBackFacesOnly = true;
  // shadowGenerator.blurKernel = 32;
  // shadowGenerator.blurScale = 10.1;
  // shadowGenerator.useKernelBlur = true;

  const mat = new CustomMaterial('s', scene);

  const makeCurve = (range, nbSteps) => {
    const path = [];
    const stepSize = range / nbSteps;
    for (let i = 0; i < range; i += stepSize) {
      path.push(new Vector3(i, 0, 0));
    }
    return path;
  };

  const LENGTH = 50;
  const SEGMENTS = 30;
  const curve = makeCurve(LENGTH, SEGMENTS);

  const radiusChange = (index, distance) => {
    const k = Math.max(1 - index / SEGMENTS, 0.0);
    // const k = 1;
    return k * 1.1;
  };

  const mesh = MeshBuilder.CreateTube(
    'tube',
    { path: curve, radiusFunction: radiusChange, sideOrientation: Mesh.FRONTSIDE, tessellation: 6 },
    scene,
  );
  mesh.material = mat;
  mesh.receiveShadows = true;

  const rotation = Quaternion.RotationAxis(new Vector3(0, 0, 1), Math.PI / 2);
  const scaling = new Vector3(1, 1, 1);
  const transition = new Vector3();
  const resultMatrix = new Matrix();

  const totalSide = 10;
  const size = 100;
  const total = totalSide * totalSide;
  const randomSize = (1 / totalSide) * size;

  const bufferMatrices = new Float32Array(16 * total);

  let idx = 0;
  for (let x = 0; x < totalSide; x += 1) {
    for (let y = 0; y < totalSide; y += 1) {
      transition.x = ((x - totalSide / 2) / totalSide) * size + (Math.random() - 0.5) * randomSize;
      transition.y = 0;
      transition.z = ((y - totalSide / 2) / totalSide) * size + (Math.random() - 0.5) * randomSize;

      Matrix.ComposeToRef(scaling, rotation, transition, resultMatrix);

      resultMatrix.copyToArray(bufferMatrices, 16 * idx);

      idx += 1;
    }
  }

  // mesh.rotationQuaternion = rotation;

  mesh.thinInstanceSetBuffer('matrix', bufferMatrices, 16, true);

  shadowGenerator.addShadowCaster(mesh);

  const ground = MeshBuilder.CreatePlane('ground', {
    height: size + randomSize * 2,
    width: size + randomSize * 2,
    subdivisions: 4,
    sideOrientation: Mesh.DOUBLESIDE,
  });
  ground.rotate(new Vector3(1, 0, 0), Math.PI / 2);
  ground.receiveShadows = true;

  return {
    render({ time, width, height }) {
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
