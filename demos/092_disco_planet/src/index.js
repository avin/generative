import canvasSketch from 'canvas-sketch';
import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { createLights } from './lights';
import { createSphere } from './sphere';
import { createBackground } from './background';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: 'webgl',
  animate: true,
};

const sketch = ({ canvas }) => {
  const ctx = {};

  ctx.canvas = canvas;

  createScene(ctx);
  createCamera(ctx);
  createRenderer(ctx);
  createLights(ctx);
  createSphere(ctx);

  createBackground(ctx);

  return {
    resize({ viewportWidth, viewportHeight }) {
      ctx.camera.aspect = viewportWidth / viewportHeight;
      ctx.camera.updateProjectionMatrix();

      // ctx.composer.setSize(viewportWidth, viewportHeight);
      ctx.renderer.setSize(viewportWidth, viewportHeight);
    },
    render({ time }) {
      const { renderer } = ctx;
      if (ctx.sphereMaterialShader) {
        ctx.sphereMaterialShader.uniforms.iTime.value = time;
      }

      ctx.sphereMesh.rotation.x = Math.sin(time) * 0.15;
      ctx.sphereMesh.rotation.z = Math.cos(time) * 0.15;

      ctx.backMaterial.uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
      ctx.backMaterial.uniforms.iTime.value = time;

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
