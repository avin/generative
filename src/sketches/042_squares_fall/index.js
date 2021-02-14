import createShader from 'canvas-sketch-util/shader';
import { getWebGLContext } from '@/utils/webgl';
import fragmentShader from './shaders/main.frag.glsl';
import vertexShader from './shaders/main.vert.glsl';
import sceneShader from './shaders/scene.glsl';

const settings = {
  context: getWebGLContext(),
  animate: true,
};

const sketch = ({ gl, time }) => {
  return createShader({
    gl,
    frag: fragmentShader.replace('#pragma includeScene', sceneShader),
    vert: vertexShader,
    uniforms: {
      iTime: ({ time }) => time,
      iResolution: ({ width, height }) => [width, height, 1],
    },
  });
};

export default { sketch, settings };
