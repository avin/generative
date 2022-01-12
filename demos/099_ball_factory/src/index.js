import canvasSketch from 'canvas-sketch';
import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { createLights } from './lights';
import { createBox } from './box';
import { createControls } from './controls';
import { createComposer } from './composer';
import { createEnv } from './env';
import { createGround } from './ground';
import * as THREE from 'three';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: 'webgl2',
  animate: true,
};

const sketch = ({ canvas }) => {
  const ctx = {
    time: 0,
    frame: 0,
    options: { countPerRow: 5, size: 2 },
  };

  ctx.canvas = canvas;
  ctx.center = new THREE.Vector3(0, (ctx.options.countPerRow * ctx.options.size) / 2, 0);

  createScene(ctx);
  createCamera(ctx);
  createRenderer(ctx);
  createComposer(ctx);
  // createControls(ctx);
  createLights(ctx);
  createBox(ctx);
  createGround(ctx);
  createEnv(ctx);

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

      const { composer, camera } = ctx;

      ctx.time = time;
      ctx.frame = frame;

      const t = time * 0.25;
      camera.position.x = Math.cos(t) * 23;
      camera.position.z = Math.sin(t) * 15;
      camera.position.y = Math.sin(t * 1.425) * 10;
      camera.position.add(ctx.center);

      camera.lookAt(ctx.center);

      if (ctx.boxShader) {
        ctx.boxShader.uniforms.iTime.value = time;
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
