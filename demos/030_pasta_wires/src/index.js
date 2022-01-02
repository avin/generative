import canvasSketch from 'canvas-sketch';
import createShader from 'canvas-sketch-util/shader';
import { getWebGLContext } from './webgl';
import fragmentShader from './shaders/frag.glsl';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: getWebGLContext(),
  animate: true,
};

const sketch = ({ gl, time }) => {
  return createShader({
    gl,
    frag: fragmentShader,
    uniforms: {
      iTime: ({ time }) => time,
      iResolution: ({ width, height }) => [width, height],
    },
  });
};

canvasSketch(sketch, settings);
