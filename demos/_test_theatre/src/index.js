import canvasSketch from 'canvas-sketch';
import { getProject, types as t } from '@theatre/core';
import studio from '@theatre/studio';
import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { createLights } from './lights';
import { createControls } from './controls';
import { createBall } from './ball';
import state from './animations/state.json';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: 'webgl',
  animate: true,
  hotkeys: false,
};

const sketch = ({ canvas }) => {
  const ctx = {
    time: 0,
    frame: 0,
  };

  ctx.canvas = canvas;

  if (process.env.NODE_ENV === 'development') {
    studio.initialize();
  }

  createScene(ctx);
  createCamera(ctx);
  createRenderer(ctx);
  createControls(ctx);
  createLights(ctx);
  createBall(ctx);

  // ----------------------

  const proj = getProject('First project', { state });

  const sheet = proj.sheet('Scene');

  const obj = sheet.object('Ball', {
    position: {
      x: t.number(0, { nudgeMultiplier: 0.1 }),
      y: t.number(0, { nudgeMultiplier: 0.1 }),
      z: t.number(0, { nudgeMultiplier: 0.1 }),
    },
    scale: {
      x: t.number(1, { nudgeMultiplier: 0.1 }),
      y: t.number(1, { nudgeMultiplier: 0.1 }),
      z: t.number(1, { nudgeMultiplier: 0.1 }),
    },
  });

  obj.onValuesChange(function callback({ position, scale }) {
    ctx.ballMesh.position.x = position.x;
    ctx.ballMesh.position.y = position.y;
    ctx.ballMesh.position.z = position.z;

    ctx.ballMesh.scale.x = scale.x;
    ctx.ballMesh.scale.y = scale.y;
    ctx.ballMesh.scale.z = scale.z;
  });

  proj.ready.then(() => {
    ctx.ballMesh.visible = true;
    sheet.sequence.play().then((r) => {
      console.info('done');
    });
  });
  window.proj = proj;

  // ----------------------

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

      renderer.render(ctx.scene, ctx.camera);
    },
    unload() {
      ctx.controls.dispose();
      ctx.renderer.dispose();
    },
  };
};

canvasSketch(sketch, settings);
