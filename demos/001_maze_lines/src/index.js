import canvasSketch from 'canvas-sketch';
import random from 'canvas-sketch-util/random';

const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [2048, 2048],
  animate: true,
};

const sketch = () => {
  let prevTime = -10;

  return ({ context, width, height, time }) => {
    if (time - prevTime < 2) {
      return;
    }
    prevTime = time;

    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);

    const draw = (x, y, width, height) => {
      const leftToRight = random.value() >= 0.5;

      if (leftToRight) {
        context.moveTo(x, y);
        context.lineTo(x + width, y + height);
      } else {
        context.moveTo(x + width, y);
        context.lineTo(x, y + height);
      }
    };

    context.lineCap = 'square';
    context.lineWidth = width * 0.003;

    const step = width * 0.02;

    context.beginPath();

    for (let x = 0; x < width; x += step) {
      for (let y = 0; y < height; y += step) {
        draw(x, y, step, step);
      }
    }

    context.stroke();
  };
};

canvasSketch(sketch, settings);
