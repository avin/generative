import canvasSketch from 'canvas-sketch';

import { lerp } from 'canvas-sketch-util/math';
import { drawLine } from './ctx';
import { rope } from './shape';

const size = Math.min(window.innerWidth, 1024);

const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [size, size],
  animate: true,
};

const sketch = ({ width, height }) => {
  const margin = width * 0.1;

  const sx = (v) => lerp(margin, width - margin, v);
  const sy = (v) => lerp(margin, height - margin, v);

  const outerStep = Math.PI / 11;
  const innerStep = 10 / size;

  return ({ context, width, height, time }) => {
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);

    context.lineWidth = width * 0.0025;

    const lines = [];

    let odd = true;

    for (let i = outerStep; i <= Math.PI * 2; i += outerStep) {
      odd = !odd;
      const line = [];

      for (let j = 0.0; j <= 1; j += innerStep) {
        line.push([
          sx((Math.cos(i + Math.cos(j * Math.PI + time) * (odd ? 1 : -1)) / 2) * j + 0.5), // x
          sy((Math.sin(i + Math.cos(j * Math.PI - time) * (odd ? 1 : -1)) / 2) * j + 0.5), // y
          Math.max(5 - j * 6, 0), // width
        ]);
      }

      lines.push({
        line,
        color: `hsl(${i * 100 + time * 100}, 50%, 50%)`,
      });
    }

    for (let i = 0; i < lines.length; i += 1) {
      const { line, color } = lines[i];

      context.strokeStyle = color;

      const ropeCoords = rope(line);
      drawLine(context, ropeCoords, true);
      context.fill();
    }

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
