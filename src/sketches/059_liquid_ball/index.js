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

import { getWebGLContext } from '@/utils/webgl';
import main_vertexDefinitions from './shaders/main/vertexDefinitions.glsl';
import main_vertexBeforePositionUpdated from './shaders/main/vertexBeforePositionUpdated.glsl';

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

  // const camera = new ArcRotateCamera('camera', 0, 0, 20.0, new Vector3(0, 0, 0), scene);
  const camera = new ArcRotateCamera('camera', -1, 0.5, 20.0, new Vector3(0, 0, 0), scene);
  camera.wheelPrecision = 50;
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
  sphere.isPickable = false;
  sphere.doNotSyncBoundingInfo = false;
  sphere.freezeWorldMatrix();

  const mainMaterial = new PBRCustomMaterial('sphereMaterial', scene);

  mainMaterial.metallic = 0.1;
  mainMaterial.roughness = 0.075;
  mainMaterial.emissiveColor = new Color3.FromHexString('#293742');

  sphere.material = mainMaterial;

  //
  // Shaders
  //

  mainMaterial.Vertex_Definitions(main_vertexDefinitions);
  mainMaterial.Vertex_Before_PositionUpdated(main_vertexBeforePositionUpdated);

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
