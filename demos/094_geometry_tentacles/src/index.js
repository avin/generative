import canvasSketch from 'canvas-sketch';

import { lerp } from 'canvas-sketch-util/math';
import { drawLine } from './ctx';
import { rope } from './shape';

const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [1024, 1024],
  animate: true,
};

const sketch = ({ width, height }) => {
  const margin = width * 0.1;

  const sx = (v) => lerp(margin, width - margin, v);
  const sy = (v) => lerp(margin, height - margin, v);

  return ({ context, width, height, time }) => {
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);

    context.lineWidth = width * 0.0025;

    const lines = [];

    let odd = true;

    const step = Math.PI / 11;

    for (let i = step; i <= Math.PI * 2; i += step) {
      odd = !odd;
      const line = [];

      for (let j = 0.0; j <= 1; j += 0.02) {
        line.push([
          (Math.cos(i + Math.cos(j * Math.PI + time) * (odd ? 1 : -1)) / 2) * j + 0.5, // x
          (Math.sin(i + Math.cos(j * Math.PI - time) * (odd ? 1 : -1)) / 2) * j + 0.5, // y
          Math.max(5 - j * 6, 0), // width
        ]);
      }

      lines.push({
        line,
        color: `hsl(${i * 100 + time * 100}, 50%, 50%)`,
      });
    }

    lines.forEach(({ line, color }) => {
      line = line.map((p) => [sx(p[0]), sy(p[1]), p[2]]);

      context.strokeStyle = color;

      const ropeCoords = rope(line);
      drawLine(context, ropeCoords, true);
      context.fill();
    });

    context.beginPath();
    context.arc(sx(0.5), sy(0.5), width / 8.5 - margin, 0, Math.PI * 2);
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(sx(0.5), sy(0.5), width / 2 - margin, 0, Math.PI * 2);
    context.stroke();
  };
};

canvasSketch(sketch, settings);
