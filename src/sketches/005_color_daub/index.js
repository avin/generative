const random = require('canvas-sketch-util/random');
const { lerp } = require('canvas-sketch-util/math');

const settings = {
  dimensions: [2048, 2048],
  animate: true,
};

const sketch = ({ width, height }) => {
  const margin = width * 0.1;

  const sx = v => lerp(margin, width - margin, v);
  const sy = v => lerp(margin, height - margin, v);

  const totalPoints = 200;

  let firstTime = true;

  let maxTime = random.range(3, 5);

  let points;

  return ({ context, width, height, time }) => {
    if (time > maxTime) {
      if (time > maxTime + 3) {
        maxTime = maxTime + 3 + random.range(3, 8);
        firstTime = true;
      }
      return;
    }
    if (firstTime) {
      context.fillStyle = 'hsl(0, 0%, 98%)';
      context.fillRect(0, 0, width, height);

      points = new Array(totalPoints).fill(null).map(() => {
        return {
          x: random.gaussian() / random.range(5, 10) + 0.5,
          y: random.gaussian() / random.range(5, 10) + 0.5,
          mx: random.range(-1, 1),
          my: random.range(-1, 1),
          r: random.value(),
          speedC: random.range(200, 500),
          seed: random.getRandomSeed(),
          seedX: random.range(0.5, 3),
          seedY: random.range(0.5, 3),
          seedR: random.range(0.5, 3),
          speedA: random.range(0.5, 3),
          seedA: random.range(-Math.PI, Math.PI),
          alpha: random.range(0.3, 0.7),
          colorSpeed: random.range(20, 60),
          maxR: 1, // random.value(3,4)
        };
      });

      firstTime = false;
    }

    points.forEach((p, idx) => {
      const { seed, speedC, mx, my, seedX, seedY, seedR, seedA, speedA, colorSpeed, alpha } = p;

      random.setSeed(seed);

      p.x += random.noise1D(time, seedX) / speedC + mx / 1000;
      p.y += random.noise1D(time + 1000, seedY) / speedC + my / 1000;
      p.r = random.noise1D(time + 2000, seedR);

      const rx = sx(p.x);
      const ry = sy(p.y);
      const r = Math.abs(p.r) * width * 0.01;

      context.beginPath();
      context.arc(rx, ry, r, 0, Math.PI * 2, false);
      context.fillStyle = `hsla(${idx * 10 + time * colorSpeed}, 80%, 50%, ${alpha +
        Math.cos(time * speedA + seedA) * 0.3})`;
      context.fill();
    });
  };
};

export default { sketch, settings };
