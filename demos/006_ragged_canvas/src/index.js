import canvasSketch from 'canvas-sketch';
import random from 'canvas-sketch-util/random';
import { drawLine, setDrawPolygon } from './ctx';

const size = 1024;

const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [size, size],
  animate: true,
};

const sketch = ({ context, canvas }) => {
  let vertical = true;

  let sepLine;

  const makeSepLine = (vertical) => {
    sepLine = [];
    const k0 = random.range(size * 0.1, size * 0.9);
    const k1 = random.range(size * 0.1, size * 0.9);

    if (vertical) {
      for (let i = 0; i <= size + 10; i += 10) {
        const x = k0 + (k1 - k0) * (i / size);
        sepLine.push([x + random.range(-5, +5), i]);
      }
    } else {
      for (let i = 0; i <= size + 10; i += 10) {
        const y = k0 + (k1 - k0) * (i / size);
        sepLine.push([i, y + random.range(-5, +5)]);
      }
    }

    context.lineWidth = 4;
    drawLine(context, sepLine);
  };
  makeSepLine(vertical);

  const bufCanvas = document.createElement('canvas');
  bufCanvas.width = size;
  bufCanvas.height = size;

  const copyCanvas = () => {
    bufCanvas.getContext('2d').drawImage(canvas, 0, 0);
  };

  copyCanvas();

  let prevSeparationTime = 0;
  let fillColor;
  const setFillColor = () => {
    fillColor = `hsl(${random.range(0, 360)}, 100%,80%)`;
  };
  setFillColor();

  return ({ context, time }) => {
    if (time - prevSeparationTime > random.range(0.08, 0.3)) {
      vertical = !vertical;
      prevSeparationTime = time;
      setFillColor();
      makeSepLine(vertical);
      copyCanvas();
    } else {
      context.fillStyle = fillColor;
      context.fillRect(0, 0, size, size);
    }

    const move = (time - prevSeparationTime) * 400;

    if (vertical) {
      for (let i = 0; i < 2; i += 1) {
        context.save();

        let area;
        if (i === 0) {
          area = [[0, 0], ...sepLine.map((si) => [si[0] - move, si[1]]), [0, size]];
        } else {
          area = [[size, 0], ...sepLine.map((si) => [si[0] + move, si[1]]), [size, size]];
        }

        setDrawPolygon(context, area, true);
        context.clip();

        if (i === 0) {
          context.drawImage(bufCanvas, -move, 0);
        } else {
          context.drawImage(bufCanvas, +move, 0);
        }

        context.restore();
      }
    } else {
      for (let i = 0; i < 2; i += 1) {
        context.save();

        let area;
        if (i === 0) {
          area = [[0, 0], ...sepLine.map((si) => [si[0], si[1] - move]), [size, 0]];
        } else {
          area = [[0, size], ...sepLine.map((si) => [si[0], si[1] + move]), [size, size]];
        }

        setDrawPolygon(context, area, true);
        context.clip();

        if (i === 0) {
          context.drawImage(bufCanvas, 0, -move);
        } else {
          context.drawImage(bufCanvas, 0, +move);
        }

        context.restore();
      }
    }
  };
};

canvasSketch(sketch, settings);
