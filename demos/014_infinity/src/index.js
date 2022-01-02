import canvasSketch from 'canvas-sketch';
import { lerp } from 'canvas-sketch-util/math';
import random from 'canvas-sketch-util/random';

const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [2048, 2048],
  animate: true,
};

const sketch = ({ width, height }) => {
  const margin = width * 0.1;

  const sx = (v) => lerp(margin, width - margin, v);
  const sy = (v) => lerp(margin, height - margin, v);

  const points = [];
  const max = 500;
  for (let i = 0; i < max; i += 1) {
    points.push({
      f: random.range(0, Math.PI),
      s: random.range(-0.008, 0.008),
      r: random.range(1, 3),
      a: random.range(0.3, 0.95),
    });
  }

  return ({ context, width, height, time }) => {
    context.fillStyle = 'hsla(0, 0%, 0%, 0.1)';
    context.fillRect(0, 0, width, height);

    for (const { f, s, r, a } of points) {
      context.fillStyle = `hsla(0, 0%, 98%, ${a})`;

      const c = 0.5;
      const d = Math.tan(-time / 10 + f);

      let p = Math.sqrt(Math.abs(d));
      if (d < 0) {
        p *= -1;
      }

      const x = c * ((p + p ** 3) / (1 + p ** 4)) + 0.5;
      const y = c * ((p - p ** 3) / (1 + p ** 4)) + 0.5 + s;

      context.fillRect(sx(x), sy(y), r, r);
    }
  };
};

canvasSketch(sketch, settings);
