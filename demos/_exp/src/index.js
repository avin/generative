import canvasSketch from 'canvas-sketch';
import { random } from 'canvas-sketch-util';
import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { createLights } from './lights';
import { createBalls } from './balls';
import { createControls } from './controls';
import { createCenterBall } from './centerBall';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: 'webgl',
  animate: true,
};

const sketch = ({ canvas }) => {
  const randomInstance = random.createRandom();
  randomInstance.setSeed('415761');

  const ctx = {
    time: 0,
    frame: 0,
    randomInstance,
    options: {
      lightColor: 0xfc03f0,
    },
  };

  ctx.canvas = canvas;

  createScene(ctx);
  createCamera(ctx);
  createRenderer(ctx);
  createControls(ctx);
  createLights(ctx);
  createBalls(ctx);
  createCenterBall(ctx);

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

      if (ctx.ballShader) {
        ctx.ballShader.uniforms.iTime.value = time;
      }

      // renderer.render(ctx.backScene, ctx.backCamera);
      renderer.render(ctx.scene, ctx.camera);
    },
    unload() {
      ctx.controls.dispose();
      ctx.renderer.dispose();
    },
  };
};

canvasSketch(sketch, settings);
