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

  const camera = new ArcRotateCamera('camera', 0.5, 0.5, 5, new Vector3(0, 0, 0), scene);
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

  const mesh = MeshBuilder.CreateTorusKnot('t', { radialSegments: 200, tubularSegments: 16 }, scene);

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

  const frame = 0;

  meshMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    meshMaterial.getEffect().setFloat('iTime', time);
    meshMaterial.getEffect().setFloat('iFrame', frame);
    meshMaterial.getEffect().setVector3('camPos', camera.position);
  };

  return {
    render({ time, deltaTime }) {
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
