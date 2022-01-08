import canvasSketch from 'canvas-sketch';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils';

import vertexShader from './shaders/post/vert.glsl';
import fragmentShader from './shaders/post/frag.glsl';
import { createPlusScene } from './plus';
import { createLinesScene } from './lines';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: 'webgl',
  animate: true,
};

const sketch = ({ canvas, width, height }) => {
  const ctx = {
    time: 0,
    frame: 0,
    options: {
      totalBoxes: 30,
      bigCircleRadius: 2.5,
    },
  };

  ctx.canvas = canvas;

  // ***************
  // RENDERER
  // ***************

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  ctx.renderer = renderer;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  createPlusScene(ctx);

  createLinesScene(ctx);

  // ***************
  // RENDER TARGET
  // ***************

  const plusSceneTarget = new THREE.WebGLRenderTarget(width, height);
  ctx.target = plusSceneTarget;
  plusSceneTarget.texture.format = THREE.RGBFormat;
  plusSceneTarget.texture.minFilter = THREE.NearestFilter;
  plusSceneTarget.texture.magFilter = THREE.NearestFilter;
  plusSceneTarget.texture.generateMipmaps = false;
  // target.stencilBuffer = ( format === THREE.DepthStencilFormat ) ? true : false;
  plusSceneTarget.depthBuffer = true;
  plusSceneTarget.depthTexture = new THREE.DepthTexture();
  plusSceneTarget.depthTexture.format = THREE.DepthFormat;
  plusSceneTarget.depthTexture.type = THREE.UnsignedShortType;

  // // ***************
  // // POST
  // // ***************
  //
  // const postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  // const postMaterial = new THREE.ShaderMaterial({
  //   vertexShader,
  //   fragmentShader,
  //   uniforms: {
  //     cameraNear: { value: ctx.plusScene.camera.near },
  //     cameraFar: { value: ctx.plusScene.camera.far },
  //     tDiffuse: { value: null },
  //     tDepth: { value: null },
  //   },
  // });
  // const postPlane = new THREE.PlaneGeometry(2, 2);
  // const postQuad = new THREE.Mesh(postPlane, postMaterial);
  // const postScene = new THREE.Scene();
  // postScene.add(postQuad);

  // ***************

  let frame = 0;
  return {
    resize({ viewportWidth, viewportHeight }) {
      ctx.plusScene.camera.aspect = viewportWidth / viewportHeight;
      ctx.plusScene.camera.updateProjectionMatrix();

      // ctx.composer.setSize(viewportWidth, viewportHeight);
      ctx.renderer.setSize(viewportWidth, viewportHeight);
    },
    render({ time }) {
      frame++;
      ctx.time = time;
      ctx.frame = frame;

      // render scene into target
      renderer.setRenderTarget(plusSceneTarget);
      renderer.render(ctx.plusScene.scene, ctx.plusScene.camera);

      // render post FX
      if (ctx.linesScene.materialShader) {
        ctx.linesScene.materialShader.uniforms.iTime.value = time;
        ctx.linesScene.materialShader.uniforms.tDiffuse.value = plusSceneTarget.texture;
        ctx.linesScene.materialShader.uniforms.tDepth.value = plusSceneTarget.depthTexture;
      }

      renderer.setRenderTarget(null);
      renderer.render(ctx.linesScene.scene, ctx.linesScene.camera);
    },
    unload() {
      ctx.plusScene.controls.dispose();
      ctx.renderer.dispose();
    },
  };
};

canvasSketch(sketch, settings);
