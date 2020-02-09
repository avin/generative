import * as BABYLON from 'babylonjs';
import customVertexShader from './shaders/vert.glsl';
import customFragmentShader from './shaders/frag.glsl';

const settings = {
  animate: true,
  context: 'webgl',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  const scene = new BABYLON.Scene(engine);
  scene.clearColor = BABYLON.Color3.Black;
  scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
  scene.fogDensity = 0.125;
  scene.fogColor = new BABYLON.Color3(0, 0, 0);

  BABYLON.Effect.ShadersStore.customVertexShader = customVertexShader;
  BABYLON.Effect.ShadersStore.customFragmentShader = customFragmentShader;

  const camera = new BABYLON.ArcRotateCamera('Camera', -Math.PI / 2, Math.PI / 3, 5, BABYLON.Vector3.Zero(), scene);
  // camera.attachControl(canvas, true);
  camera.panningSensibility = 0;
  camera.fov = 1;

  // ========= VIDEO-FILTER =====================

  const pipeline = new BABYLON.DefaultRenderingPipeline('default-pipeline', true, scene, [camera]);
  pipeline.samples = 2;

  pipeline.chromaticAberrationEnabled = true;
  pipeline.chromaticAberration.aberrationAmount = 3.7;
  pipeline.chromaticAberration.radialIntensity = 0;

  pipeline.imageProcessingEnabled = true;
  pipeline.imageProcessing.contrast = 1.1;
  pipeline.imageProcessing.exposure = 1.1;

  pipeline.imageProcessing.vignetteEnabled = true;
  pipeline.imageProcessing.vignetteWeight = 0.1;
  pipeline.imageProcessing.vignetteStretch = 0.1;
  pipeline.imageProcessing.vignetteCameraFov = 0.3;

  pipeline.depthOfFieldEnabled = false;
  pipeline.depthOfField.focalLength = 2735;
  pipeline.depthOfField.fStop = 16.9;
  pipeline.depthOfField.focusDistance = 7169;
  pipeline.depthOfField.lensSize = 38;

  pipeline.grainEnabled = true;
  pipeline.grain.intensity = 2;
  pipeline.grain.animated = false;

  // =================================================

  const ground = new BABYLON.Mesh.CreateGround('ground', 40, 40, 600, scene);

  const groundMaterial = new BABYLON.ShaderMaterial(
    'ground-material',
    scene,
    {
      vertex: 'custom',
      fragment: 'custom',
    },
    {
      attributes: ['position', 'normal', 'uv'],
      uniforms: ['world', 'worldView', 'worldViewProjection', 'view', 'iTime', 'iResolution', 'vFogInfos', 'vFogColor'],
      needAlphaBlending: true,
    },
  );

  ground.material = groundMaterial;
  groundMaterial.wireframe = true;

  groundMaterial.alphaMode = BABYLON.Engine.ALPHA_MAXIMIZED;

  groundMaterial.setFloat('iResolution', new BABYLON.Vector2(1, 1));

  groundMaterial.onBind = mesh => {
    const effect = groundMaterial.getEffect();
    effect.setFloat4('vFogInfos', scene.fogMode, scene.fogStart, scene.fogEnd, scene.fogDensity);
    effect.setColor3('vFogColor', scene.fogColor);
  };

  return {
    render({ time }) {
      camera.alpha += 0.00125;
      groundMaterial.setFloat('iTime', time);
      const aRatio = scene.getEngine().getAspectRatio(camera);
      groundMaterial.setVector2('iResolution', new BABYLON.Vector2(aRatio, 1));

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
