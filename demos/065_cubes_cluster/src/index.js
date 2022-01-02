import canvasSketch from 'canvas-sketch';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';
import { ProceduralTexture } from '@babylonjs/core';
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';

import { Effect } from '@babylonjs/core/Materials/effect';
import { getWebGLContext } from './webgl';
import noisePixelShader from './shaders/noisePixelShader.glsl';

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
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  // scene.clearColor = Color3.FromHexString('#182026');

  scene.clearColor = Color3.FromHexString('#000000');
  scene.fogMode = Scene.FOGMODE_EXP2;
  scene.fogDensity = 0.045;
  scene.fogColor = Color3.FromHexString('#000000');

  scene.environmentTexture = CubeTexture.CreateFromPrefilteredData('assets/env/e1.dds', scene);
  scene.freezeActiveMeshes(true);

  const camera = new ArcRotateCamera('camera', -1.11, 1, 29, new Vector3(0, 0, 0), scene);
  camera.fov = 0.8;
  camera.minZ = 0.1;

  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);
  baseLight.diffuse = new Color3(1.0, 1.0, 1.0);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  baseLight.specular = new Color3(0.5, 0.5, 0.5);
  baseLight.intensity = 1.0;

  const light = new DirectionalLight('dir01', new Vector3(-1, -1.5, -1), scene);
  light.position = new Vector3(20, 20, 20);
  light.intensity = 0.75;

  // ---------------------------------------

  const boxMesh = MeshBuilder.CreateBox('box', { size: 1 }, scene);
  boxMesh.isPickable = false;

  const pbr = new PBRMaterial('pbr', scene);
  boxMesh.material = pbr;

  pbr.albedoColor = new Color3.FromHexString('#FFC940');
  pbr.metallic = 1.0;
  pbr.roughness = 0.15;
  pbr.metallicF0Factor = 0;

  const rowSize = 85;
  const meshesCount = rowSize * rowSize;

  const bufferMatrices = new Float32Array(16 * meshesCount);
  const boxes = [];
  let idx = 0;
  for (let z = 0; z < rowSize; z += 1) {
    for (let x = 0; x < rowSize; x += 1) {
      const matrix = Matrix.Translation(x - rowSize / 2, 0, z - rowSize / 2);
      matrix.copyToArray(bufferMatrices, idx * 16);

      idx += 1;

      boxes.push({
        pos: new Vector3(x - rowSize / 2, 0, z - rowSize / 2),
        rPos: [x, z],
      });
    }
  }

  boxMesh.thinInstanceSetBuffer('matrix', bufferMatrices, 16);

  Effect.ShadersStore.noisePixelShader = noisePixelShader;
  const noiseTexture = new ProceduralTexture('flowNrm', rowSize, 'noise', scene, null, false, false);

  function decodeUInt32(rgba) {
    return rgba[0] + rgba[1] / 255.0 + rgba[2] / 65025.0 + rgba[3] / 16581375.0;
  }

  function updateBoxesScale(time) {
    noiseTexture.readPixels(0, 0, null, true).then((data) => {
      for (let i = 0; i < boxes.length; i += 1) {
        const { pos, rPos } = boxes[i];

        const { x, z } = pos;
        const [rx, rz] = rPos;

        const sf = decodeUInt32([
          data[rx * rowSize * 4 + rz * 4] / 255,
          data[rx * rowSize * 4 + rz * 4 + 1] / 255,
          data[rx * rowSize * 4 + rz * 4 + 2] / 255,
          data[rx * rowSize * 4 + rz * 4 + 3] / 255,
        ]);

        const scaleY = sf * 15;

        const scaling = new Vector3(0.75, scaleY, 0.75);
        const transition = new Vector3(x, +scaleY / 2, z);
        const baseRotation = new Quaternion();

        const matrix = Matrix.Compose(scaling, baseRotation, transition);

        matrix.copyToArray(bufferMatrices, i * 16);
      }
    });

    boxMesh.thinInstanceSetBuffer('matrix', bufferMatrices, 16);
  }

  // ---------------------------------------

  const ssao = new SSAO2RenderingPipeline('ssao', scene, {
    ssaoRatio: 1.0,
    blurRatio: 1.0,
  });
  ssao.radius = 2.0;
  ssao.totalStrength = 1.75;
  ssao.expensiveBlur = true;
  ssao.samples = 32;
  ssao.maxZ = 100;

  scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline('ssao', camera);

  // -------------------------------

  const pipeline = new DefaultRenderingPipeline('default', false, scene, [camera]);
  pipeline.fxaaEnabled = true;
  pipeline.samples = 8;

  // Chromatic Aberration
  pipeline.chromaticAberrationEnabled = true;
  pipeline.chromaticAberration.aberrationAmount = 10;

  pipeline.bloomEnabled = true;
  pipeline.bloomThreshold = 0;
  pipeline.bloomWeight = 2.0;
  pipeline.bloomKernel = 70;
  pipeline.bloomScale = 0.5;

  pipeline.grainEnabled = true;
  pipeline.grain.intensity = 8;
  pipeline.grain.animated = true;

  pipeline.imageProcessing.vignetteEnabled = true;
  pipeline.imageProcessing.vignetteCameraFov = 20;

  // -------------------------------

  return {
    render({ time, deltaTime }) {
      noiseTexture.setFloat('iTime', time);

      updateBoxesScale(time * 0.25);

      camera.alpha += deltaTime * 0.25;

      camera.fov = 1 - (Math.sin(time * 0.5) * 0.5 + 0.5) * 0.25;

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
