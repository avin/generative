import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { Effect } from '@babylonjs/core/Materials/effect';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { PostProcess } from '@babylonjs/core';
import { getWebGLContext } from '@/utils/webgl';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';
import { DepthOfFieldEffectBlurLevel } from '@babylonjs/core/PostProcesses/depthOfFieldEffect';
import main_vertexDefinitions from './shaders/main/vertexDefinitions.glsl';
import main_vertexBeforePositionUpdated from './shaders/main/vertexBeforePositionUpdated.glsl';
import main_fragmentDefinitions from './shaders/main/fragmentDefinitions.glsl';
import main_fragmentCustomAlbedo from './shaders/main/fragmentCustomAlbedo.glsl';
import postprocessFragment from './shaders/postprocess/fragment.glsl';

const random = require('canvas-sketch-util/random');

const settings = {
  animate: true,
  context: getWebGLContext(),
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  //
  // Settings ===============================
  //

  const colorBlack = new Color3(23 / 255, 32 / 255, 38 / 255);

  const initTime = +new Date();

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = colorBlack;

  const camera = new ArcRotateCamera('camera', Math.PI / 4, Math.PI / 4, 5, new Vector3(0, 0, 0), scene);
  camera.fov = 1.5;
  camera.minZ = 0.1;
  camera.wheelPrecision = 50;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);
  baseLight.diffuse = new Color3(1.0, 1.0, 1.0);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);

  baseLight.intensity = 1.0;

  // --------------------------------------

  const mainMaterial = new PBRMaterial('mat', scene);
  mainMaterial.metallic = 0;
  mainMaterial.roughness = 0;
  mainMaterial.albedoColor = new Color3(1, 0, 0).toLinearSpace();

  const replaceIncludes = (code) => {
    ['pbrBlockAlbedoOpacity', 'pbrBlockReflectivity', 'pbrBlockFinalColorComposition'].forEach((partName) => {
      code = code.replaceAll(`#include<${partName}>`, Effect.IncludesShadersStore[partName]);
    });

    return code;
  };

  mainMaterial.customShaderNameResolve = (
    shaderName,
    uniforms,
    uniformBuffers,
    samplers,
    defines,
    attributes,
    options,
  ) => {
    Effect.ShadersStore.customVertexShader = Effect.ShadersStore.pbrVertexShader;
    Effect.ShadersStore.customPixelShader = Effect.ShadersStore.pbrPixelShader;

    Effect.ShadersStore.customPixelShader = replaceIncludes(Effect.ShadersStore.customPixelShader);

    Effect.ShadersStore.customVertexShader = Effect.ShadersStore.customVertexShader
      .replace(`#define CUSTOM_VERTEX_DEFINITIONS`, main_vertexDefinitions)
      .replace(`#define CUSTOM_VERTEX_UPDATE_POSITION`, main_vertexBeforePositionUpdated);

    Effect.ShadersStore.customPixelShader = Effect.ShadersStore.customPixelShader
      .replace(`#define CUSTOM_FRAGMENT_DEFINITIONS`, main_fragmentDefinitions)
      .replace(`#define CUSTOM_FRAGMENT_UPDATE_ALBEDO`, main_fragmentCustomAlbedo);

    uniforms.push('iTime');
    // attributes.push('idx');

    return 'custom';
  };

  mainMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    mainMaterial.getEffect().setFloat('iTime', time);
  };

  // --------------------------------------

  const createCube = (size, thickness = 0.25) => {
    const hSize = size / 2;
    const beam = MeshBuilder.CreateBox('box', { width: thickness, height: thickness, depth: size + thickness });

    const meshes = [];

    [
      [-hSize, hSize],
      [hSize, hSize],
      [hSize, -hSize],
      [-hSize, -hSize],
    ].forEach(([x, y]) => {
      let b;

      b = beam.clone();
      b.position.x = x;
      b.position.y = y;
      meshes.push(b);

      b = beam.clone();
      b.position.x = x;
      b.position.z = y;
      b.rotate(new Vector3(1, 0, 0), Math.PI / 2);
      meshes.push(b);

      b = beam.clone();
      b.position.y = x;
      b.position.z = y;
      b.rotate(new Vector3(0, 1, 0), Math.PI / 2);
      meshes.push(b);
    });

    beam.dispose();

    const resultMesh = Mesh.MergeMeshes(meshes, true, true);
    resultMesh.material = mainMaterial;

    return resultMesh;
  };

  const cubes = [];
  for (let i = 1; i < 4; i += 0.25) {
    const cube = createCube(i, 0.05);
    cubes.push(cube);
  }

  // -------------------

  Effect.ShadersStore.postProcessFragmentShader = postprocessFragment;
  new PostProcess('shade-sides', 'postProcess', null, null, 1.0, camera);

  const defaultPipeline = new DefaultRenderingPipeline('default', true, scene, [camera]);
  defaultPipeline.fxaaEnabled = false;
  defaultPipeline.imageProcessingEnabled = false;
  defaultPipeline.samples = 16;

  defaultPipeline.chromaticAberrationEnabled = true;
  defaultPipeline.chromaticAberration.aberrationAmount = 10.0;

  defaultPipeline.bloomEnabled = true;
  defaultPipeline.bloomThreshold = 0.1;
  defaultPipeline.bloomWeight = 1.65;
  defaultPipeline.bloomKernel = 100;
  defaultPipeline.bloomScale = 0.9;

  defaultPipeline.grainEnabled = true;
  defaultPipeline.grain.intensity = 5;
  defaultPipeline.grain.animated = true;

  defaultPipeline.depthOfFieldEnabled = true;
  defaultPipeline.depthOfFieldBlurLevel = DepthOfFieldEffectBlurLevel.Low;
  defaultPipeline.depthOfField.fStop = 0.5;
  defaultPipeline.depthOfField.focalLength = 500;
  defaultPipeline.depthOfField.focusDistance = 5000;
  defaultPipeline.depthOfField.lensSize = 10;

  // -------------------

  random.setSeed(300);

  return {
    render({ time, deltaTime }) {
      scene.render();

      cubes.forEach((cube, idx) => {
        const t = time * 0.5;
        const sF = 0.025;

        const dx = random.noise1D(t - idx * sF, 0.5, 0.4) * 5;
        const dy = random.noise1D(t - idx * sF + 1000, 0.5, 0.4) * 5;
        const dz = random.noise1D(t - idx * sF + 2000, 0.5, 0.4) * 5;

        cube.rotation.x = dx;
        cube.rotation.y = dy;
        cube.rotation.z = dz;
      });
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
