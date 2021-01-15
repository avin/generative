import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector3, Viewport } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import '@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent';
import { ShadowGenerator } from '@babylonjs/core/Lights/Shadows/shadowGenerator';

const distance = (x1, y1, x2, y2) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

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

  const sandsColor = Color3.FromHexString('#FFB366');
  const ballColor = Color3.FromHexString('#F5F8FA');

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = sandsColor;
  scene.fogMode = Scene.FOGMODE_EXP2;
  scene.fogDensity = 0.05;
  scene.fogColor = sandsColor;

  const camera1 = new ArcRotateCamera('camera1', -2.19, 1.2, 3.9, new Vector3(0, 0, 0), scene);
  camera1.attachControl(canvas, true);
  camera1.layerMask = 0x10000000;

  const camera2 = camera1.clone();
  camera2.attachControl(canvas, true);
  camera2.layerMask = 0x20000000;

  const camParams = {
    fov: 1,
    minZ: 0.1,
    lowerRadiusLimit: 3,
    upperRadiusLimit: 15,
    wheelDeltaPercentage: 0.01,
    pinchDeltaPercentage: 0.01,
    lowerBetaLimit: 0,
    upperBetaLimit: 1.2,
  };
  Object.keys(camParams).forEach((key) => {
    camera1[key] = camParams[key];
    camera2[key] = camParams[key];
  });

  camera1.viewport = new Viewport(0, 0, 1, 1);
  camera2.viewport = new Viewport(0, 0, 1, 1);

  scene.activeCameras.push(camera1);
  scene.activeCameras.push(camera2);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.0, 0.0, 0.0);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);
  baseLight.intensity = 0.4;

  // light1
  const light = new DirectionalLight('dir01', new Vector3(-1, -1.5, -1), scene);
  light.position = new Vector3(20, 20, 20);
  light.intensity = 0.5;
  const shadowGenerator = new ShadowGenerator(1024, light);
  shadowGenerator.usePercentageCloserFiltering = true;
  shadowGenerator.filteringQuality = ShadowGenerator.QUALITY_HIGH;

  // -----------------------------

  const groundMaterial = new CustomMaterial('groundMaterial', scene);
  groundMaterial.diffuseColor = sandsColor;
  groundMaterial.specularColor = new Color3(-0.1, -0.1, -0.1);
  groundMaterial.emissiveColor = Color3.Black();

  const ground = MeshBuilder.CreateGround('ground', {
    width: 7,
    height: 4,
    subdivisions: 150,
    updatable: true,
  });
  ground.isPickable = false;
  ground.layerMask = 0x20000000;
  ground.material = groundMaterial;
  ground.receiveShadows = true;

  const baseGround = MeshBuilder.CreateGround('ground', {
    width: 200,
    height: 200,
    subdivisions: 1,
    updatable: false,
  });
  baseGround.layerMask = 0x10000000;
  baseGround.material = groundMaterial;

  const radius = 0.5;
  const depthSize = 0.075;

  const ball = MeshBuilder.CreateSphere('ball', { diameter: radius * 2, segments: 64 }, scene);
  ball.position.y = depthSize;
  ball.layerMask = 0x20000000;
  shadowGenerator.addShadowCaster(ball);

  const ballMaterial = new StandardMaterial('material', scene);
  ballMaterial.diffuseColor = ballColor;
  ballMaterial.specularColor = new Color3(0.75, 0.75, 0.75);
  ballMaterial.emissiveColor = new Color3(0.1, 0.1, 0.1);
  ball.material = ballMaterial;

  ballMaterial.specularPower = 16;

  function riseMesh(force) {
    const px = ball.position.x;
    const pz = ball.position.z;

    const groundPositions = ground.getVerticesData(VertexBuffer.PositionKind);

    for (let i = 0; i < groundPositions.length / 3; i += 1) {
      const x = groundPositions[i * 3 + 0];
      const z = groundPositions[i * 3 + 2];

      const d = distance(x, z, px, pz);

      const size = 0.5 - depthSize;

      groundPositions[i * 3 + 1] = Math.min(-(size - 1 * d ** 2) * Math.exp(-5 * d ** 2), groundPositions[i * 3 + 1]);

      groundPositions[i * 3 + 1] +=
        -Math.sign(groundPositions[i * 3 + 1]) * (Math.abs(0.1 - groundPositions[i * 3 + 1]) * force * 0.5);
    }

    ground.updateVerticesData(VertexBuffer.PositionKind, groundPositions);

    const indices = ground.getIndices();

    const normals = [];
    VertexData.ComputeNormals(groundPositions, indices, normals);

    ground.updateVerticesData(VertexBuffer.NormalKind, normals);
  }

  let rt = 0;
  return {
    render({ time, deltaTime }) {
      const delta = Math.min(deltaTime, 0.1);
      rt += delta;

      const t = rt;
      const f = 2;

      const scale = 2 / (3 - Math.cos(2 * t));
      const x = scale * Math.cos(t) * f;
      const y = ((scale * Math.sin(2 * t)) / 2) * f;

      ball.position.x = x;
      ball.position.z = y;

      riseMesh(delta);

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
