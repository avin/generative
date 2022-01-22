import random from 'canvas-sketch-util/random';
import set from 'lodash/set';
import get from 'lodash/get';

const randomInstance = random.createRandom();
console.info('seed=', randomInstance.getSeed());

const neighborOffsets = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

const generateRandomMatrix = (size) => {
  const result = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      result[x] = result[x] || [];
      result[x][y] = randomInstance.value() > 0.5 ? 1 : 0;
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

const findNeighbors = (matrix, cell, pride, expectCells = []) => {
  expectCells.push(cell);

  for (const offset of neighborOffsets) {
    const neighborCoord = { x: cell.x + offset[0], y: cell.y + offset[1] };

    if (!expectCells.find((i) => i.x === neighborCoord.x && i.y === neighborCoord.y)) {
      const neighborCell = get(matrix, [neighborCoord.y, neighborCoord.x]);

      if (neighborCell && neighborCell.pride === pride) {
        const pride = neighborCell.pride;
        findNeighbors(matrix, neighborCell, pride, expectCells);
      }
    }
  }
};

const uniqStyles = [];
let lastUniqId = 0;
const getUniqId = () => {
  uniqStyles[lastUniqId] = `hsl(${Math.floor(randomInstance.value() * 360)},${
    Math.floor(randomInstance.value() * 50) + 50
  }%,50%)`;
  return lastUniqId++;
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

  const objMatrix = matrix.map((yRow, y) => {
    return yRow.map((i, x) => {
      return {
        pride: i ? 1 : 0, // pride = 1 - закрашенная клетка
        x,
        y,
      };
    });
  });

  for (let y = 0; y < matrixSize; y++) {
    for (let x = 0; x < matrixSize; x++) {
      const currCell = objMatrix[y][x];
      if (currCell.meshId === undefined && currCell.pride === 1) {
        const cells = [];
        findNeighbors(objMatrix, currCell, 1, cells);
        const meshId = getUniqId();
        cells.forEach((cell) => {
          cell.meshId = meshId;
        });
      }
    }
  }

  for (let y = 0; y < matrixSize; y++) {
    for (let x = 0; x < matrixSize; x++) {
      const obj = objMatrix[y][x];
      if (obj.pride === 1) {
        ctx.fillStyle = uniqStyles[obj.meshId];
        ctx.fillRect(pointSize * x, pointSize * y, pointSize, pointSize);
      }
    }
  }
}
