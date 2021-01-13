import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { PBRCustomMaterial } from '@babylonjs/materials/custom/pbrCustomMaterial';

import main_vertexDefinitions from './shaders/main/vertexDefinitions.glsl';
import main_vertexBeforePositionUpdated from './shaders/main/vertexBeforePositionUpdated.glsl';
import main_fragmentDefinitions from './shaders/main/fragmentDefinitions.glsl';
import main_fragmentCustomDiffuse from './shaders/main/fragmentCustomDiffuse.glsl';
import tube_vertexDefinitions from '@/sketches/053_linear_mushroom/shaders/tube/vertexDefinitions.glsl';
import tube_vertexBeforePositionUpdated from '@/sketches/053_linear_mushroom/shaders/tube/vertexBeforePositionUpdated.glsl';
import tube_fragmentDefinitions from '@/sketches/053_linear_mushroom/shaders/tube/fragmentDefinitions.glsl';
import tube_fragmentCustomDiffuse from '@/sketches/053_linear_mushroom/shaders/tube/fragmentCustomDiffuse.glsl';
import {CubeTexture, DirectionalLight, PointLight, SpotLight} from '@babylonjs/core';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';

const settings = {
  animate: true,
  context: 'webgl2',
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
  scene.clearColor = Color3.FromHexString('#182026');

  // const camera = new ArcRotateCamera('camera', 0, 0, 20.0, new Vector3(0, 0, 0), scene);
  const camera = new ArcRotateCamera('camera', -1.6, 1.6, 20.0, new Vector3(0, 0, 0), scene);
  // camera.wheelPrecision = 50;
  camera.minZ = 0.2;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.5, 0.5, 0.5);
  baseLight.intensity = 0.25;
  // baseLight.groundColor = new Color3(1.0, 1.0, 1.0);
  // baseLight.specular = new Color3(0.25, 0.25, 0.25);

  // const spotLight = new SpotLight('spotLight', new Vector3(0,10,0), Vector3.Zero(), Math.PI/4, .5, scene)
  // const spotLight = new SpotLight('spotLight', new Vector3(0, 10, -10), new Vector3(0, -1, 0), Math.PI / 3, 2, scene);
  // spotLight.intensity = 100000;

  // const pointLight = new SpotLight('pointLight', new Vector3(5, 5, 5), new Vector3(1, -1, 1), Math.PI / 5, 30, scene);
  // pointLight.intensity = 10;

  var light = new DirectionalLight("dir01", new Vector3(-1, -2, 1), scene);
  light.position = new Vector3(20, 40, -20);

  // var light00 = new SpotLight("*spot00", new Vector3(10, 10, 10), new Vector3(1, -1, -1), 1.2, 24, scene);
  // light00.intensity = 100;
  // light00.shadowMinZ = 15;
  // light00.shadowMaxZ = 40;


  // const lightMesh = new MeshBuilder.CreateSphere('lightMesh', { segments: 5, diameter: 1 }, scene);
  // lightMesh.material = new StandardMaterial('', scene);
  // lightMesh.material.emissiveColor = new Color3(1, 1, 1);
  // lightMesh.position = pointLight.position;

  // ------------------------------

  const radius = 5;
  // const sphere = MeshBuilder.CreateIcoSphere('sphere', {
  //   radius,
  //   subdivisions: 128,
  //   flat: false,
  // });

  const sphere = MeshBuilder.CreateSphere('sphere', {
    diameter: radius * 2,
    segments: 512,
  });

  const mainMaterial = new PBRCustomMaterial('sphereMaterial', scene);

  mainMaterial.metallic = 0.10;
  mainMaterial.roughness = .075;

  // mainMaterial.subSurface.isTranslucencyEnabled = true;
  // mainMaterial.subSurface.tintColor = Color3.Teal();

  // mainMaterial.metallic = 0.7;
  // mainMaterial.roughness = 0.0;
  //
  // mainMaterial.albedoColor = Color3.FromHexString('#137CBD');
  // mainMaterial.metallic = 0.1;
  // mainMaterial.roughness = 0.1;

  // mainMaterial.microSurface = 10.7;
  // mainMaterial.disableLighting = true;
  // mainMaterial.twoSidedLighting = true;

  // mainMaterial.wireframe = true;

  // mainMaterial.clearCoat = .1;
  // mainMaterial.specularColor = new Color3(0,0,0);
  // mainMaterial.diffuseColor = Color3.FromHexString('#48AFF0');
  // mainMaterial.reflectionTexture = CubeTexture.CreateFromPrefilteredData("/static/assets/env/e1.dds", scene);

  // mainMaterial.subSurface.isTranslucencyEnabled = true;

  sphere.material = mainMaterial;

  //
  // Shaders
  //

  mainMaterial.Vertex_Definitions(main_vertexDefinitions);
  mainMaterial.Vertex_Before_PositionUpdated(main_vertexBeforePositionUpdated);
  // mainMaterial.Fragment_Definitions(main_fragmentDefinitions);
  // mainMaterial.Fragment_Custom_Diffuse(main_fragmentCustomDiffuse);

  //
  // Attributes
  //

  mainMaterial.AddUniform('iTime', 'float');
  mainMaterial.AddUniform('radius', 'float');
  mainMaterial.AddUniform('radiusVariationAmplitude', 'float');
  mainMaterial.AddUniform('radiusNoiseFrequency', 'float');
  mainMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    mainMaterial.getEffect().setFloat('iTime', time);

    mainMaterial.getEffect().setFloat('radius', radius);
    mainMaterial.getEffect().setFloat('radiusVariationAmplitude', 1.5);
    mainMaterial.getEffect().setFloat('radiusNoiseFrequency', .3);
  };

  // ------------------------------

  //
  //
  // // -----------------------------
  //
  // const ssao = new SSAO2RenderingPipeline('ssao', scene, {
  //   ssaoRatio: 1.5, // Ratio of the SSAO post-process, in a lower resolution
  //   blurRatio: 1, // Ratio of the combine post-process (combines the SSAO and the scene)
  // });
  // ssao.radius = 1;
  // ssao.totalStrength = 1.3;
  // ssao.expensiveBlur = true;
  // ssao.samples = 16;
  // ssao.maxZ = 100;
  //
  // scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline('ssao', camera);
  //
  // // -----------------------------

  // const defaultPipeline = new DefaultRenderingPipeline('default', true, scene, [camera]);
  // defaultPipeline.fxaaEnabled = true;
  // defaultPipeline.samples = 8;
  //
  // defaultPipeline.MotionBlurEnabled = true;
  // defaultPipeline.motionStrength = 0.5;
  // defaultPipeline.motionBlurSamples = 32;
  //
  // defaultPipeline.bloomEnabled = true;
  // defaultPipeline.bloomThreshold = 0.17;
  // defaultPipeline.bloomWeight = 0.2;
  // defaultPipeline.bloomKernel = 100;
  // defaultPipeline.bloomScale = 0.9;
  //
  // defaultPipeline.imageProcessing.vignetteEnabled = true;
  // defaultPipeline.imageProcessing.vignetteColor = new Color3(24 / 255, 32 / 255, 38 / 255);
  // defaultPipeline.imageProcessing.vignetteCameraFov = 0.2;
  // defaultPipeline.imageProcessing.vignetteWeight = 10.0;

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
