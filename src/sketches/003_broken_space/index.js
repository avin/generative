import random from 'canvas-sketch-util/random';
import { lerp } from 'canvas-sketch-util/math';
import { findSegmentIntersection, pointsDistance } from '@/utils/geometry';

const settings = {
  dimensions: [2048, 2048],
  animate: true,
};

const sketch = ({ width, height }) => {
  const margin = 0;

  const sx = v => lerp(margin, width - margin, v);
  const sy = v => lerp(margin, height - margin, v);

  const generateLine = lines => {
    const zone1 = [
      [
        [0, 0.25],
        [0, 1],
      ], // p1
      [
        [0, 1],
        [0.75, 1],
      ], // p2
    ];
    const zone2 = [
      [
        [0.25, 0],
        [1, 0],
      ], // p1
      [
        [1, 0],
        [1, 0.75],
      ], // p2
    ];

    let d1 = random.pick(zone1);
    let d2 = random.pick(zone2);

    if (random.value() > 0.5) {
      [d1, d2] = [d2, d1];
    }

    const x1 = random.range(d1[0][0], d1[1][0]);
    const y1 = random.range(d1[0][1], d1[1][1]);

    const x2 = random.range(d2[0][0], d2[1][0]);
    const y2 = random.range(d2[0][1], d2[1][1]);

    const newLine = { p1: [x1, y1], p2: [x2, y2] };

    let i;
    let ri;
    let lowerDist;
    lines.forEach(eLine => {
      i = findSegmentIntersection(
        [eLine.p1[0], eLine.p1[1]],
        [eLine.p2[0], eLine.p2[1]],
        [newLine.p1[0], newLine.p1[1]],
        [newLine.p2[0], newLine.p2[1]],
      );

      if (i) {
        const dist = pointsDistance(newLine.p1[0], newLine.p1[1], i[0], i[1]);
        if (!lowerDist || dist < lowerDist) {
          ri = i;
          lowerDist = dist;
        }
      }
    });

    if (ri) {
      newLine.p2 = ri;
    }

    return newLine;
  };

  let prevTime = -10;

  return ({ context, width, height, time }) => {
    if (time - prevTime < 2) {
      return;
    }
    prevTime = time;

    const lines = [];

    for (let i = 0; i < 150; i += 1) {
      lines.push(generateLine(lines));
    }

    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);

    context.lineWidth = width * 0.001;

    lines.forEach(({ p1, p2 }) => {
      context.beginPath();
      context.moveTo(sx(p1[0]), sy(p1[1]));
      context.lineTo(sx(p2[0]), sy(p2[1]));
      context.stroke();
    });
  };
};

export default { sketch, settings };
