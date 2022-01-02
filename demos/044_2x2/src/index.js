import canvasSketch from 'canvas-sketch';
import createRegl from 'regl';
import createQuad from 'primitive-quad';

import fragmentShader from './shaders/main.frag.glsl';
import vertexShader from './shaders/main.vert.glsl';
import bufAShader from './shaders/bufA.glsl';
import bufBShader from './shaders/bufB.glsl';
import sceneShader from './shaders/scene.glsl';
import { getWebGLContext } from './webgl';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: getWebGLContext(),
  animate: true,
};

const sketch = ({ gl, update, render, pause }) => {
  const regl = createRegl({ gl });

  const quadMesh = createQuad();

  const bufATexture = regl.texture();

  const bufBTexture = regl.texture();

  const commonOptions = {
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
  };

  const drawBufA = regl({
    frag: fragmentShader.replace('#pragma includeScene', bufAShader),
    vert: vertexShader,
    uniforms: {
      iTime: regl.prop('iTime'),
      iResolution: regl.prop('iResolution'),
    },
    ...commonOptions,
    depth: {
      mask: false,
      enable: false,
    },
  });

  const drawBufB = regl({
    frag: fragmentShader.replace('#pragma includeScene', bufBShader),
    vert: vertexShader,
    uniforms: {
      iTime: regl.prop('iTime'),
      iResolution: regl.prop('iResolution'),
      iChannel0: bufATexture,
    },
    ...commonOptions,
    depth: {
      mask: false,
      enable: false,
    },
  });

  const drawScene = regl({
    frag: fragmentShader.replace('#pragma includeScene', sceneShader),
    vert: vertexShader,
    uniforms: {
      iTime: regl.prop('iTime'),
      iResolution: regl.prop('iResolution'),
      iChannel0: bufBTexture,
    },
    ...commonOptions,
  });

  return {
    render({ time, width, height }) {
      regl.poll();

      gl.flush();

      drawBufA({
        iTime: time,
        iResolution: [width, height, 1],
      });

      bufATexture({
        copy: true,
        min: 'linear',
        mag: 'linear',
      });

      gl.flush();

      drawBufB({
        iTime: time,
        iResolution: [width, height, 1],
      });

      bufBTexture({
        copy: true,
        min: 'linear',
        mag: 'linear',
      });

      gl.flush();

      drawScene({
        iTime: time,
        iResolution: [width, height, 1],
      });
    },
  };
};

canvasSketch(sketch, settings);
