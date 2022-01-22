import random from 'canvas-sketch-util/random';

const randomInstance = random.createRandom();
console.info('seed=', randomInstance.getSeed());

const generateRandomMatrix = (size) => {
  const result = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      result[x] = result[x] || [];
      result[x][y] = randomInstance.value() > 0.75 ? 1 : 0;
    }
  }
  return result;
};

const drawGrid = ({ ctx, canvasSize, pointSize }) => {
  const lineWidth = 1;
  const halfLineWidth = lineWidth / 2;
  ctx.strokeStyle = 'hsl(0,0%,75%)';
  ctx.lineWidth = lineWidth;
  for (let i = 0; i < canvasSize; i += pointSize) {
    ctx.moveTo(i - halfLineWidth, 0);
    ctx.lineTo(i - halfLineWidth, canvasSize);
    ctx.stroke();

    ctx.moveTo(0, i - halfLineWidth);
    ctx.lineTo(canvasSize, i - halfLineWidth);
    ctx.stroke();
  }
};

let matrix;
const matrixSize = 10;

// Draw basic
{
  matrix = generateRandomMatrix(matrixSize);
  const canvasElement = document.querySelector('#canvas1');
  const canvasSize = canvasElement.clientWidth;
  const pointSize = canvasSize / matrixSize;
  const ctx = canvasElement.getContext('2d');

  drawGrid({ ctx, canvasSize, pointSize });

  for (let y = 0; y < matrixSize; y++) {
    for (let x = 0; x < matrixSize; x++) {
      const value = matrix[y][x];
      if (value) {
        ctx.rect(pointSize * x, pointSize * y, pointSize, pointSize);
        ctx.fill();
      }
    }
  }
}

// Detect meshes
{
  const canvasElement = document.querySelector('#canvas2');
  const canvasSize = canvasElement.clientWidth;
  const pointSize = canvasSize / matrixSize;
  const ctx = canvasElement.getContext('2d');

  drawGrid({ ctx, canvasSize, pointSize });

  const objMatrix = matrix.map((yRow) => {
    return yRow.map((i) => {
      return {
        filled: !!i,
      };
    });
  });

  for (let y = 0; y < matrixSize; y++) {
    for (let x = 0; x < matrixSize; x++) {
      const value = objMatrix[y][x].filled;
      if (value) {
        ctx.rect(pointSize * x, pointSize * y, pointSize, pointSize);
        ctx.fill();
      }
    }
  }
}
