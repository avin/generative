/* eslint-disable */
import createRegl from 'regl';
import createQuad from 'primitive-quad';

import fragmentShader from './shaders/frag_main.glsl';
import vertexShader from './shaders/vert.glsl';

const settings = {
  context: 'webgl2',
  animate: true,
};

const sketch = ({ gl, update, render, pause }) => {
  const regl = createRegl({ gl });

  const quadMesh = createQuad();

  const feedBackTexture = regl.texture({
    copy: true,
    min: 'linear',
    mag: 'linear',
  });

  const drawQuad = regl({
    frag: fragmentShader,
    vert: vertexShader,
    uniforms: {
      iTime: regl.prop('iTime'),
      iResolution: regl.prop('iResolution'),
      iChannel0: feedBackTexture,
    },
    blend: {
      enable: true,
      func: {
        srcRGB: 'src alpha',
        srcAlpha: 1,
        dstRGB: 'one minus src alpha',
        dstAlpha: 1,
      },
    },
    attributes: {
      position: quadMesh.positions,
    },
    elements: regl.elements(quadMesh.cells),
  });

  return {
    render({ context, time, width, height }) {
      regl.poll();

      drawQuad({
        iTime: time,
        iResolution: [width, height, 1],
        iChannel0: regl.texture(context),
      });

      feedBackTexture({
        copy: true,
        min: 'linear',
        mag: 'linear',
      });

      gl.flush();
    },
  };
};

export default { sketch, settings };
