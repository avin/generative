import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import '@babylonjs/core/Materials/standardMaterial';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { PBRCustomMaterial } from '@babylonjs/materials/custom/pbrCustomMaterial';
import random from 'canvas-sketch-util/random';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { Effect } from '@babylonjs/core/Materials/effect';
import { ImageProcessingConfiguration, PointLight, PostProcess } from '@babylonjs/core';
import { Mesh } from '@babylonjs/core/Meshes/mesh';

import main_fragmentCustomAlbedo from './shaders/main/fragmentCustomAlbedo.glsl';
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

  let time = 0;

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = new Color3(16 / 255, 22 / 255, 26 / 255);

  scene.imageProcessingConfiguration.toneMappingEnabled = true;
  scene.imageProcessingConfiguration.toneMappingType = ImageProcessingConfiguration.TONEMAPPING_ACES;
  scene.imageProcessingConfiguration.exposure = 2;

  const camera = new ArcRotateCamera('camera', 3.48, 0.88, 10, new Vector3(0, 0, 0), scene);
  camera.wheelPrecision = 50;
  camera.minZ = 0.01;
  camera.fov = 1.2;
  camera.attachControl(canvas, true);

  const pLight1 = new PointLight('pLight', Vector3.Zero(), scene);
  pLight1.intensity = 0.01;

  const pLight2 = new PointLight('pLight', Vector3.Zero(), scene);
  pLight2.intensity = 0.01;

  const pLight3 = new PointLight('pLight', Vector3.Zero(), scene);
  pLight3.intensity = 0.01;

  const segments = 50;

  const buildTube = (time = 0, originMesh) => {
    const path = (() => {
      const path = [];
      for (let i = 0; i < segments; i += 1) {
        const xf = (i + time) * 0.01 * 5;
        const x = i * 0.01 * 5;

        const fy = random.noise3D(xf, 0, 0) * 0.14;
        const fz = random.noise3D(xf, 0, 100) * 0.14;
        path.push(new Vector3(x, fy, fz));
      }
      return path;
    })();

    const mesh = MeshBuilder.CreateTube('sphere', {
      path,
      radiusFunction: i => {
        const xf = (i + time * 5) * 0.01 * 5;
        const fr = random.noise3D(xf, 0, 200) * 0.112;

        return (1 - i / segments) * 0.1 + (fr * 0.5 + 0.5) * 0.05;
      },
      instance: originMesh,
      updatable: true,
      sideOrientation: Mesh.BACKSIDE,
      tessellation: 128,
    });

    camera.position = path[2];
    camera.target = path[6];

    pLight1.position = path[10];
    pLight2.position = path[15];
    pLight3.position = path[20];

    return mesh;
  };

  let tube = buildTube();

  const mainMaterial = new PBRCustomMaterial('bloodMaterial', scene);

  mainMaterial.metallic = 0.0;
  mainMaterial.roughness = 0.025;
  mainMaterial.albedoTexture = new Texture('none', scene);

  tube.material = mainMaterial;

  //
  // Shaders
  //

  // mainMaterial.Vertex_Definitions(main_vertexDefinitions);
  // mainMaterial.Vertex_Before_PositionUpdated(main_vertexBeforePositionUpdated);
  mainMaterial.Fragment_Custom_Albedo(main_fragmentCustomAlbedo);

  //
  // Attributes
  //

  mainMaterial.AddUniform('iTime', 'float');
  mainMaterial.AddUniform('col1', 'vec3');
  mainMaterial.AddUniform('col2', 'vec3');

  const col1 = new Color3(17 / 255, 22 / 255, 26 / 255).toLinearSpace();
  const col2 = new Color3(245 / 255, 248 / 255, 250 / 255).toLinearSpace();

  const col1vector = new Vector3(col1.r, col1.g, col1.b);
  const col2vector = new Vector3(col2.r, col2.g, col2.b);

  mainMaterial.onBind = () => {
    mainMaterial.getEffect().setFloat('iTime', time * 5);
    mainMaterial.getEffect().setVector3('col1', col1vector);
    mainMaterial.getEffect().setVector3('col2', col2vector);
  };

  // ------------------------------

  Effect.ShadersStore.customFragmentShader = postprocessFragment;
  new PostProcess('shade-sides', 'custom', null, null, 1.0, camera);

  // ------------------------------

  return {
    render({ deltaTime, frame }) {
      const delta = Math.min(deltaTime, 1 / 60);
      time += delta;

      tube = buildTube(time * 5, tube);

      scene.render();
    },
    resize({ pixelRatio, width, height }) {
      engine.resize();
    },
    unload() {
      engine.dispose();
    },
    babylonScene: scene
  };
};

export default { sketch, settings };
