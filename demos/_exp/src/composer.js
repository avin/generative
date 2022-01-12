import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

export const createComposer = (ctx) => {
  const { renderer, scene, camera } = ctx;

  const renderScene = new RenderPass(scene, camera);

  const bloomPass = new UnrealBloomPass(new THREE.Vector2(256, 256), 1.75, 1.5, 0.0);
  bloomPass.nMips = 5;
  bloomPass.highPassUniforms.smoothWidth.value = 1.0;

  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const target = new THREE.WebGLMultisampleRenderTarget(size.width, size.height, {
    format: THREE.RGBAFormat,
    encoding: THREE.sRGBEncoding,
  });
  target.samples = 8;

  const composer = new EffectComposer(renderer, target);
  ctx.composer = composer;
  composer.addPass(renderScene);
  composer.addPass(bloomPass);
};
