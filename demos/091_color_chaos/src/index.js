import canvasSketch from 'canvas-sketch';
import random from 'canvas-sketch-util/random';
import { lerp } from 'canvas-sketch-util/math';

const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [1024, 1024],
  animate: true,
};

const sketch = ({ width, height, canvas, fps }) => {
  const sx = (v) => lerp(0, width, v);
  const sy = (v) => lerp(0, height, v);

  const points = new Array(1000).fill(0).map(() => {
    return {
      id1: random.range(0, 10000),
      id2: random.range(0, 10000),
      id3: random.range(0, 10000),
      id4: random.range(0, 10000),
      x: 0.5,
      y: 0.5,
      bX: null,
      bY: null,
      bColor: random.range(0, 360),
    };
  });

  const bufCanvas = document.createElement('canvas');
  bufCanvas.width = width;
  bufCanvas.height = height;
  const bufCanvasCtx = bufCanvas.getContext('2d');

  const copyCanvas = () => {
    bufCanvasCtx.drawImage(canvas, 0, 0);
  };
  copyCanvas();

  return ({ context, time }) => {
    copyCanvas();
    const imageData = bufCanvasCtx.getImageData(0, 0, width, height);
    for (let i = 0; i < width * height; i += 1) {
      imageData.data[i * 4] += 2;
      imageData.data[i * 4 + 1] += 2;
      imageData.data[i * 4 + 2] += 2;
      // imageData.data[i * 4 + 3] *= 0.1;
    }
    context.putImageData(imageData, 0, 0);

    points.forEach((p) => {
      p.x += random.noise3D(p.id1, 100, time * 2) * 0.01;
      p.y += random.noise3D(p.id2, 500, time * 2) * 0.01;

      p.x += random.noise3D(p.id3, 100, time * 10) * 0.005;
      p.y += random.noise3D(p.id4, 500, time * 10) * 0.005;

      p.x = Math.min(1, Math.max(0, p.x));
      p.y = Math.min(1, Math.max(0, p.y));

      context.beginPath();
      if (p.bX !== null) {
        context.lineWidth = 2;
        context.strokeStyle = `hsl(${(p.bColor + time * 100) % 360}, 80%, 50%)`;
        context.moveTo(sx(p.bX), sy(p.bY));
        context.lineTo(sx(p.x), sy(p.y));
      }
      context.stroke();

      p.bX = p.x;
      p.bY = p.y;
    });
  };
};

canvasSketch(sketch, settings);
