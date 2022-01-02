import canvasSketch from 'canvas-sketch';
import random from 'canvas-sketch-util/random';
import { lerp } from 'canvas-sketch-util/math';

const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [2048, 2048],
  animate: true,
};

const sketch = () => {
  const size = 40;
  const maxTries = size;
  const maxLines = Number.MAX_SAFE_INTEGER;
  const maxLineLength = size * size;

  let prevTime = -10;

  return ({ context, width, height, time }) => {
    if (time - prevTime < 2) {
      return;
    }
    prevTime = time;

    const matrix = new Array(size).fill(null).map(() => new Array(size).fill(0));

    const cellsAround = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    const lines = [];

    let iterations = 0;
    while (iterations < maxLines) {
      let success = false;
      let tries = 0;
      while (!success) {
        let cellsCounter = 0;

        let x;
        let y;
        if (tries > maxTries) {
          let firstCellFound = false;
          for (let iy = 0; iy < size; iy += 1) {
            if (firstCellFound) {
              break;
            }
            for (let ix = 0; ix < size; ix += 1) {
              if (!matrix[iy][ix]) {
                y = iy;
                x = ix;

                firstCellFound = true;
                break;
              }
            }
          }
          if (!firstCellFound) {
            // Global stop procedure
            iterations = maxLines + 1;
            success = true;
            break;
          }
        } else {
          x = random.rangeFloor(0, size);
          y = random.rangeFloor(0, size);
        }

        if (!matrix[y][x]) {
          cellsCounter += 1;
          matrix[y][x] = cellsCounter;
          lines[iterations] = [[y, x]];

          let completedLine = false;
          while (!completedLine) {
            let foundCell = false;
            for (const cA of random.shuffle(cellsAround)) {
              if (!(y + cA[0] >= size || y + cA[0] < 0 || x + cA[1] > size || x + cA[1] < 0)) {
                if (!matrix[y + cA[0]][x + cA[1]]) {
                  cellsCounter += 1;
                  y += cA[0];
                  x += cA[1];
                  matrix[y][x] = cellsCounter;
                  lines[iterations].push([y, x]);

                  if (cellsCounter >= maxLineLength) {
                    completedLine = true;
                  }
                  foundCell = true;
                  break;
                }
              }
            }
            if (!foundCell) {
              completedLine = true;
            }
          }

          success = true;
        } else {
          tries += 1;
        }
      }

      iterations += 1;
    }

    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);

    const margin = width * 0.1;

    context.lineWidth = (width * 0.4) / size;

    lines.forEach((line) => {
      context.beginPath();
      if (line.length === 1) {
        context.beginPath();
        const px = lerp(margin, width - margin, line[0][1] / size);
        const py = lerp(margin, height - margin, line[0][0] / size);

        context.fillStyle = '#DB3737';
        context.arc(px, py, context.lineWidth / 1.5, 0, Math.PI * 2, false);
        context.fill();
      } else {
        context.beginPath();
        context.strokeStyle = '#202B33';
        line.forEach(([y, x], pointIdx) => {
          const px = lerp(margin, width - margin, x / size);
          const py = lerp(margin, height - margin, y / size);

          if (pointIdx === 0) {
            context.moveTo(px, py);
          } else {
            context.lineTo(px, py);
          }
        });
        context.stroke();
      }
    });
  };
};

canvasSketch(sketch, settings);
