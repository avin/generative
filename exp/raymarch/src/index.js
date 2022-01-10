import canvasSketch from 'canvas-sketch';
import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { createLights } from './lights';
import { createControls } from './controls';
import { createRaymarch } from './raymarch';
import { createBoxes } from './boxes';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: 'webgl',
  animate: true,
};

const sketch = ({ canvas }) => {
  const ctx = {
    time: 0,
    frame: 0,
    options: {
      totalBoxes: 30,
      bigCircleRadius: 2.5,
    },
  };
  window.ctx = ctx;

  ctx.canvas = canvas;

  createScene(ctx);
  createCamera(ctx);
  createRenderer(ctx);
  createControls(ctx);
  createLights(ctx);
  createBoxes(ctx);
  createRaymarch(ctx);

  let frame = 0;
  return {
    resize({ viewportWidth, viewportHeight }) {
      ctx.camera.aspect = viewportWidth / viewportHeight;
      ctx.camera.updateProjectionMatrix();

      ctx.renderer.setSize(viewportWidth, viewportHeight);
    },
    render({ time }) {
      frame++;

      const { renderer } = ctx;

      ctx.time = time;
      ctx.frame = frame;

      // ctx.raymarchMesh.quaternion.copy(ctx.camera.quaternion);

      ctx.raymarchMesh.material.uniforms.iTime.value = time;

      renderer.render(ctx.scene, ctx.camera);
    },
    unload() {
      ctx.controls.dispose();
      ctx.renderer.dispose();
    },
  };
};

canvasSketch(sketch, settings);
