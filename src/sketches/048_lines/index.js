import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { Vector3, Matrix } from '@babylonjs/core/Maths/math';
import { Effect } from '@babylonjs/core/Materials/effect';
import '@babylonjs/core/Rendering/depthRendererSceneComponent';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { DepthOfFieldEffectBlurLevel } from '@babylonjs/core/PostProcesses/depthOfFieldEffect';
import { MotionBlurPostProcess } from '@babylonjs/core/PostProcesses/motionBlurPostProcess';
import { ShaderMaterial } from '@babylonjs/core/Materials/shaderMaterial';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import customVertexShader from './shaders/vert.glsl';
import customFragmentShader from './shaders/frag.glsl';

const settings = {
  animate: true,
  context: 'webgl',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  const scene = new Scene(engine);
  scene.clearColor = new Color3(16 / 255, 22 / 255, 26 / 255);

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.7, Math.PI / 3.5, 5, new Vector3(-25, 0, 0), scene);
  camera.fov = 1.4; // field of view
  camera.minZ = 0.1; // near plane

  Effect.ShadersStore.customVertexShader = customVertexShader;
  Effect.ShadersStore.customFragmentShader = customFragmentShader;

  // Material

  const meshesCount = 1000;

  const material = new ShaderMaterial(
    'material',
    scene,
    {
      vertex: 'custom',
      fragment: 'custom',
    },
    {
      attributes: ['position', 'normal', 'uv', 'idx', 'iTime'],
      uniforms: [
        'world',
        'worldView',
        'worldViewProjection',
        'view',
        'projection',
        'viewProjection',
        'iTime',
        'meshesCount',
      ],
      needAlphaBlending: true,
    },
  );

  // Tubes here

  const sideOrientation = Mesh.FRONTSIDE;
  const radius = 0.02;

  const path = [];
  for (let i = -30; i < 30; i += 0.02) {
    const x = i * 3;
    const y = 0;
    const z = 0;
    path.push(new Vector3(x, y, z));
  }
  const mesh = Mesh.CreateTube('tube', path, radius, 3, null, 0, scene, true, sideOrientation);
  mesh.material = material;

  const bufferMatrices = new Float32Array(16 * meshesCount);
  const bufferIdx = new Float32Array(meshesCount);

  const idxArr = [];
  for (let n = 0; n < meshesCount; n += 1) {
    const matrix = Matrix.Translation(0, 0, 0);
    matrix.copyToArray(bufferMatrices, n * 16);
    idxArr.push(n);
  }
  bufferIdx.set(idxArr);

  mesh.thinInstanceSetBuffer('matrix', bufferMatrices, 16);
  mesh.thinInstanceSetBuffer('idx', bufferIdx, 1);

  material.setFloat('meshesCount', meshesCount);

  // postprocess

  const pipeline = new DefaultRenderingPipeline(
    'defaultPipeline', // The name of the pipeline
    true,
    scene,
    [camera],
  );

  // DOF
  pipeline.imageProcessingEnabled = false;

  pipeline.samples = 4;
  pipeline.depthOfFieldEnabled = true;
  pipeline.depthOfFieldBlurLevel = DepthOfFieldEffectBlurLevel.Low;
  pipeline.depthOfField.fStop = 1.4; // 1.4 by default
  pipeline.depthOfField.focalLength = 60; // 50 by default, mm
  pipeline.depthOfField.focusDistance = 3000; // 2000 by default, mm
  pipeline.depthOfField.lensSize = 50; // 50 by default

  // Chromatic Aberration
  pipeline.chromaticAberrationEnabled = true;
  pipeline.chromaticAberration.aberrationAmount = 10; // 30 by default

  pipeline.bloomEnabled = true;
  pipeline.bloomThreshold = 0;
  pipeline.bloomWeight = 1.0;
  pipeline.bloomKernel = 70;
  pipeline.bloomScale = 0.5;

  /* sharpen */
  pipeline.sharpenEnabled = true;
  pipeline.sharpen.adaptScaleToCurrentViewport = true; // false by default
  pipeline.sharpen.edgeAmount = 0.3; // 0.3 by default
  pipeline.sharpen.colorAmount = 1.5; // 1 by default

  // Grain
  pipeline.grainEnabled = true;
  pipeline.grain.intensity = 12;
  pipeline.grain.animated = true;

  const motionblur = new MotionBlurPostProcess('mb', scene, 2.0, camera);
  motionblur.motionStrength = 2.2;
  motionblur.isObjectBased = false;

  return {
    render({ time, width, height }) {
      material.setFloat('iTime', time * 0.5);

      scene.render();
    },
    resize({ pixelRatio, width, height }) {
      engine.resize();
    },
    unload() {
      engine.dispose();
    },
    babylonScene: scene,
  };
};

export default { sketch, settings };
