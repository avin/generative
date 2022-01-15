import canvasSketch from 'canvas-sketch';
import GUI from 'lil-gui';
import { random } from 'canvas-sketch-util';
import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { createLights } from './lights';
import { createBalls } from './balls';
import { createControls } from './controls';
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
    frame: 0,
    randomInstance,
    options: {
      lightColor: 0xfc03f0,
    },
    width,
    height,
  };

  ctx.canvas = canvas;

  createScene(ctx);
  createCamera(ctx);
  createRenderer(ctx);
  createComposer(ctx);
  createControls(ctx);
  createLights(ctx);
  createBalls(ctx);
  createCenterBall(ctx);

  // -------------------------

  const effectController = {
    // uFar: 10.,
    // radScale: .5,
    // focusPoint: 88.,
    // focusScale: 10.,

    uFar: 68.5,
    radScale: 0.5,
    focusPoint: 9.5,
    focusScale: 7.8,
    depthFactor: 10,
  };

  const matChanger = () => {
    const {
      passes: { dofPass },
    } = ctx;
    dofPass.uniforms.uFar.value = effectController.uFar;
    dofPass.uniforms.radScale.value = effectController.radScale;
    dofPass.uniforms.focusPoint.value = effectController.focusPoint;
    dofPass.uniforms.focusScale.value = effectController.focusScale;
    dofPass.uniforms.depthFactor.value = effectController.depthFactor;
  };

  const gui = new GUI();
  gui.add(effectController, 'uFar', 1.0, 100.0, 0.5).onChange(matChanger);
  gui.add(effectController, 'radScale', 0.1, 5, 0.1).onChange(matChanger);
  gui.add(effectController, 'focusPoint', 1, 500, 0.5).onChange(matChanger);
  gui.add(effectController, 'focusScale', 0, 100, 0.05).onChange(matChanger);
  gui.add(effectController, 'depthFactor', 1, 100, 0.5).onChange(matChanger);
  matChanger();
  // gui.close();

  // --------------------------

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

      const {
        composer,
        passes: { postPass },
      } = ctx;

      ctx.time = time;
      ctx.frame = frame;

      postPass.uniforms.iTime.value = time;

      if (ctx.ballShader) {
        ctx.ballShader.uniforms.iTime.value = time;
      }

      // renderer.render(ctx.backScene, ctx.backCamera);
      composer.render();
    },
    unload() {
      ctx.controls.dispose();
      ctx.renderer.dispose();
    },
  };
};

canvasSketch(sketch, settings);
