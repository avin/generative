import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { DofPass } from './DofPass';
import { PrettyShader } from './PrettyShader/PrettyShader';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

export const createComposer = (ctx) => {
  const { renderer, scene, camera, width, height } = ctx;

  const renderScene = new RenderPass(scene, camera);

  const dofPass = new DofPass(scene, camera, {
    uFar: 112.5,
    radScale: 1.0,
    focusPoint: 52.5,
    focusScale: 48.4,
    depthFactor: 91.5,

    width,
    height,
  });

  const postPass = new ShaderPass(PrettyShader);

  const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 0.25, 1.5, 0.0);

  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const target = new THREE.WebGLMultisampleRenderTarget(size.width, size.height, {
    format: THREE.RGBAFormat,
    encoding: THREE.sRGBEncoding,
  });
  target.samples = 8;

  const composer = new EffectComposer(renderer, target);
  ctx.composer = composer;
  composer.addPass(renderScene);
  composer.addPass(dofPass);
  composer.addPass(postPass);
  composer.addPass(bloomPass);

  ctx.passes = {
    dofPass,
    postPass,
  };
};
