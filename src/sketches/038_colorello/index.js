import createShader from 'canvas-sketch-util/shader';
import { getWebGLContext } from '@/utils/webgl';
import fragmentShader from './shaders/frag.glsl';
import vertexShader from './shaders/vert.glsl';

const settings = {
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

export default { sketch, settings };
