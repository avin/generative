import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { Effect } from '@babylonjs/core/Materials/effect';
import { PostProcess } from '@babylonjs/core';
import { getWebGLContext } from '@/utils/webgl';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';
import main_vertexDefinitions from './shaders/main/vertexDefinitions.glsl';
import main_vertexBeforePositionUpdated from './shaders/main/vertexBeforePositionUpdated.glsl';
import main_fragmentDefinitions from './shaders/main/fragmentDefinitions.glsl';
import main_fragmentCustomAlbedo from './shaders/main/fragmentCustomAlbedo.glsl';
import postprocessFragment from './shaders/postprocess/fragment.glsl';

const settings = {
  animate: true,
  context: getWebGLContext(),
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  const initTime = +new Date();

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = Color3.FromHexString('#10161A');

  const camera = new ArcRotateCamera('camera', -1.44, 1.29, 15.0, new Vector3(0, 0, 0), scene);
  camera.wheelPrecision = 50;
  camera.minZ = 0.2;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  baseLight.intensity = 0.25;

  const dirLight = new DirectionalLight('dirLight', new Vector3(-1, -2, 1), scene);
  dirLight.position = new Vector3(20, 40, -20);
  dirLight.intensity = 3;

  const radius = 5;

  const sphere = MeshBuilder.CreateSphere('sphere', {
    diameter: radius * 2,
    segments: 512,
  });
  sphere.isPickable = false;
  sphere.doNotSyncBoundingInfo = false;
  sphere.freezeWorldMatrix();

  const mainMaterial = new PBRMaterial('sphereMaterial', scene);
  sphere.material = mainMaterial;
  mainMaterial.freeze();

  mainMaterial.metallic = 0.05;
  mainMaterial.roughness = 0.075;

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
    uniforms.push('radius');
    uniforms.push('radiusVariationAmplitude');
    uniforms.push('radiusNoiseFrequency');

    return 'custom';
  };

  mainMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    mainMaterial.getEffect().setFloat('iTime', time);
    mainMaterial.getEffect().setFloat('radius', radius);
    mainMaterial.getEffect().setFloat('radiusVariationAmplitude', 0.75);
    mainMaterial.getEffect().setFloat('radiusNoiseFrequency', 0.5);
  };

  // ------------------------------

  Effect.ShadersStore.postProcessFragmentShader = postprocessFragment;
  new PostProcess('shade-sides', 'postProcess', null, null, 1.0, camera);

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
