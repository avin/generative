import canvasSketch from 'canvas-sketch';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import '@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent';
import '@babylonjs/core/Rendering/geometryBufferRendererSceneComponent';
import { ShadowGenerator } from '@babylonjs/core/Lights/Shadows/shadowGenerator';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import '@babylonjs/core';
import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';
import { getWebGLContext } from './webgl';

const distance = (x1, y1, x2, y2) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

const settings = {
  canvas: document.querySelector('#canvas'),
  context: getWebGLContext(),
  animate: true,
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  //
  // Settings ===============================
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

  const camera = new ArcRotateCamera('camera', -2.19, 1.2, 3.9, new Vector3(0, 0, 0), scene);
  camera.fov = 1;
  camera.minZ = 0.1;
  camera.lowerRadiusLimit = 3;
  camera.upperRadiusLimit = 15;
  camera.wheelDeltaPercentage = 0.01;
  camera.pinchDeltaPercentage = 0.01;
  camera.lowerBetaLimit = 0;
  camera.upperBetaLimit = 1.2;

  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.0, 0.0, 0.0);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);
  baseLight.intensity = 0.4;

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
  ground.renderingGroupId = 1;
  ground.isPickable = false;
  ground.material = groundMaterial;
  ground.receiveShadows = true;

  const baseGround = MeshBuilder.CreateGround('ground', {
    width: 200,
    height: 200,
    subdivisions: 1,
    updatable: false,
  });
  baseGround.material = groundMaterial;

  const radius = 0.5;
  const depthSize = 0.075;

  const ball = MeshBuilder.CreateSphere('ball', { diameter: radius * 2, segments: 64 }, scene);
  ball.renderingGroupId = 1;
  ball.position.y = depthSize;
  shadowGenerator.addShadowCaster(ball);

  const ballMaterial = new StandardMaterial('material', scene);
  ballMaterial.diffuseColor = ballColor;
  ballMaterial.specularColor = new Color3(0.1, 0.1, 0.1);
  ballMaterial.emissiveColor = new Color3(0.1, 0.1, 0.1);
  ball.material = ballMaterial;

  ballMaterial.specularPower = 16;

  function riseMesh(force) {
    const px = ball.position.x;
    const pz = ball.position.z;

    const groundPositions = ground.getVerticesData(VertexBuffer.PositionKind);

    for (let i = 0; i < groundPositions.length / 3; i += 1) {
      const x = groundPositions[i * 3];
      const z = groundPositions[i * 3 + 2];

      const d = distance(x, z, px, pz);

      const size = 0.5 - depthSize;

      groundPositions[i * 3 + 1] = Math.min(-(size - d ** 2) * Math.exp(-5 * d ** 2), groundPositions[i * 3 + 1]);

      groundPositions[i * 3 + 1] +=
        -Math.sign(groundPositions[i * 3 + 1]) * (Math.abs(0.1 - groundPositions[i * 3 + 1]) * force * 0.5);
    }

    ground.updateVerticesData(VertexBuffer.PositionKind, groundPositions);

    const indices = ground.getIndices();

    const normals = [];
    VertexData.ComputeNormals(groundPositions, indices, normals);

    ground.updateVerticesData(VertexBuffer.NormalKind, normals);
  }

  // ---------------------------------------

  const ssao = new SSAO2RenderingPipeline('ssao', scene, {
    ssaoRatio: 1.5, // Ratio of the SSAO post-process, in a lower resolution
    blurRatio: 1, // Ratio of the combine post-process (combines the SSAO and the scene)
  });
  ssao.radius = 0.25;
  ssao.totalStrength = 0.75;
  ssao.expensiveBlur = true;
  ssao.samples = 16;
  ssao.maxZ = 100;

  scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline('ssao', camera);

  // ---------------------------------------

  const defaultPipeline = new DefaultRenderingPipeline('default', false, scene, [camera]);
  defaultPipeline.fxaaEnabled = true;
  defaultPipeline.samples = 8;

  //
  defaultPipeline.bloomEnabled = true;
  defaultPipeline.bloomThreshold = 0.17;
  defaultPipeline.bloomWeight = 0.2;
  defaultPipeline.bloomKernel = 100;
  defaultPipeline.bloomScale = 0.9;

  // ---------------------------------------

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

canvasSketch(sketch, settings);
