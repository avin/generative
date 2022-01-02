import canvasSketch from 'canvas-sketch';
import random from 'canvas-sketch-util/random';
import Collection from './collection';
import Ship from './Ship';
import Enemy from './Enemy';

const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [1201, 1201],
  animate: true,
};

const browserSetup = (canvas) => {
  canvas.addEventListener('click', () => {
    canvas.requestPointerLock =
      canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;

    canvas.requestPointerLock();
  });
};

const sketch = ({ canvas, context, width, height }) => {
  browserSetup(canvas);

  const backGroundCanvas = document.createElement('canvas');
  backGroundCanvas.width = width;
  backGroundCanvas.height = height;
  const backgroundContext = backGroundCanvas.getContext('2d');
  backgroundContext.fillStyle = 'hsl(0, 0%, 98%)';
  backgroundContext.fillRect(0, 0, width, height);

  const gridCanvas = document.createElement('canvas');
  gridCanvas.width = width;
  gridCanvas.height = height;
  const gridContext = gridCanvas.getContext('2d');

  gridContext.lineWidth = 0.05;
  gridContext.strokeStyle = 'hsla(0, 0%, 50%)';
  for (let y = 0.5; y < height; y += 50) {
    gridContext.beginPath();
    gridContext.moveTo(0, y);
    gridContext.lineTo(width, y);
    gridContext.stroke();
  }
  for (let x = 0.5; x < width; x += 50) {
    gridContext.beginPath();
    gridContext.moveTo(x, 0);
    gridContext.lineTo(x, height);
    gridContext.stroke();
  }

  const fieldSize = Math.min(width, height);

  const game = {
    running: false,
  };

  const baseOptions = {
    context,
    canvas,
    fieldSize,
    width,
    height,
    backgroundContext,
    backGroundCanvas,
  };

  game.bullets = new Collection();
  game.enemies = new Collection();

  game.ship = new Ship({
    baseOptions,
    game,
    x: width / 2,
    y: height / 2,
  });

  const createEnemy = () => {
    const pos = random.pick(['top', 'left', 'bottom', 'right']);
    let x = 0;
    let y = 0;
    const offset = 100;
    switch (pos) {
      case 'top': {
        y = -offset;
        x = random.range(0 - offset, width + offset);
        break;
      }
      case 'right': {
        x = width + offset;
        y = random.range(0 - offset, width + offset);
        break;
      }
      case 'bottom': {
        y = height + offset;
        x = random.range(0 - offset, width + offset);
        break;
      }
      case 'left': {
        x = -offset;
        y = random.range(0 - offset, width + offset);
        break;
      }
      default:
    }
    game.enemies.add(new Enemy({ baseOptions, game, x, y }));
  };

  return ({ context, time }) => {
    game.time = time;

    backgroundContext.drawImage(gridCanvas, 0, 0);
    backgroundContext.fillStyle = `hsla(0, 0%, 98%, 0.01)`;
    backgroundContext.fillRect(0, 0, width, height);
    context.drawImage(backGroundCanvas, 0, 0);

    if (game.running) {
      if (game.enemies.size < Math.min(Math.floor((time - game.ship.deadTime) / 3) + 1, 15)) {
        createEnemy();
      }

      game.enemies.items.forEach((enemy) => {
        enemy.update();
        enemy.draw();
      });

      game.bullets.items.forEach((bullet) => {
        bullet.update();
        bullet.draw();
      });

      game.ship.update();
      game.ship.draw();
    } else {
      context.save();
      context.translate(width / 2, height / 2);
      context.rotate(Math.cos(time * 5) / 5);
      context.font = 'bold 90px Arial';
      context.textAlign = 'center';
      context.fillStyle = 'hsl(0, 0%, 20%)';
      context.fillText('Click to start', 0, 0);
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
