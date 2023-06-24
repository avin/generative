import canvasSketch from 'canvas-sketch';

const size = Math.min(window.innerWidth, 1024);

const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [size, size],
  animate: true,
};

const sketch = ({ width, height }) => {
  const balls = new Array(100).fill(0).map((b, i) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 0,
    age: i,
  }));

  return ({ context, width, height, time }) => {
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
      const ball = balls[i];
      ball.r++;

      context.beginPath();
      context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI, false);
      context.lineWidth = 1;
      context.strokeStyle = '#003300';
      context.stroke();
    }
  };
};

canvasSketch(sketch, settings);
