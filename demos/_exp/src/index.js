import canvasSketch from 'canvas-sketch';
import * as THREE from 'three';
import { createPlusScene } from './plus';
import { createLinesScene } from './lines';
import { setupTheatre } from './theatre';
import { createPostScene } from './post';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: 'webgl',
  dimensions: [1500, 1024],
  animate: true,
  hotkeys: false,
};

const sketch = ({ canvas, width, height }) => {
  const ctx = {
    time: 0,
    frame: 0,
    theatre: {},
  };

  ctx.canvas = canvas;

  // ***************
  // RENDERER
  // ***************

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  ctx.renderer = renderer;
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff, 1);

  createPlusScene(ctx);

  createLinesScene(ctx);

  createPostScene(ctx);

  setupTheatre(ctx);

  // ***************
  // RENDER TARGET
  // ***************

  const plusSceneTarget = new THREE.WebGLRenderTarget(width, height);
  ctx.target = plusSceneTarget;
  plusSceneTarget.texture.format = THREE.RGBFormat;
  plusSceneTarget.texture.minFilter = THREE.NearestFilter;
  plusSceneTarget.texture.magFilter = THREE.NearestFilter;
  plusSceneTarget.texture.generateMipmaps = false;
  plusSceneTarget.depthBuffer = true;
  plusSceneTarget.depthTexture = new THREE.DepthTexture();
  plusSceneTarget.depthTexture.format = THREE.DepthFormat;
  plusSceneTarget.depthTexture.type = THREE.UnsignedShortType;

  const linesSceneTarget = new THREE.WebGLRenderTarget(width, height);
  ctx.target = linesSceneTarget;
  linesSceneTarget.texture.format = THREE.RGBFormat;
  linesSceneTarget.texture.minFilter = THREE.NearestFilter;
  linesSceneTarget.texture.magFilter = THREE.NearestFilter;
  linesSceneTarget.texture.generateMipmaps = false;

  // ***************

  let frame = 0;
  return {
    resize({ viewportWidth, viewportHeight }) {
      ctx.plusScene.camera.aspect = viewportWidth / viewportHeight;
      ctx.plusScene.camera.updateProjectionMatrix();

      // ctx.linesScene.camera.aspect = viewportWidth / viewportHeight;
      // ctx.linesScene.camera.updateProjectionMatrix();
      //
      // ctx.postScene.camera.aspect = viewportWidth / viewportHeight;
      // ctx.postScene.camera.updateProjectionMatrix();

      const dpr = renderer.getPixelRatio();
      plusSceneTarget.setSize(viewportWidth * dpr, viewportHeight * dpr);
      linesSceneTarget.setSize(viewportWidth * dpr, viewportHeight * dpr);
      renderer.setSize(viewportWidth, viewportHeight);

      // ctx.composer.setSize(viewportWidth, viewportHeight);
      // ctx.renderer.setSize(viewportWidth, viewportHeight);
    },
    render({ time }) {
      frame++;
      ctx.time = time;
      ctx.frame = frame;

      // render plus scene
      renderer.setRenderTarget(plusSceneTarget);
      renderer.render(ctx.plusScene.scene, ctx.plusScene.camera);

      // render lines
      if (ctx.linesScene.materialShader) {
        ctx.linesScene.materialShader.uniforms.iTime.value = time;
        ctx.linesScene.materialShader.uniforms.tDiffuse.value = plusSceneTarget.texture;
        ctx.linesScene.materialShader.uniforms.tDepth.value = plusSceneTarget.depthTexture;
      }

      renderer.clearColor();

      renderer.setRenderTarget(linesSceneTarget);
      renderer.render(ctx.linesScene.scene, ctx.linesScene.camera);

      ctx.postScene.material.uniforms.iTime.value = time;
      ctx.postScene.material.uniforms.tDiffuse.value = linesSceneTarget.texture;

      renderer.setRenderTarget(null);
      renderer.render(ctx.postScene.scene, ctx.postScene.camera);
    },
    unload() {
      ctx.plusScene.controls.dispose();
      ctx.renderer.dispose();
    },
  };
};

canvasSketch(sketch, settings);
