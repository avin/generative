import canvasSketch from 'canvas-sketch';

const size = 1024;
const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [size, size],
  animate: true,
};

const sketch = () => {
  const dotsCount = 200;
  const linesCount = 7;

  const wave = (f, amp, freq, time) => {
    return amp * Math.sin(freq * Math.PI * 2 * f + time);
  };

  return ({ context, time }) => {
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, size, size);

    for (let lineIdx = 0; lineIdx < linesCount; lineIdx++) {
      const lineF = lineIdx / linesCount;

      const points = [];
      for (let i = 0; i < dotsCount; i++) {
        const f = i / dotsCount;

        const r =
          300 +
          wave(f, 10, 7, -time * 3.1 + lineF * Math.PI * 2) +
          wave(f, 5 * lineF, 15, time * lineF * 10 + lineF * Math.PI * 2) +
          wave(f, 7, 19, -time * 5.1 + lineF * Math.PI * 2) +
          wave(f, 15 * lineF, 11, time * 2.1 + lineF * Math.PI * 2);
        const a = Math.PI * 2 * f;
        const x = r * Math.cos(a) + size / 2;
        const y = r * Math.sin(a) + size / 2;

        points.push([x, y]);
      }

      context.strokeStyle = `hsla(${lineF * 360}, 50%, 20%, 1.0)`;
      context.fillStyle = `hsla(${lineF * 360}, 90%, 90%, .3)`;
      context.lineWidth = 1.0;

      context.beginPath();

      points.forEach((p, idx) => {
        if (idx) {
          context.lineTo(p[0], p[1]);
        } else {
          context.moveTo(p[0], p[1]);
        }
      });
      context.closePath();
      context.stroke();
      context.fill();
    }
  };
};

canvasSketch(sketch, settings);
