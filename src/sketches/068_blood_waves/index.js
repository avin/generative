import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import '@babylonjs/core/Materials/standardMaterial';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { PBRCustomMaterial } from '@babylonjs/materials/custom/pbrCustomMaterial';
import { ImageProcessingConfiguration, PostProcess } from '@babylonjs/core';
import { Effect } from '@babylonjs/core/Materials/effect';

import main_vertexDefinitions from './shaders/main/vertexDefinitions.glsl';
import main_vertexBeforePositionUpdated from './shaders/main/vertexBeforePositionUpdated.glsl';
import postprocessFragment from './shaders/postprocess/fragment.glsl';

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
  // scene.clearColor = new Color3(16 / 255, 22 / 255, 26 / 255);
  scene.clearColor = new Color3(255 / 255, 22 / 255, 26 / 255);

  scene.imageProcessingConfiguration.toneMappingEnabled = true;
  scene.imageProcessingConfiguration.toneMappingType = ImageProcessingConfiguration.TONEMAPPING_ACES;
  scene.imageProcessingConfiguration.exposure = 2;

  const camera = new ArcRotateCamera('camera', 2.44, 0.76, 13.47, new Vector3(0, -2.5, 0), scene);
  camera.lowerAlphaLimit = 1.4;
  camera.upperAlphaLimit = 3.25;
  camera.upperBetaLimit = 1.0;
  camera.lowerRadiusLimit = 9;
  camera.wheelPrecision = 50;
  camera.minZ = 0.125;
  camera.fov = 1.1;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.5, 0.5, 0.5);
  baseLight.intensity = 0.25;

  const dirLight = new DirectionalLight('dirLight', new Vector3(-1, -1, 1), scene);
  dirLight.intensity = 1.25;
  dirLight.position = new Vector3(10, 10, -20);

  const subdivisions = 200;

  const plane = MeshBuilder.CreateGround('sphere', {
    width: 10,
    height: 10,
    subdivisions,
  });

  const sidePlane1 = MeshBuilder.CreateGround('sphere', {
    width: 10,
    height: 1,
    subdivisionsX: subdivisions,
  });
  sidePlane1.rotate(new Vector3(1, 0, 0), Math.PI / 2);
  sidePlane1.position.z = 5;
  sidePlane1.position.y = -0.5;
  sidePlane1.bakeCurrentTransformIntoVertices();

  const sidePlane2 = MeshBuilder.CreateGround('sphere', {
    width: 10,
    height: 1,
    subdivisionsX: subdivisions,
  });
  sidePlane2.rotate(new Vector3(1, 0, 0), Math.PI / 2);
  sidePlane2.rotate(new Vector3(0, 0, 1), Math.PI / 2);
  sidePlane2.position.x = -5;
  sidePlane2.position.y = -0.5;
  sidePlane2.bakeCurrentTransformIntoVertices();

  const mainMaterial = new PBRCustomMaterial('bloodMaterial', scene);

  // mainMaterial.wireframe = true;
  mainMaterial.metallic = 0.05;
  mainMaterial.roughness = 0.125;
  mainMaterial.albedoColor = new Color3(0.98, 0, 0);

  plane.material = mainMaterial;
  sidePlane1.material = mainMaterial;
  sidePlane2.material = mainMaterial;

  //
  // Shaders
  //

  mainMaterial.Vertex_Definitions(main_vertexDefinitions);
  mainMaterial.Vertex_Before_PositionUpdated(main_vertexBeforePositionUpdated);

  //
  // Attributes
  //

  mainMaterial.AddUniform('iTime', 'float');

  mainMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    mainMaterial.getEffect().setFloat('iTime', time);
  };

  // ------------------------------

  Effect.ShadersStore.customFragmentShader = postprocessFragment;
  new PostProcess('shade-sides', 'custom', null, null, 1.0, camera);

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
