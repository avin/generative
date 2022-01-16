import vertexShader from './vert.glsl';
import fragmentShader from './frag.glsl';

const PrettyShader = {
  uniforms: {
    tDiffuse: { value: null },
    iTime: { value: -1 },
  },

  vertexShader,
  fragmentShader,
};

export { PrettyShader };
