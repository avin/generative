import * as BABYLON from '@babylonjs/core';
import { getWebGLContext } from '@/utils/webgl';
import customVertexShader from './shaders/vert.glsl';
import customFragmentShader from './shaders/frag.glsl';

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
  scene.clearColor = BABYLON.Color3.Black;
  const camera = new BABYLON.ArcRotateCamera('Camera', -Math.PI / 2, Math.PI / 3, 400, BABYLON.Vector3.Zero(), scene);
  camera.maxZ = 3000;
  camera.fov = 1.5;
  camera.attachControl(canvas, true);

  BABYLON.Effect.ShadersStore.customVertexShader = customVertexShader;
  BABYLON.Effect.ShadersStore.customFragmentShader = customFragmentShader;

  const plane = new BABYLON.Mesh.CreateGround('plane', 5000, 5000, 500, scene, false);

  const planeMaterial = new BABYLON.ShaderMaterial(
    'planeMaterial',
    scene,
    {
      vertex: 'custom',
      fragment: 'custom',
    },
    {
      attributes: ['position', 'normal', 'uv'],
      uniforms: ['world', 'worldView', 'worldViewProjection', 'view', 'iTime', 'iResolution'],
    },
  );
  plane.material = planeMaterial;
  planeMaterial.backFaceCulling = false;
  planeMaterial.alphaMode = BABYLON.Engine.ALPHA_ADD;

  planeMaterial.setVector2('iResolution', new BABYLON.Vector2(1, 1));

  const oFov = 1.5;

  return {
    render({ time }) {
      planeMaterial.setFloat('iTime', time);
      const aRatio = scene.getEngine().getAspectRatio(camera);
      planeMaterial.setVector2('iResolution', new BABYLON.Vector2(aRatio, 1));
      camera.alpha += time * 0.000001;
      camera.fov = oFov + Math.sin(time * 0.5) * 0.125;

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
