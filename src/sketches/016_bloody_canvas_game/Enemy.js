import random from 'canvas-sketch-util/random';
import { playSound } from '@/utils/sound';

export default class Enemy {
  constructor(options) {
    for (const [key, option] of Object.entries(options)) {
      this[key] = option;
    }

    this.live = true;
    this.sizeFactor = random.range(20, 30);
    this.size = this.baseOptions.fieldSize * (1 / this.sizeFactor);
    this.particleSize = this.baseOptions.fieldSize / 100;
    this.speed = this.baseOptions.fieldSize / (this.sizeFactor * 10);

    this.moveAngle = Math.PI / 2;
  }

  update() {
    const {
      game: { ship },
    } = this;

    if (this.live) {
      this.moveAngle = Math.atan2(ship.y - this.y, ship.x - this.x);

      this.x += Math.cos(this.moveAngle) * this.speed;
      this.y += Math.sin(this.moveAngle) * this.speed;

      const distanceToShip = Math.sqrt((this.x - ship.x) ** 2 + (this.y - ship.y) ** 2);
      if (distanceToShip < this.size / 2 + ship.size / 2) {
        ship.explode();
        this.destroy();
      }
    } else {
      let maxSpeed = 0;
      this.particles.forEach(p => {
        p.x += Math.cos(p.a) * p.speed;
        p.y += Math.sin(p.a) * p.speed;
        p.speed = Math.max(p.speed - (1 - 1 / p.speed), 1);

        maxSpeed = Math.max(maxSpeed, p.speed);

        return p;
      });
      if (maxSpeed <= 1) {
        this.draw(true);
        this.destroy();
      }
    }
  }

  draw(onBackground = false) {
    const {
      baseOptions: { context, backgroundContext },
      x,
      y,
    } = this;

    let ctx;
    if (onBackground) {
      ctx = backgroundContext;
    } else {
      ctx = context;
    }

    if (this.live) {
      // Body
      ctx.fillStyle = '#ff6f69';
      ctx.lineWidth = this.size / 30;
      ctx.beginPath();
      ctx.arc(x, y, this.size / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Track
      backgroundContext.fillStyle = 'hsla(0,0%,98%,0.1)';
      backgroundContext.beginPath();
      backgroundContext.arc(x, y, this.size / 2, 0, Math.PI * 2);
      backgroundContext.fill();
    } else {
      this.particles.forEach(({ x, y, size, c }) => {
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(x, y, size / 2, 0, Math.PI * 2);
        ctx.fill();
      });
    }
  }

  explode() {
    playSound(random.pick([349.2 + 100, 392.0 + 100, 440.0 + 100]), 'sine', 0.12);

    this.live = false;
    this.particles = [];
    for (let i = 0; i < this.sizeFactor * 2; i += 1) {
      const particle = {
        x: this.x + random.range(-this.size, this.size),
        y: this.y + random.range(-this.size, this.size),
        speed: random.range(5, 10),
        size: this.particleSize * random.range(0.5, 1.5),
        c: `hsl(0, 100%,${random.range(40, 60)}%)`,
      };

      particle.a = Math.atan2(particle.y - this.y, particle.x - this.x);

      this.particles.push(particle);
    }
  }

  destroy() {
    this.game.enemies.remove(this);
  }
}
