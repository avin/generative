// import { Engine } from '@babylonjs/core/Engines/engine';
// import { Scene } from '@babylonjs/core/scene';
// import { Mesh } from '@babylonjs/core/Meshes/mesh';
// import '@babylonjs/core/Meshes/meshBuilder';
// import '@babylonjs/core/Meshes/thinInstanceMesh';
// import { Vector3, Matrix } from '@babylonjs/core/Maths/math';
// import { Effect } from '@babylonjs/core/Materials/effect';
// import '@babylonjs/core/Rendering/depthRendererSceneComponent';
// import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
// import { DepthOfFieldEffectBlurLevel } from '@babylonjs/core/PostProcesses/depthOfFieldEffect';
// import { MotionBlurPostProcess } from '@babylonjs/core/PostProcesses/motionBlurPostProcess';
// import { ShaderMaterial } from '@babylonjs/core/Materials/shaderMaterial';
// import { Color3 } from '@babylonjs/core/Maths/math.color';
// import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';

import * as BABYLON from '@babylonjs/core/Legacy/legacy';

import { getWebGLContext } from '@/utils/webgl';
import particlesVertexShader from './shaders/vert.glsl';
import particlesFragShader from './shaders/frag.glsl';

const settings = {
  animate: true,
  context: getWebGLContext(),
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3(16 / 255, 22 / 255, 26 / 255);

  const camera = new BABYLON.ArcRotateCamera(
    'camera',
    -Math.PI / 0.5,
    Math.PI / 3.5,
    2,
    new BABYLON.Vector3(0, 0, 0),
    scene,
  );
  camera.attachControl(canvas, true);
  // camera.fov = 1.4;
  // camera.minZ = 0.1;

  BABYLON.Effect.ShadersStore.particlesVertexShader = particlesVertexShader;
  BABYLON.Effect.ShadersStore.particlesFragmentShader = particlesFragShader;

  const pcs = new BABYLON.PointsCloudSystem('pcs', 0, scene);

  const totalPoints = 500000;
  const itemsPerRow = Math.sqrt(totalPoints);
  const half = itemsPerRow / 2;

  const generateParticles = (particle, i, s) => {
    const x = ((i / itemsPerRow) | 0) - half;
    const y = (i % itemsPerRow) - half;

    particle.position = new BABYLON.Vector3(x * 0.05, 0, y * 0.05);
  };

  pcs.addPoints(totalPoints, generateParticles);

  await pcs.buildMeshAsync();

  const particlesMaterial = new BABYLON.ShaderMaterial(
    'shader',
    scene,
    {
      vertex: 'particles',
      fragment: 'particles',
    },
    {
      attributes: ['position', 'normal', 'uv'],
      uniforms: ['world', 'worldView', 'worldViewProjection', 'view', 'iTime', 'iResolution', 'pSize', 'camPos'],
      needAlphaBlending: true,
    },
  );
  particlesMaterial.pointsCloud = true;

  particlesMaterial.alphaMode = BABYLON.Engine.ALPHA_SCREENMODE;
  // particlesMaterial.alphaMode = 5.;

  particlesMaterial.setFloat('iResolution', new BABYLON.Vector2(1, 1));
  particlesMaterial.setFloat('pSize', 2);

  pcs.mesh.material = particlesMaterial;

  return {
    render({ time, width, height }) {
      particlesMaterial.setFloat('iTime', time);

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
