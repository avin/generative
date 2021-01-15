import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector3, Viewport } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { CubeTexture, PointerEventTypes, VertexData } from '@babylonjs/core';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';

import groundMaterial_vertexDefinitions from './shaders/groundMaterial/vertexDefinitions.glsl';
import groundMaterial_vertexBeforePositionUpdated from './shaders/groundMaterial/vertexBeforePositionUpdated.glsl';
import groundMaterial_fragmentDefinitions from './shaders/groundMaterial/fragmentDefinitions.glsl';
import groundMaterial_fragmentCustomDiffuse from './shaders/groundMaterial/fragmentCustomDiffuse.glsl';

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

  const scene = new Scene(engine);
  scene.clearColor = Color3.FromHexString('#D1B685');
  scene.fogMode = Scene.FOGMODE_EXP2;
  scene.fogDensity = 0.05;
  scene.fogColor = Color3.FromHexString('#D1B685');

  const camera1 = new ArcRotateCamera('camera1', -Math.PI / 2, Math.PI / 4, 7.0, new Vector3(0, 0, 0), scene);
  camera1.attachControl(canvas, true);
  camera1.layerMask = 0x10000000;

  const camera2 = camera1.clone();
  camera2.attachControl(canvas, true);
  camera2.layerMask = 0x20000000;

  const camParams = {
    lowerRadiusLimit: 5,
    upperRadiusLimit: 20,
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
  // baseLight.specular = new Color3(0.25, 0.25, 0.25);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);
  // baseLight.intensity = 0.25;

  // const dirLight = new DirectionalLight('dirLight', new Vector3(-1, -2, 1), scene);
  // dirLight.position = new Vector3(20, 40, -20);
  // dirLight.intensity = 0.5;

  // -----------------------------

  const planeSize = 5;
  const subdivisions = 150;

  // const hdrTexture = CubeTexture.CreateFromPrefilteredData('/static/assets/env/e1.dds', scene);

  const ground = MeshBuilder.CreateGround('ground', {
    width: 7,
    height: 4,
    subdivisions,
    updatable: true,
  });
  ground.isPickable = false;
  const groundMaterial = new CustomMaterial('groundMaterial', scene);
  groundMaterial.diffuseColor = Color3.FromHexString('#D1B685');

  ground.layerMask = 0x20000000;

  const baseGround = MeshBuilder.CreateGround('ground', {
    width: 200,
    height: 200,
    subdivisions: 1,
    updatable: false,
  });
  baseGround.layerMask = 0x10000000;
  baseGround.material = groundMaterial;

  ground.material = groundMaterial;
  // groundMaterial.wireframe = true;

  const radius = 0.5;
  const depthSize = .125;

  const sphere = MeshBuilder.CreateSphere('sphere', { diameter: radius * 2, segments: 64 }, scene);
  sphere.position.y = depthSize;
  sphere.position.x = Math.sin(0);
  sphere.position.z = Math.cos(0);
  sphere.layerMask = 0x20000000;

  function riseMesh(force) {
    const px = sphere.position.x;
    const pz = sphere.position.z;

    const groundPositions = ground.getVerticesData(VertexBuffer.PositionKind);

    for (let i = 0; i < groundPositions.length / 3; i += 1) {
      const x = groundPositions[i * 3 + 0];
      const z = groundPositions[i * 3 + 2];

      const d = distance(x, z, px, pz);

      const size = .5-depthSize;

      groundPositions[i * 3 + 1] = Math.min(-(size - 1 * d ** 2) * Math.exp(-1 * d ** 2), groundPositions[i * 3 + 1]);

      groundPositions[i * 3 + 1] +=
        -Math.sign(groundPositions[i * 3 + 1]) * (Math.abs(groundPositions[i * 3 + 1]) * force * 0.5);
    }

    ground.updateVerticesData(VertexBuffer.PositionKind, groundPositions);

    const indices = ground.getIndices();

    const normals = [];
    VertexData.ComputeNormals(groundPositions, indices, normals);

    ground.updateVerticesData(VertexBuffer.NormalKind, normals);
  }

  // --------------------------------------

  // groundMaterial.Vertex_Definitions(groundMaterial_vertexDefinitions);
  // groundMaterial.Vertex_Before_PositionUpdated(groundMaterial_vertexBeforePositionUpdated);
  // groundMaterial.Fragment_Definitions(groundMaterial_fragmentDefinitions);
  // groundMaterial.Fragment_Custom_Diffuse(groundMaterial_fragmentCustomDiffuse);

  // --------------------------------------

  // const ssao = new SSAO2RenderingPipeline('ssao', scene, {
  //   ssaoRatio: 1.5, // Ratio of the SSAO post-process, in a lower resolution
  //   blurRatio: 1, // Ratio of the combine post-process (combines the SSAO and the scene)
  // });
  // ssao.radius = 0.5;
  // ssao.totalStrength = 5.0;
  // ssao.expensiveBlur = true;
  // ssao.samples = 32;
  // ssao.maxZ = 100;
  //
  // scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline('ssao', camera2);

  return {
    render({ time, width, height, deltaTime }) {

      console.log(camera1.alpha, camera1.beta)

      const t = time;
      const f = 2;

      const scale = 2 / (3 - Math.cos(2 * t));
      const x = scale * Math.cos(t) * f;
      const y = ((scale * Math.sin(2 * t)) / 2) * f;

      sphere.position.x = x;
      sphere.position.z = y;

      riseMesh(deltaTime);

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
