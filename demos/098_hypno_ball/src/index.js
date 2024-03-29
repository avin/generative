import canvasSketch from 'canvas-sketch';
import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { createLights } from './lights';
import { createSphere } from './sphere';
import { createControls } from './controls';
import { createComposer } from './composer';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: 'webgl2',
  animate: true,
};

const sketch = ({ canvas }) => {
  const ctx = {
    time: 0,
    frame: 0,
    options: {},
  };

  ctx.canvas = canvas;

  createScene(ctx);
  createCamera(ctx);
  createRenderer(ctx);
  createComposer(ctx);
  createControls(ctx);
  createLights(ctx);
  createSphere(ctx);

  let frame = 0;
  return {
    resize({ viewportWidth, viewportHeight }) {
      ctx.camera.aspect = viewportWidth / viewportHeight;
      ctx.camera.updateProjectionMatrix();

      ctx.renderer.setSize(viewportWidth, viewportHeight);
      ctx.composer.setSize(viewportWidth, viewportHeight);
    },
    render({ time }) {
      frame++;

      const { composer } = ctx;

      ctx.time = time;
      ctx.frame = frame;

      if (ctx.sphereShader) {
        ctx.sphereShader.uniforms.iTime.value = time;
      }
      composer.render();
    },
    unload() {
      ctx.controls.dispose();
      ctx.renderer.dispose();
    },
  };
};

canvasSketch(sketch, settings);
