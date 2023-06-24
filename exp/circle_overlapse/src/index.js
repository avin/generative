import canvasSketch from 'canvas-sketch';

const size = Math.min(window.innerWidth, 1024);

const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [size, size],
  animate: true,
};

const sketch = ({ width, height }) => {
  const doCirclesIntersect = (x1, y1, r1, x2, y2, r2) => {
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance <= r1 + r2;
  };

  const findFreePosition = (balls, width, height, radius) => {
    let x;
    let y;
    do {
      x = Math.random() * width;
      y = Math.random() * height;
    } while (balls.some((ball) => doCirclesIntersect(x, y, radius, ball.x, ball.y, ball.r)));
    return { x, y };
  };

  const balls = [];

  for (let i = 0; i < 500; i++) {
    const r = Math.ceil(Math.random() * 10);
    const newPos = findFreePosition(balls, width, height, r);
    const ball = {
      x: newPos.x,
      y: newPos.y,
      r,
      age: i * 0.00001,
      d: 1,
      c: newPos.x + newPos.y,
    };
    balls.push(ball);
  }

  return ({ context, width, height, time }) => {
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);

    // for (let i = 0; i < balls.length; i++) {
    //   const ball = balls[i];
    //   ball.d = 1;
    // }

    for (let i = 0; i < balls.length; i++) {
      const ball = balls[i];
      ball.age++;

      for (let j = 0; j < balls.length; j++) {
        if (i !== j && doCirclesIntersect(ball.x, ball.y, ball.r, balls[j].x, balls[j].y, balls[j].r)) {
          if (ball.age > balls[j].age) {
            ball.d = -1;
          }
        }
      }

      if (ball.r <= 0) {
        const newPos = findFreePosition(balls, width, height, 0);
        ball.x = newPos.x;
        ball.y = newPos.y;
        ball.r = 0;
        ball.d = 1;
        ball.c = newPos.x + newPos.y;
        ball.age = Math.random();
      }

      ball.r += ball.d * 0.25;

      const hue = ball.c;

      context.beginPath();
      context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI, false);
      context.fillStyle = `hsl(${hue}, 90%, 80%)`;
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = `hsla(${hue}, 50%, 0%, .5)`;
      context.stroke();
    }
  };
};

canvasSketch(sketch, settings);
