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
import { CubeTexture, DirectionalLight, PointLight, SpotLight } from '@babylonjs/core';
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
  const camera = new ArcRotateCamera('camera', -1, 0.5, 20.0, new Vector3(0, 0, 0), scene);
  // camera.wheelPrecision = 50;
  camera.minZ = 0.2;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.5, 0.5, 0.5);
  baseLight.intensity = 0.25;

  const dirLight = new DirectionalLight('dirLight', new Vector3(-1, -2, 1), scene);
  dirLight.position = new Vector3(20, 40, -20);


  const radius = 5;

  const sphere = MeshBuilder.CreateSphere('sphere', {
    diameter: radius * 2,
    segments: 512,
  });

  const mainMaterial = new PBRCustomMaterial('sphereMaterial', scene);

  mainMaterial.metallic = 0.1;
  mainMaterial.roughness = 0.075;


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
    mainMaterial.getEffect().setFloat('radiusVariationAmplitude', 1.2);
    mainMaterial.getEffect().setFloat('radiusNoiseFrequency', 0.33);
  };

  // ------------------------------

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
