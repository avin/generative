import canvasSketch from 'canvas-sketch';
import random from 'canvas-sketch-util/random';
import { lerp } from 'canvas-sketch-util/math';

const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [1024, 1024],
  animate: true,
};

const sketch = ({ width, height }) => {
  const sx = (v) => lerp(0, width, v);
  const sy = (v) => lerp(0, height, v);

  const points = new Array(500).fill(0).map(() => {
    return {
      id: random.range(0, 10000),
      x: 0.5,
      y: 0.5,
      bX: null,
      bY: null,
      bColor: random.range(0, 360),
    };
  });

  return ({ context, time }) => {
    points.forEach((p) => {
      p.x += random.noise3D(p.id - 999, 100, time * 2) * 0.01;
      p.y += random.noise3D(p.id * 2 - 999, 500, time * 2) * 0.01;

      p.x += random.noise3D(p.id, 100, time * 10) * 0.005;
      p.y += random.noise3D(p.id * 2, 500, time * 10) * 0.005;

      p.x += random.noise3D(p.id + 999, 100, time * 100) * 0.0025;
      p.y += random.noise3D(p.id * 2 + 999, 500, time * 100) * 0.0025;

      p.x += random.noise3D(p.id + 9999, 100, time * 1000) * 0.001;
      p.y += random.noise3D(p.id * 2 + 9999, 500, time * 1000) * 0.001;

      p.x = Math.min(1, Math.max(0, p.x));
      p.y = Math.min(1, Math.max(0, p.y));

      context.beginPath();
      if (p.bX !== null) {
        context.lineWidth = 2;
        context.strokeStyle = `hsl(${(p.bColor + time * 100) % 360}, 90%, 50%)`;
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
