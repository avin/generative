import { playSound } from '@/utils/sound';
import random from 'canvas-sketch-util/random';
import Bullet from './Bullet';

export default class Ship {
  constructor(options) {
    for (const [key, option] of Object.entries(options)) {
      this[key] = option;
    }

    this.deadTime = 0;

    this.size = this.baseOptions.fieldSize / 50;

    document.addEventListener('keydown', this.handleKeyPress.bind(this));
    document.addEventListener('keyup', this.handleKeyUp.bind(this));

    this.baseOptions.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.baseOptions.canvas.addEventListener('mousedown', this.handleMouseDown.bind(this));

    this.cursorX = 0;
    this.cursorY = 0;

    this.moveDirection = {
      up: false,
      right: false,
      down: false,
      left: false,
    };
    this.gunAngle = Math.PI;
  }

  fire() {
    if (!this.game.running) {
      this.game.ship.deadTime = this.game.time;
      this.game.running = true;
      playSound(random.pick([100]), 'sine', 1, 0.5);
      return;
    }

    if (this.dead) {
      return;
    }

    const { baseOptions, game } = this;
    // playSound(random.pick([698.5, 784.0, 880.0]), 'sawtooth', 0.08);
    playSound(random.pick([311.1, 370.0, 415.3]), 'sawtooth', 0.1, 0.5);
    playSound(random.pick([155.6, 185.0, 207.7]), 'sine', 0.2, 0.5);

    for (let i = 0; i < 8; i += 1) {
      const bullet = new Bullet({
        baseOptions,
        game,
        x: this.gunTipCoord[0],
        y: this.gunTipCoord[1],
        moveAngle: this.gunAngle + random.range(-Math.PI / 32, Math.PI / 32),
        initSpeedFactor: random.range(0.8, 1.2),
      });
      game.bullets.add(bullet);
    }
  }

  explode() {
    playSound(87.31, 'triangle', 0.1);

    const { x, y, baseOptions, game } = this;
    this.dead = true;
    this.deadTime = game.time;

    for (let a = -Math.PI; a < Math.PI; a += Math.PI / 50) {
      const bullet = new Bullet({
        baseOptions,
        game,
        x,
        y,
        moveAngle: a,
        initSpeedFactor: random.range(0.8, 1.2),
      });
      game.bullets.add(bullet);
    }
  }

  handleMouseDown(e) {
    this.fire();
  }

  handleMouseMove(e) {
    const { movementX, movementY } = e;

    this.cursorX += movementX;
    this.cursorY += movementY;

    this.gunAngle = Math.atan2(this.cursorY, this.cursorX);

    this.cursorX = 200 * Math.cos(this.gunAngle);
    this.cursorY = 200 * Math.sin(this.gunAngle);
  }

  handleKeyPress(e) {
    switch (e.code) {
      case 'ArrowUp':
      case 'KeyW': {
        this.moveDirection.up = true;
        break;
      }
      case 'ArrowRight':
      case 'KeyD': {
        this.moveDirection.right = true;
        break;
      }
      case 'ArrowDown':
      case 'KeyS': {
        this.moveDirection.down = true;
        break;
      }
      case 'ArrowLeft':
      case 'KeyA': {
        this.moveDirection.left = true;
        break;
      }
      default:
    }
  }

  handleKeyUp(e) {
    switch (e.code) {
      case 'ArrowUp':
      case 'KeyW': {
        this.moveDirection.up = false;
        break;
      }
      case 'ArrowRight':
      case 'KeyD': {
        this.moveDirection.right = false;
        break;
      }
      case 'ArrowDown':
      case 'KeyS': {
        this.moveDirection.down = false;
        break;
      }
      case 'ArrowLeft':
      case 'KeyA': {
        this.moveDirection.left = false;
        break;
      }
      default:
    }
  }

  update() {
    if (this.dead) {
      if (this.game.time - this.deadTime > 1) {
        this.dead = false;
      }
      return;
    }
    const moveDiff = this.baseOptions.fieldSize / 300;
    if (this.moveDirection.up) {
      this.y += -moveDiff;
    }
    if (this.moveDirection.right) {
      this.x += moveDiff;
    }
    if (this.moveDirection.down) {
      this.y += moveDiff;
    }
    if (this.moveDirection.left) {
      this.x -= moveDiff;
    }

    this.x = Math.max(Math.min(this.baseOptions.width, this.x), 0);
    this.y = Math.max(Math.min(this.baseOptions.height, this.y), 0);
  }

  draw() {
    const {
      baseOptions: { context },
      x,
      y,
      gunAngle,
    } = this;

    if (this.dead) {
      return;
    }

    // Body
    context.fillStyle = `#96ceb4`;
    context.lineWidth = this.size / 10;
    context.beginPath();
    context.arc(x, y, this.size / 2, 0, Math.PI * 2);
    context.fill();
    context.stroke();

    // Gun
    context.beginPath();
    const fromX = (Math.cos(gunAngle) * this.size) / 2;
    const fromY = (Math.sin(gunAngle) * this.size) / 2;

    const toX = Math.cos(gunAngle) * this.size * 1.5;
    const toY = Math.sin(gunAngle) * this.size * 1.5;

    this.gunTipCoord = [x + toX, y + toY];

    context.moveTo(x + fromX, y + fromY);
    context.lineTo(x + toX, y + toY);
    context.stroke();
  }
}
