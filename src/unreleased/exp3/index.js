import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Matrix, Vector3 } from '@babylonjs/core/Maths/math';
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
import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { MotionBlurPostProcess } from '@babylonjs/core/PostProcesses/motionBlurPostProcess';
import { GlowLayer } from '@babylonjs/core';

import blob_vertexDefinitions from './shaders/blob/vertexDefinitions.glsl';
import blob_vertexBeforePositionUpdated from './shaders/blob/vertexBeforePositionUpdated.glsl';
import blob_vertexAfterWorldPosComputed from './shaders/blob/vertexAfterWorldPosComputed.glsl';
import blob_fragmentDefinitions from './shaders/blob/fragmentDefinitions.glsl';
import blob_fragmentCustomDiffuse from './shaders/blob/fragmentCustomDiffuse.glsl';

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
  // Settings ===============================
  //

  const initTime = +new Date();

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = Color3.Black();
  scene.fogMode = Scene.FOGMODE_EXP2;
  scene.fogDensity = 0.01;
  scene.fogColor = Color3.Black();

  const camera = new ArcRotateCamera('camera', -2.19, Math.PI / 2, 40, new Vector3(0, 0, 0), scene);
  camera.fov = 0.5;
  camera.minZ = 0.1;
  // camera.lowerRadiusLimit = 3;
  // camera.upperRadiusLimit = 15;
  // camera.wheelDeltaPercentage = 0.01;
  // camera.pinchDeltaPercentage = 0.01;
  // camera.lowerBetaLimit = 0;
  // camera.upperBetaLimit = 1.2;

  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);
  baseLight.diffuse = new Color3(1.0, 1.0, 1.0);
  baseLight.groundColor = new Color3(0.25, 0.25, 0.25);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);
  baseLight.intensity = 1.0;

  // const gl = new GlowLayer('glow', scene);
  // gl.intensity = 0.75;

  // -----------------------------

  const sphereRadius = 5;
  const sphere = new MeshBuilder.CreateSphere('sphere', { diameter: sphereRadius * 2, segments: 64 }, scene);
  const sphereMaterial = new StandardMaterial('sphereMaterial', scene);
  sphere.material = sphereMaterial;
  sphereMaterial.diffuseColor = new Color3(0.725, 0.25, 0.725);
  sphereMaterial.specularColor = Color3.Black();
  sphereMaterial.emissiveColor = new Color3(0.0, 0.0, 0.0);
  // sphereMaterial.alpha = 0.2;

  // Blob material

  const blobMaterial = new CustomMaterial('material', scene);
  blobMaterial.specularColor = new Color3(0, 0, 0);
  blobMaterial.emissiveColor = new Color3(0.75, 0.75, 0.75);
  blobMaterial.alpha = 0.8;

  // Blob meshes

  const path = [];
  const segments = 2;
  for (let i = 0; i < 1; i += 1 / segments) {
    const x = 0;
    const y = i;
    const z = 0;
    path.push(new Vector3(x, y, z));
  }
  const blobMesh = MeshBuilder.CreateTube('tube', {
    path,
    tessellation: 3,
    radiusFunction: (i) => {
      const maxRadius = 0.0125;
      const f = 1 - (i + 1) / segments;
      return maxRadius * f;
    },
    cap: Mesh.CAP_START,
    scene,
    updatable: false,
    sideOrientation: Mesh.DEFAULTSIDE,
  });
  blobMesh.material = blobMaterial;

  const rowSize = 200;
  const density = 0.125;
  const meshesCount = rowSize * rowSize;

  const bufferMatrices = new Float32Array(16 * meshesCount);
  const bufferIdx = new Float32Array(meshesCount);
  const bufferRFactor1 = new Float32Array(meshesCount);

  let n = 0;
  for (let x = 0; x < rowSize; x += 1) {
    for (let y = 0; y < rowSize; y += 1) {
      const rx = x + (Math.random() - 0.5);
      const ry = y + (Math.random() - 0.5);
      const matrix = Matrix.Translation((rx - rowSize / 2) * density, 0, (ry - rowSize / 2) * density);
      matrix.copyToArray(bufferMatrices, n * 16);
      bufferIdx[n] = n;
      bufferRFactor1[n] = Math.random();

      n += 1;
    }
  }

  blobMesh.thinInstanceSetBuffer('matrix', bufferMatrices, 16);
  blobMesh.thinInstanceSetBuffer('idx', bufferIdx, 1);
  blobMesh.thinInstanceSetBuffer('rFactor1', bufferRFactor1, 1);

  // ---------------------------------------

  blobMaterial.AddAttribute('rFactor1');
  blobMaterial.AddAttribute('idx');

  blobMaterial.Vertex_Definitions(blob_vertexDefinitions);
  blobMaterial.Vertex_Before_PositionUpdated(blob_vertexBeforePositionUpdated);
  blobMaterial.Vertex_After_WorldPosComputed(blob_vertexAfterWorldPosComputed);
  blobMaterial.Fragment_Definitions(blob_fragmentDefinitions);
  blobMaterial.Fragment_Custom_Diffuse(blob_fragmentCustomDiffuse);

  blobMaterial.AddUniform('iTime', 'float');
  blobMaterial.AddUniform('sphereRadius', 'float');
  blobMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    blobMaterial.getEffect().setFloat('iTime', time);

    blobMaterial.getEffect().setFloat('sphereRadius', sphereRadius);
  };

  // ---------------------------------------

  const defaultPipeline = new DefaultRenderingPipeline('default', false, scene, [camera]);
  defaultPipeline.fxaaEnabled = true;
  defaultPipeline.samples = 8;

  //
  defaultPipeline.bloomEnabled = true;
  defaultPipeline.bloomThreshold = 0.17;
  defaultPipeline.bloomWeight = 1.2;
  defaultPipeline.bloomKernel = 100;
  defaultPipeline.bloomScale = 0.9;

  // ---------------------------------------

  // ---------------------------------------

  return {
    render({ time, deltaTime }) {
      console.log(camera.alpha, camera.beta);
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
