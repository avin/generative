import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import '@babylonjs/core/Rendering/prePassRendererSceneComponent';
import '@babylonjs/core/Rendering/depthRendererSceneComponent';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { DepthOfFieldEffectBlurLevel } from '@babylonjs/core/PostProcesses/depthOfFieldEffect';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';

import { getWebGLContext } from '@/utils/webgl';
import mesh_fragmentDefinitions from './shaders/mesh/fragmentDefinitions.glsl';
import mesh_fragmentCustomDiffuse from './shaders/mesh/fragmentCustomDiffuse.glsl';

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

  const initTime = +new Date();

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = Color3.FromHexString('#10161A');

  const camera = new ArcRotateCamera('camera', 0, 0, 14, new Vector3(0, -5, 0), scene);
  camera.fov = 1.5;
  camera.minZ = 0.1;
  camera.wheelDeltaPercentage = 0.1;

  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);
  baseLight.diffuse = new Color3(1.0, 1.0, 1.0);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);
  baseLight.intensity = 1.0;

  // -----------------------------

  const makeMesh = (phase, instance) => {
    const path = (() => {
      const path = [];
      const length = Math.PI * 2 * 120;

      for (let i = phase; i < length + phase; i += 1) {
        const sF = 0.0125;

        const fi = -i * sF;

        const radius = 5;
        const stepFactor = 20 - Math.PI / 4;
        const moveYFactor = Math.PI / 2;
        const yOffset = -phase * sF * moveYFactor - 15;

        const r = radius + Math.cos(fi * stepFactor + fi * Math.PI) * 1;
        const r2 = (Math.cos(fi * stepFactor + fi * Math.PI + Math.PI / 2) * Math.PI) / 2;

        const x = Math.cos(fi * 5) * r;
        const y = fi * moveYFactor + r2 - yOffset;
        const z = Math.sin(fi * 5) * r;

        path.push(new Vector3(x, y, z));
      }
      return path;
    })();

    const newMesh = MeshBuilder.CreateTube(
      'torus',
      {
        path,

        radius: 0.7,
        tessellation: 11,
        sideOrientation: Mesh.DOUBLESIDE,
        updatable: true,
        instance,
      },
      scene,
    );

    return newMesh;
  };

  let mesh = makeMesh(0);

  mesh.rotate(new Vector3(1, 0, 0), Math.PI);

  const meshMaterial = new CustomMaterial('meshMaterial', scene);

  meshMaterial.emissiveColor = Color3.Black();
  meshMaterial.specularColor = Color3.Black();
  meshMaterial.diffuseTexture = new Texture('NONE', scene); // to appear UV attributes
  mesh.material = meshMaterial;

  // ---------------------------------------

  meshMaterial.Fragment_Definitions(mesh_fragmentDefinitions);
  meshMaterial.Fragment_Custom_Diffuse(mesh_fragmentCustomDiffuse);

  meshMaterial.AddUniform('iTime', 'float');
  meshMaterial.AddUniform('iFrame', 'float');
  meshMaterial.AddUniform('camPos', 'vec3');

  let frame = 0;

  meshMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    meshMaterial.getEffect().setFloat('iTime', time);
    meshMaterial.getEffect().setFloat('iFrame', frame);
    meshMaterial.getEffect().setVector3('camPos', camera.position);
  };

  // -------------------

  const defaultPipeline = new DefaultRenderingPipeline('default', true, scene, [camera]);
  defaultPipeline.fxaaEnabled = true;
  defaultPipeline.imageProcessingEnabled = false;
  defaultPipeline.samples = 16;

  defaultPipeline.chromaticAberrationEnabled = true;
  defaultPipeline.chromaticAberration.aberrationAmount = 10.0;

  defaultPipeline.bloomEnabled = true;
  defaultPipeline.bloomThreshold = 0.25;
  defaultPipeline.bloomWeight = 0.65;
  defaultPipeline.bloomKernel = 100;
  defaultPipeline.bloomScale = 0.9;

  defaultPipeline.grainEnabled = true;
  defaultPipeline.grain.intensity = 5;
  defaultPipeline.grain.animated = true;

  defaultPipeline.depthOfFieldEnabled = true;
  defaultPipeline.depthOfFieldBlurLevel = DepthOfFieldEffectBlurLevel.Low;
  defaultPipeline.depthOfField.fStop = 0.5;
  defaultPipeline.depthOfField.focalLength = 800;
  defaultPipeline.depthOfField.focusDistance = 10000;
  defaultPipeline.depthOfField.lensSize = 10;

  return {
    render({ time, deltaTime }) {
      mesh = makeMesh(frame, mesh);

      frame += 1;

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
