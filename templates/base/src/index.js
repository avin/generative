import canvasSketch from 'canvas-sketch';

const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [1024, 1024],
  animate: true,
};

const sketch = ({ width, height, time }) => {};

canvasSketch(sketch, settings);
