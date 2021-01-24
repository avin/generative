import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { Effect } from '@babylonjs/core/Materials/effect';

import emissiveNoisePixelShader from './shaders/emissiveNoisePixelShader.glsl';
import opacityNoisePixelShader from './shaders/opacityNoisePixelShader.glsl';

import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { ProceduralTexture } from '@babylonjs/core';

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

  const colorBlack = new Color3(23 / 255, 32 / 255, 38 / 255);

  const initTime = +new Date();

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = colorBlack;

  const camera = new ArcRotateCamera('camera', 0, Math.PI / 2, 5, new Vector3(0, 0, 0), scene);
  camera.fov = 1.0;
  camera.minZ = 0.1;
  camera.wheelPrecision = 50;

  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);
  baseLight.diffuse = new Color3(1.0, 1.0, 1.0);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);

  baseLight.intensity = 1.0;

  // --------------------------------------

  const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 3, sideOrientation: Mesh.FRONTSIDE }, scene);
  const sphereMaterial = new StandardMaterial('sphereMaterial', scene);
  sphere.material = sphereMaterial;

  sphereMaterial.specularColor = Color3.Black();
  // sphereMaterial.emissiveTexture = noiseTexture;
  // sphereMaterial.emissiveColor = Color3.White();

  Effect.ShadersStore.emissiveNoisePixelShader = emissiveNoisePixelShader;
  Effect.ShadersStore.opacityNoisePixelShader = opacityNoisePixelShader;

  const opacityTexture = new ProceduralTexture('flowNrm', 1024, 'opacityNoise', scene, null, false, false);
  const emissiveTexture = new ProceduralTexture('flowNrm', 1024, 'emissiveNoise', scene, null, false, false);
  // sphereMaterial.diffuseTexture = emissiveTexture;

  sphereMaterial.diffuseColor = Color3.FromHexString('#137CBD');
  sphereMaterial.opacityTexture = opacityTexture;
  sphereMaterial.emissiveTexture = emissiveTexture;

  // --------------------------------------

  // --------------------------------------

  const pipeline = new DefaultRenderingPipeline('default', false, scene, [camera]);
  pipeline.fxaaEnabled = true;
  pipeline.samples = 8;

  pipeline.bloomEnabled = true;
  pipeline.bloomThreshold = 0.9;
  pipeline.bloomWeight = 5.0;
  pipeline.bloomKernel = 100;
  pipeline.bloomScale = 1.5;

  // --------------------------------------

  return {
    render({ time, deltaTime }) {
      const t = time;

      opacityTexture.setFloat('iTime', t);
      emissiveTexture.setFloat('iTime', t);

      const phaseFactor = Math.sin(t)*.25;

      opacityTexture.setFloat('phaseFactor', phaseFactor);
      emissiveTexture.setFloat('phaseFactor', phaseFactor);

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
