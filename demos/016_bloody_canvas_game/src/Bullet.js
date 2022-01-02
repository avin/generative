import random from 'canvas-sketch-util/random';

export default class Bullet {
  constructor(options) {
    for (const [key, option] of Object.entries(options)) {
      this[key] = option;
    }

    this.color = random.pick(['#4b86b4', '#adcbe3', '#63ace5']);
    this.size = this.baseOptions.fieldSize / 100;
    this.speed = (this.baseOptions.fieldSize / 100) * this.initSpeedFactor;
  }

  update() {
    const {
      moveAngle,
      game: { enemies },
    } = this;

    this.bX = this.x;
    this.bY = this.y;

    this.speed += -0.1;

    if (this.speed <= 0) {
      this.draw(true);
      this.destroy();
    } else {
      this.x += Math.cos(moveAngle) * this.speed;
      this.y += Math.sin(moveAngle) * this.speed;
    }

    if (
      this.x < -100 ||
      this.x > this.baseOptions.width + 100 ||
      this.y < -100 ||
      this.y > this.baseOptions.height + 100
    ) {
      this.destroy();
    }

    enemies.items.forEach(enemy => {
      if (enemy.live) {
        const distance = Math.sqrt((this.x - enemy.x) ** 2 + (this.y - enemy.y) ** 2);
        if (distance < enemy.size) {
          enemy.explode();
          this.destroy();
        }
      }
    });
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

    ctx.lineWidth = this.size / 10;

    // Tail
    const tailLength = Math.min(this.size * Math.max(this.speed, 1), this.size * 5);
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(
      this.x + Math.cos(this.moveAngle - Math.PI) * tailLength,
      this.y + Math.sin(this.moveAngle - Math.PI) * tailLength,
    );
    ctx.stroke();

    // Body
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(x, y, this.size / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  destroy() {
    this.game.bullets.remove(this);
  }
}
