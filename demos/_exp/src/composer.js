import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { DofPass } from './DofPass';
import { PrettyShader } from '../../../common/shaders/PrettyShader/PrettyShader';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

export const createComposer = (ctx) => {
  const { renderer, scene, camera, width, height } = ctx;

  const renderScene = new RenderPass(scene, camera);

  const dofPass = new DofPass(scene, camera, {
    uFar: 50.0,
    radScale: 0.1,
    focusPoint: 48,
    focusScale: 200,
    depthFactor: 10,

    width,
    height,
  });

  const postPass = new ShaderPass(PrettyShader);

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
  // composer.addPass(dofPass);
  composer.addPass(postPass);
  // composer.addPass(bloomPass);

  ctx.passes = {
    dofPass,
    postPass,
  }
};
