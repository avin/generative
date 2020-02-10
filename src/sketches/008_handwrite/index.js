import random from 'canvas-sketch-util/random';
import { setDrawPolygon } from '@/utils/ctx';
import { rope, smoothPath } from '@/utils/shape';

const settings = {
  dimensions: 'A4',
  animate: true,
};

const sketch = async () => {
  const generateLine = (fromX, toX, step, height, yOffset) => {
    const linePoints = [];
    for (let i = fromX; i < toX; i += step) {
      linePoints.push([
        i + random.pick([random.range(-step * 4, -step), random.range(0, step / 2)]),
        random.range(-height, height) + yOffset,
      ]);
    }
    return linePoints;
  };

  let prevTime = -10;

  return ({ context, width, height, time }) => {
    if (time - prevTime < 2) {
      return;
    }
    prevTime = time;

    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);

    context.strokeStyle = `hsla(240,100%,20%, 0.3)`;
    context.fillStyle = `hsl(240,100%,15%)`;

    const lineHeight = height / 80;
    let k = 0;
    for (let i = lineHeight * 4; i < height - lineHeight * 4; i += lineHeight * 2.5) {
      let lineLength = 50;
      while (lineLength < width - 80) {
        let wordLength = random.range(width / 10, width / 2);

        if (lineLength + wordLength > width) {
          wordLength -= lineLength + wordLength - width;
        }

        let lineCoords = generateLine(lineLength, lineLength + wordLength, width / 100, lineHeight, i);
        lineCoords = smoothPath(lineCoords, 2);
        for (let j = 0; j < lineCoords.length; j += 1) {
          k += 1;
          lineCoords[j] = [lineCoords[j][0], lineCoords[j][1], random.noise1D(k, 0.05) / 1.5];
        }
        lineCoords = rope(lineCoords);
        setDrawPolygon(context, lineCoords);
        context.fill();
        context.stroke();

        lineLength += wordLength + random.range(width / 30, width / 20);
      }
    }
  };
};

export default { sketch, settings };
