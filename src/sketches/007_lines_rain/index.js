import random from 'canvas-sketch-util/random';
import { mapRange } from 'canvas-sketch-util/math';
import Collection from '@/utils/collection';
import { drawLine } from '@/utils/ctx';
import { rope } from '@/utils/shape';

const settings = {
  dimensions: 'A3',
  orientation: 'landscape',
  animate: true,
};

const sketch = async ({ canvas, width, height }) => {
  const lines = new Collection();
  const palette = ['#594f4f', '#547980', '#45ada8', '#9de0ad', '#e5fcc2'];

  const speedRange = [5, 20];
  const sizeRange = [5, 20];
  const thicknessRange = [0.5, 3];

  const fromY = -height;
  const toY = 0;
  const maxLines = 1000;

  const circle = {
    x: width / 2,
    y: height / 2,
    r: 150,
  };
  const circles = [];

  canvas.addEventListener('mousemove', e => {
    const rect = e.target.getBoundingClientRect();
    const kX = rect.width / width;
    const kY = rect.height / height;
    circle.x = Math.floor((e.clientX - rect.left) / kX);
    circle.y = Math.floor((e.clientY - rect.top) / kY);
  });

  canvas.addEventListener('mouseleave', () => {
    circle.x = -9000;
    circle.y = 0;
  });
  canvas.addEventListener('mousewheel', ({ deltaY }) => {
    if (deltaY > 0) {
      circle.r = Math.max(circle.r - 10, 20);
    } else if (deltaY < 0) {
      circle.r = Math.min(circle.r + 10, width / 2);
    }
  });

  canvas.addEventListener('click', () => {
    circles.push({ ...circle });
  });

  const cleanLines = () => {
    for (const line of lines) {
      let inScreen = false;

      for (const p of line.points) {
        if (p.x > 0 && p.x < width && p.y > fromY && p.y < height) {
          inScreen = true;
        }
        if (inScreen) {
          break;
        }
      }

      if (!inScreen) {
        lines.remove(line);
      }
    }
  };

  const rampUpLine = line => {
    let x = line.points[line.points.length - 1].x;
    let y = line.points[line.points.length - 1].y + line.speed;

    // Check is in circle
    const allCircles = [...circles, circle];
    for (const circle of allCircles) {
      const distance = Math.sqrt((x - circle.x) ** 2 + (y - circle.y) ** 2);
      const distanceDiff = distance - circle.r;
      if (distanceDiff < 0) {
        const angle = Math.atan2(y - circle.y, x - circle.x); // radians
        const diffX = Math.cos(angle) * Math.abs(Math.sqrt(Math.abs(distanceDiff * (circle.r / 4 / line.speed))));
        const diffY = Math.sin(angle) * Math.abs(Math.sqrt(Math.abs(distanceDiff * (circle.r / 4 / line.speed))));

        if (Math.abs(diffX) > line.speed) {
          lines.remove(line);
          return;
        }

        x += diffX;
        y += diffY;
      }
    }

    if (line.points.length) {
      const prevY = line.points[line.points.length - 1].y;

      if (y < prevY || y === prevY) {
        lines.remove(line);
        return;
      }
    }

    line.points.push({ x, y });
    if (line.points.length > line.size) {
      line.points = line.points.slice(1);
    }
  };

  const createLine = () => {
    const line = {
      points: [{ x: random.range(0, width), y: random.range(fromY, toY) }],
      speed: random.range(speedRange[0], speedRange[1]),
      size: random.rangeFloor(sizeRange[0], sizeRange[1]),
      color: random.pick(palette),
    };

    line.thickness = mapRange(line.speed, speedRange[0], speedRange[1], thicknessRange[0], thicknessRange[1]);

    lines.add(line);
  };

  return ({ context, width, height }) => {
    context.fillStyle = 'hsla(0, 0%, 10%, .5)';
    context.fillRect(0, 0, width, height);

    [...circles, circle].forEach(circle => {
      context.strokeStyle = '#999';
      context.beginPath();
      context.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false);
      context.stroke();
    });

    for (const line of lines) {
      context.strokeStyle = line.color;
      // context.lineWidth = line.thickness;

      if (line.points.length > 2) {
        const lineCoords = line.points.map((p, idx) => {
          return [p.x, p.y, (idx / line.points.length) * line.thickness * 2];
        });

        const ropeCoords = rope(lineCoords);

        drawLine(context, ropeCoords, true);
      }

      rampUpLine(line);
    }

    cleanLines();

    for (let i = lines.size; i < maxLines; i += 1) {
      createLine();
    }
  };
};

export default { sketch, settings };
