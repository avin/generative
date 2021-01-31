import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { PBRCustomMaterial } from '@babylonjs/materials/custom/pbrCustomMaterial';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';

import mesh_fragmentDefinitions from './shaders/mesh/fragmentDefinitions.glsl';
import mesh_fragmentCustomAlbedo from './shaders/mesh/fragmentCustomAlbedo.glsl';

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
  // Main scene ===============================
  //

  const initTime = +new Date();

  const scene = new Scene(engine);
  scene.clearColor = Color4.FromColor3(new Color3(25 / 255, 32 / 255, 38 / 255));

  const cAlpha = Math.PI / 4;
  const cBeta = Math.PI / 3;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 30.0, new Vector3(0, 0, 0), scene);
  camera.wheelPrecision = 50;
  camera.minZ = 0.9;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-2, 2, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);

  const segments = 512;
  const radius = 0.6;

  const createMesh = (baseMesh, time = 0) => {
    return MeshBuilder.CreateTube('torus', {
      path: (() => {
        const path = [];

        for (let i = 0; i <= segments; i += 1) {
          const p = i / (segments - radius * 0.1);

          const g = 16;

          const f1 = p * Math.PI * g - time * 500;
          const f2 = Math.cos(p * Math.PI * 2);

          const x = Math.cos(f1) * (f2 * 0.5 + 0.5 + 0.5) * 5;
          const z = Math.sin(f1) * (f2 * 0.5 + 0.5 + 0.5) * 5;
          const y = Math.cos(p * (Math.PI * 2) + Math.PI / 2) * 5;

          path.push(new Vector3(x, y, z));
        }

        return path;
      })(),
      radius,
      tessellation: 64,
      updatable: true,
      instance: baseMesh,
    });
  };

  const mesh = createMesh();

  const mat = new PBRCustomMaterial('plastic', scene);
  mat.metallic = 0.0;
  mat.roughness = 1.0;
  mat.albedoColor = new Color3(1, 0, 0);
  mat.albedoTexture = new Texture('none', scene);
  mesh.material = mat;

  // -------------------

  mat.Fragment_Definitions(mesh_fragmentDefinitions);
  mat.Fragment_Custom_Albedo(mesh_fragmentCustomAlbedo);

  mat.AddUniform('iTime', 'float');

  mat.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    mat.getEffect().setFloat('iTime', time);
  };

  // -----------------------

  const defaultPipeline = new DefaultRenderingPipeline('default', true, scene, [camera]);
  defaultPipeline.fxaaEnabled = true;
  defaultPipeline.samples = 8;

  defaultPipeline.imageProcessingEnabled = false;

  defaultPipeline.chromaticAberrationEnabled = true;
  defaultPipeline.chromaticAberration.aberrationAmount = 2.5;

  // ------------------------------

  return {
    render({ time, width, height }) {
      mesh.rotation.y = time * Math.PI;

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
