import random from 'canvas-sketch-util/random';
import get from 'lodash/get';

const randomInstance = random.createRandom();

const neighborOffsets = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

const contour = [
  [
    [0, 0],
    [0, 1],
  ],
  [
    [0, 0],
    [1, 0],
  ],
  [
    [1, 0],
    [1, 1],
  ],
  [
    [0, 1],
    [1, 1],
  ],
];

const generateRandomMatrix = (size) => {
  const result = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      result[y] = result[y] || [];
      result[y][x] = {
        // pride: randomInstance.value() > 0.5 ? 1 : 0, // pride = 1 - закрашенная клетка
        pride: 0,
        x,
        y,
      };
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

const matrixSize = 10;
let canvasSize;
let pointSize;
const matrix = generateRandomMatrix(matrixSize);

const uniqHue = {};
const drawAll = () => {
  let lastUniqId = 0;
  const getUniqId = () => {
    uniqHue[lastUniqId] =
      uniqHue[lastUniqId] === undefined ? Math.floor(randomInstance.value() * 360) : uniqHue[lastUniqId];

    return lastUniqId++;
  };

  for (let y = 0; y < matrixSize; y++) {
    for (let x = 0; x < matrixSize; x++) {
      matrix[y][x].meshId = undefined;
    }
  }

  // Draw basic
  {
    const canvasElement = document.querySelector('#canvas1');
    canvasSize = canvasElement.clientWidth;
    pointSize = canvasSize / matrixSize;
    const ctx = canvasElement.getContext('2d');
    ctx.clearRect(0, 0, canvasSize, canvasSize);

    drawGrid({ ctx, canvasSize, pointSize });

    for (let y = 0; y < matrixSize; y++) {
      for (let x = 0; x < matrixSize; x++) {
        const value = matrix[y][x].pride;
        if (value) {
          ctx.fillRect(pointSize * x, pointSize * y, pointSize, pointSize);
        }
      }
    }
  }

  // Detect meshes
  {
    const canvasElement = document.querySelector('#canvas2');
    const ctx = canvasElement.getContext('2d');
    ctx.clearRect(0, 0, canvasSize, canvasSize);

    drawGrid({ ctx, canvasSize, pointSize });

    for (let y = 0; y < matrixSize; y++) {
      for (let x = 0; x < matrixSize; x++) {
        const currCell = matrix[y][x];
        if (currCell.meshId === undefined && currCell.pride === 1) {
          const cells = [];
          findNeighbors(matrix, currCell, 1, cells);
          const meshId = getUniqId();
          cells.forEach((cell) => {
            cell.meshId = meshId;
          });
        }
      }
    }

    for (let y = 0; y < matrixSize; y++) {
      for (let x = 0; x < matrixSize; x++) {
        const obj = matrix[y][x];
        if (obj.pride === 1) {
          ctx.fillStyle = `hsl(${uniqHue[String(obj.meshId)]}, 50%, 50%)`;
          ctx.fillRect(pointSize * x, pointSize * y, pointSize, pointSize);
        }
      }
    }
  }

  // Get lines
  {
    const canvasElement = document.querySelector('#canvas3');
    const ctx = canvasElement.getContext('2d');
    ctx.clearRect(0, 0, canvasSize, canvasSize);

    const lines = {};

    for (let y = 0; y < matrixSize; y++) {
      for (let x = 0; x < matrixSize; x++) {
        const cell = matrix[y][x];
        if (cell.meshId === undefined) {
          continue;
        }

        neighborOffsets.forEach((offset, idx) => {
          const neighborCell = get(matrix, [y + offset[0], x + offset[1]]);
          if (!neighborCell || neighborCell.meshId !== cell.meshId) {
            // Нет соседа
            lines[cell.meshId] = lines[cell.meshId] || [];
            lines[cell.meshId].push([
              [y + contour[idx][0][0], x + contour[idx][0][1]],
              [y + contour[idx][1][0], x + contour[idx][1][1]],
            ]);
          }
        });
      }
    }

    Object.keys(lines).forEach((key) => {
      const line = lines[key];

      line.forEach(([from, to]) => {
        ctx.beginPath();
        ctx.strokeStyle = `hsl(${uniqHue[String(key)]}, 50%, 50%)`;
        ctx.moveTo(from[1] * pointSize, from[0] * pointSize);
        ctx.lineTo(to[1] * pointSize, to[0] * pointSize);
        ctx.stroke();
      });
    });
  }
};

drawAll();

let drawMode = -1;
const updMatrix = (y, x) => {
  if (drawMode === 0) {
    if (matrix[y][x].pride) {
      matrix[y][x].pride = 0;
      drawAll();
    }
  } else if (drawMode === 1) {
    if (!matrix[y][x].pride) {
      matrix[y][x].pride = 1;
      drawAll();
    }
  }
};

['#canvas1', '#canvas2', '#canvas3'].forEach((selector) => {
  document.querySelector(selector).addEventListener('mousedown', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = Math.floor((e.clientY - rect.top) / pointSize);
    const x = Math.floor((e.clientX - rect.left) / pointSize);
    if (matrix[y][x].pride) {
      drawMode = 0;
    } else {
      drawMode = 1;
    }
    updMatrix(y, x);
  });
  document.querySelector(selector).addEventListener('mouseup', (e) => {
    drawMode = -1;
  });
  document.querySelector(selector).addEventListener('mousemove', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = Math.floor((e.clientY - rect.top) / pointSize);
    const x = Math.floor((e.clientX - rect.left) / pointSize);
    if (matrix[y] && matrix[y][x]) {
      updMatrix(y, x);
    }
  });
});
