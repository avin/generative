import canvasSketch from 'canvas-sketch';
import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { createLights } from './lights';
import { createBoxes } from './boxes';
import { createControls } from './controls';
import { createBackground } from './background';

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

  ctx.canvas = canvas;

  createScene(ctx);
  createCamera(ctx);
  createRenderer(ctx);
  createControls(ctx);
  createBackground(ctx);
  createLights(ctx);
  createBoxes(ctx);

  let frame = 0;
  return {
    resize({ viewportWidth, viewportHeight }) {
      ctx.camera.aspect = viewportWidth / viewportHeight;
      ctx.camera.updateProjectionMatrix();

      // ctx.composer.setSize(viewportWidth, viewportHeight);
      ctx.renderer.setSize(viewportWidth, viewportHeight);
    },
    render({ time }) {
      frame++;

      const { renderer } = ctx;

      ctx.time = time;
      ctx.frame = frame;

      ctx.backMaterial.uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
      ctx.backMaterial.uniforms.iTime.value = time;

      if (ctx.boxShader) {
        ctx.boxShader.uniforms.iTime.value = time;
      }

      renderer.render(ctx.backScene, ctx.backCamera);
      renderer.render(ctx.scene, ctx.camera);
    },
    unload() {
      ctx.controls.dispose();
      ctx.renderer.dispose();
    },
  };
};

canvasSketch(sketch, settings);
