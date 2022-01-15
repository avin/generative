import canvasSketch from 'canvas-sketch';
import { random } from 'canvas-sketch-util';
import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { createLights } from './lights';
import { createBalls, updateBallsPositions } from './balls';
import { createCenterBall } from './centerBall';
import { createComposer } from './composer';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: 'webgl2',
  animate: true,
};

const sketch = ({ canvas, width, height }) => {
  const randomInstance = random.createRandom();
  randomInstance.setSeed('415761');

  const ctx = {
    time: 0,
    randomInstance,
    options: {
      lightColor: 0xfc03f0,
      ballsCount: 1000,
    },
    width,
    height,
  };

  ctx.canvas = canvas;

  createScene(ctx);
  createCamera(ctx);
  createRenderer(ctx);
  createComposer(ctx);
  createLights(ctx);
  createBalls(ctx);
  createCenterBall(ctx);

  return {
    resize({ viewportWidth, viewportHeight }) {
      ctx.camera.aspect = viewportWidth / viewportHeight;
      ctx.camera.updateProjectionMatrix();

      ctx.renderer.setSize(viewportWidth, viewportHeight);
      ctx.composer.setSize(viewportWidth, viewportHeight);
    },
    render({ time }) {
      const {
        composer,
        passes: { postPass },
      } = ctx;

      ctx.time = time;

      updateBallsPositions(ctx);

      postPass.uniforms.iTime.value = time;
      composer.render();
    },
    unload() {
      ctx.controls.dispose();
      ctx.renderer.dispose();
    },
  };
};

canvasSketch(sketch, settings);
