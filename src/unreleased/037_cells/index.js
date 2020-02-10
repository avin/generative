import createShader from 'canvas-sketch-util/shader';
import { loadImageByUrl } from '@/utils/helpers';
import mainFragmentShader from './shaders/frag_main.glsl';
import bufferAFragmentShader from './shaders/frag_bufferA.glsl';
import vertexShader from './shaders/vert.glsl';

const settings = {
  context: 'webgl2',
  animate: true,
};

const sketch = async ({ gl, time, canvas }) => {
  let mouseX = 0;
  let mouseY = 0;
  let mouseDown = 0;
  const handleMoveMouse = e => {
    if (mouseDown) {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }
  };
  const handleMoveDown = e => {
    mouseDown = 1;
  };
  const handleMoveUp = e => {
    mouseDown = 0;
  };
  canvas.addEventListener('mousemove', handleMoveMouse);
  canvas.addEventListener('mousedown', handleMoveDown);
  canvas.addEventListener('mouseup', handleMoveUp);
  canvas.addEventListener('mouseleave', handleMoveUp);

  const bufferACanvas = document.createElement('canvas');
  document.body.appendChild(bufferACanvas);
  const bufferAGl = bufferACanvas.getContext('webgl2');

  const bufferAShaderScene = createShader({
    gl: bufferAGl,
    frag: bufferAFragmentShader,
    vert: vertexShader,
    uniforms: {
      iTime: ({ time }) => time,
      iMouse: params => {
        return [mouseX, mouseY, mouseDown, mouseDown];
      },
      iResolution: ({ width, height }) => [width, height, 1],
      iChannel1: () => bufferACanvas,
    },
  });


  const shaderScene = createShader({
    gl,
    frag: mainFragmentShader,
    vert: vertexShader,
    uniforms: {
      iTime: ({ time }) => time,
      iMouse: params => {
        return [mouseX, mouseY, mouseDown, mouseDown];
      },
      iResolution: ({ width, height }) => [width, height, 1],
      iChannel0: () => bufferACanvas,
    },
  });

  const currentUnload = shaderScene.unload;
  shaderScene.unload = (...args) => {
    currentUnload(...args);
    canvas.removeEventListener('mousemove', handleMoveMouse);
    canvas.removeEventListener('mousedown', handleMoveDown);
    canvas.removeEventListener('mouseup', handleMoveUp);
    canvas.removeEventListener('mouseleave', handleMoveUp);
  };

  return shaderScene;
};

export default { sketch, settings };
