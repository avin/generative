import canvasSketch from 'canvas-sketch';
import createShader from 'canvas-sketch-util/shader';
import { getWebGLContext } from './webgl';
import fragmentShader from './shaders/frag.glsl';
import vertexShader from './shaders/vert.glsl';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: getWebGLContext(),
  animate: true,
};

const sketch = ({ gl, time }) => {
  return createShader({
    gl,
    frag: fragmentShader,
    vert: vertexShader,
    uniforms: {
      iTime: ({ time }) => time,
      iResolution: ({ width, height }) => [width, height, 1],
    },
  });
};

canvasSketch(sketch, settings);
