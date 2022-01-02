import canvasSketch from 'canvas-sketch';
import createRegl from 'regl';
import createQuad from 'primitive-quad';

import fragmentShader from './shaders/frag_main.glsl';
import vertexShader from './shaders/vert.glsl';
import { getWebGLContext } from './webgl';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: getWebGLContext(),
  animate: true,
};

const sketch = ({ gl, update, render, pause }) => {
  const regl = createRegl({ gl });

  const quadMesh = createQuad();

  const drawQuad = regl({
    frag: fragmentShader,
    vert: vertexShader,
    uniforms: {
      iTime: regl.prop('iTime'),
      iResolution: regl.prop('iResolution'),
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

      gl.flush();
    },
  };
};


canvasSketch(sketch, settings);
