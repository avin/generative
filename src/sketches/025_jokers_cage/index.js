import createShader from 'canvas-sketch-util/shader';
import fragmentShader from './shaders/frag.glsl';
import vertexShader from './shaders/vert.glsl';

const settings = {
  context: 'webgl2',
  animate: true,
};

const sketch = ({ gl, time, canvas }) => {
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
  const shaderScene = createShader({
    gl,
    frag: fragmentShader,
    vert: vertexShader,
    uniforms: {
      iTime: ({ time }) => time,
      iMouse: params => {
        return [mouseX, mouseY, mouseDown, mouseDown];
      },
      iResolution: ({ width, height }) => [width, height, 1],
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
