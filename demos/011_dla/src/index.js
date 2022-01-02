import canvasSketch from 'canvas-sketch';
import random from 'canvas-sketch-util/random';
import { lerp } from 'canvas-sketch-util/math';

const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [2048, 2048],
  animate: true,
};

const sketch = ({ width, height }) => {
  const backGroundCanvas = document.createElement('canvas');
  backGroundCanvas.width = width;
  backGroundCanvas.height = height;
  const backgroundContext = backGroundCanvas.getContext('2d');
  backgroundContext.fillStyle = 'hsl(0, 0%, 10%)';
  backgroundContext.fillRect(0, 0, width, height);

  const margin = width * 0.1;

  const searchSections = 64;
  const sectionArea = 1 / searchSections;

  const sx = (v) => lerp(margin, width - margin, v);
  const sy = (v) => lerp(margin, height - margin, v);

  const pointRadius = width * 0.001;
  const pointRadiusS = pointRadius / width;

  const staticPoints = new Array(searchSections).fill(0).map(() => new Array(searchSections).fill(0).map(() => []));
  for (let i = 0; i < 40; i += 1) {
    const y = random.range(0.49, 0.51);
    const x = random.range(0.49, 0.51);

    const iY = Math.floor(y / sectionArea);
    const iX = Math.floor(x / sectionArea);

    staticPoints[iY][iX].push({ x, y, c: `hsl(0,50%,50%)` });
  }

  const generateFreePoint = (time = 0) => {
    const i = random.range(-Math.PI, Math.PI);
    const x = Math.cos(i) / 2 + 0.5;
    const y = Math.sin(i) / 2 + 0.5;

    const a = Math.atan2(y - 0.5, x - 0.5) - Math.PI; // radians

    return {
      x,
      y,
      a,
      c: `hsl(${time * 5},80%,80%)`,
    };
  };

  const freePoints = [];

  staticPoints.forEach((subStaticPointsY) => {
    subStaticPointsY.forEach((subStaticPointsX) => {
      subStaticPointsX.forEach((p) => {
        backgroundContext.fillStyle = 'hsl(0, 50%, 50%)';
        backgroundContext.fillRect(sx(p.x) - pointRadius, sy(p.y) - pointRadius, pointRadius * 2, pointRadius * 2);
      });
    });
  });

  backgroundContext.beginPath();
  backgroundContext.strokeStyle = 'hsl(0,50%,98%)';
  backgroundContext.lineWidth = width * 0.001;
  backgroundContext.arc(width / 2, height / 2, width / 2 - margin, 0, Math.PI * 2, false);
  backgroundContext.stroke();

  let endedProcess = false;

  return ({ context, time }) => {
    context.drawImage(backGroundCanvas, 0, 0);

    context.fillStyle = 'hsl(0, 0%, 98%)';

    if (!endedProcess) {
      if (freePoints.length < 5000) {
        for (let i = 0; i < 10; i += 1) {
          freePoints.push(generateFreePoint(time));
        }
      }

      freePoints.forEach((p) => {
        p.x += pointRadiusS * Math.cos(p.a);
        p.y += pointRadiusS * Math.sin(p.a);
        context.fillRect(sx(p.x) - pointRadius, sy(p.y) - pointRadius, pointRadius * 2, pointRadius * 2);
      });

      for (let fpIdx = 0; fpIdx < freePoints.length; fpIdx += 1) {
        const fp = freePoints[fpIdx];

        const iY = Math.floor(fp.y / sectionArea);
        const iX = Math.floor(fp.x / sectionArea);

        let comparePoints = [];
        for (let i1 = -1; i1 <= 1; i1 += 1) {
          for (let i2 = -1; i2 <= 1; i2 += 1) {
            if (staticPoints[iY + i1] && staticPoints[iY + i1][iX + i2]) {
              comparePoints = staticPoints[iY + i1][iX + i2];

              for (let spIdx = 0; spIdx < comparePoints.length; spIdx += 1) {
                const sp = comparePoints[spIdx];

                if (
                  Math.abs(sx(fp.x) - sx(sp.x)) < pointRadius * 2 &&
                  Math.abs(sx(fp.y) - sx(sp.y)) < pointRadius * 2
                ) {
                  freePoints[fpIdx] = generateFreePoint(time);

                  const iY = Math.floor(fp.y / sectionArea);
                  const iX = Math.floor(fp.x / sectionArea);

                  staticPoints[iY][iX].push(fp);

                  backgroundContext.fillStyle = fp.c;
                  backgroundContext.fillRect(
                    sx(fp.x) - pointRadius,
                    sy(fp.y) - pointRadius,
                    pointRadius * 2,
                    pointRadius * 2,
                  );

                  if (Math.sqrt((fp.x - 0.5) ** 2 + (fp.y - 0.5) ** 2) > 0.48) {
                    endedProcess = true;
                  }

                  break;
                }
              }
            }
          }
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
