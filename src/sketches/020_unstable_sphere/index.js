import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Matrix, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Rendering/prePassRendererSceneComponent';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { PostProcess } from '@babylonjs/core';
import { Effect } from '@babylonjs/core/Materials/effect';
import { PBRCustomMaterial } from '@babylonjs/materials/custom/pbrCustomMaterial';
import { getWebGLContext } from '@/utils/webgl';

import postprocessFragment from './shaders/postprocess/fragment.glsl';
import particle_fragmentDefinitions from './shaders/particle/fragmentDefinitions.glsl';
import particle_fragmentCustomAlpha from './shaders/particle/fragmentCustomAlpha.glsl';
import particle_fragmentCustomAlbedo from './shaders/particle/fragmentCustomAlbedo.glsl';
import particle_vertexBeforePositionUpdated from './shaders/particle/vertexBeforePositionUpdated.glsl';
import particle_vertexDefinitions from './shaders/particle/vertexDefinitions.glsl';

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
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = Color3.FromHexString('#10161A');
  scene.freezeActiveMeshes();

  const cAlpha = -Math.PI / 3;
  const cBeta = Math.PI / 2;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 15.0, new Vector3(0, 0, 0), scene);
  camera.minZ = 0.1;
  camera.fov = 1.0;
  camera.wheelPrecision = 20;
  camera.useAutoRotationBehavior = true;
  camera.autoRotationBehavior.idleRotationSpeed = 0.025;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-0.25, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0, 0, 1);
  baseLight.specular = new Color3(10.0, 1.0, 0.0);

  // ----------------------------

  const totalParticles = 20000;
  const sphereRadius = 0.05;

  // ----------------------------

  const particle = MeshBuilder.CreateSphere(
    's',
    {
      diameter: sphereRadius,
      segments: 6,
    },
    scene,
  );
  particle.freezeWorldMatrix();
  particle.doNotSyncBoundingInfo = true;

  // ----------------------------

  const matrixBuffer = new Float32Array(16 * totalParticles);
  const idxBuffer = new Float32Array(totalParticles);
  const rFactor1Buffer = new Float32Array(totalParticles);
  const rFactor2Buffer = new Float32Array(totalParticles);
  const rFactor3Buffer = new Float32Array(totalParticles);

  for (let i = 0; i < totalParticles; i += 1) {
    const matrix = Matrix.Translation(0, 0, 0);
    matrix.copyToArray(matrixBuffer, i * 16);

    idxBuffer[i] = i;
    rFactor1Buffer[i] = Math.random();
    rFactor2Buffer[i] = Math.random();
    rFactor3Buffer[i] = Math.floor(Math.random() * 1000);
  }

  particle.thinInstanceSetBuffer('matrix', matrixBuffer, 16);
  particle.thinInstanceSetBuffer('idx', idxBuffer, 1);
  particle.thinInstanceSetBuffer('rFactor1', rFactor1Buffer, 1);
  particle.thinInstanceSetBuffer('rFactor2', rFactor2Buffer, 1);
  particle.thinInstanceSetBuffer('rFactor3', rFactor3Buffer, 1);

  // ----------------------------

  const particleMaterial = new PBRCustomMaterial('mat', scene);
  particle.material = particleMaterial;
  particleMaterial.metallic = 0.0;
  particleMaterial.roughness = 0.1;
  particleMaterial.alpha = 0.0;

  particleMaterial.Vertex_Definitions(particle_vertexDefinitions);
  particleMaterial.Vertex_Before_PositionUpdated(particle_vertexBeforePositionUpdated);
  particleMaterial.Fragment_Custom_Alpha(particle_fragmentCustomAlpha);
  particleMaterial.Fragment_Custom_Albedo(particle_fragmentCustomAlbedo);
  particleMaterial.Fragment_Definitions(particle_fragmentDefinitions);

  particleMaterial.AddAttribute('idx');
  particleMaterial.AddAttribute('rFactor1');
  particleMaterial.AddAttribute('rFactor2');
  particleMaterial.AddAttribute('rFactor3');

  particleMaterial.AddUniform('iTime', 'float');

  const initTime = +new Date();
  particleMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    particleMaterial.getEffect().setFloat('iTime', time);
  };

  // --------------------------------

  const defaultPipeline = new DefaultRenderingPipeline('default', true, scene, [camera]);
  defaultPipeline.fxaaEnabled = true;
  defaultPipeline.imageProcessingEnabled = false;
  defaultPipeline.samples = 8;

  defaultPipeline.bloomEnabled = true;
  defaultPipeline.bloomThreshold = 0.0;
  defaultPipeline.bloomWeight = 1.75;
  defaultPipeline.bloomKernel = 30;
  defaultPipeline.bloomScale = 0.5;

  Effect.ShadersStore.customFragmentShader = postprocessFragment;
  new PostProcess('shade-sides', 'custom', null, null, 1.0, camera);

  return {
    render({ time, width, height, frame, deltaTime }) {
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
