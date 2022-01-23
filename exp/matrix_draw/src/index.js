/* eslint-disable */
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
  let result = [];
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
  // prettier-ignore
  {
    // result = [[{"pride":1,"x":0,"y":0,"meshId":0},{"pride":1,"x":1,"y":0,"meshId":0},{"pride":1,"x":2,"y":0,"meshId":0},{"pride":0,"x":3,"y":0},{"pride":0,"x":4,"y":0},{"pride":0,"x":5,"y":0},{"pride":0,"x":6,"y":0},{"pride":0,"x":7,"y":0},{"pride":0,"x":8,"y":0},{"pride":0,"x":9,"y":0}],[{"pride":1,"x":0,"y":1,"meshId":0},{"pride":0,"x":1,"y":1},{"pride":1,"x":2,"y":1,"meshId":0},{"pride":1,"x":3,"y":1,"meshId":0},{"pride":0,"x":4,"y":1},{"pride":0,"x":5,"y":1},{"pride":0,"x":6,"y":1},{"pride":0,"x":7,"y":1},{"pride":0,"x":8,"y":1},{"pride":0,"x":9,"y":1}],[{"pride":1,"x":0,"y":2,"meshId":0},{"pride":1,"x":1,"y":2,"meshId":0},{"pride":0,"x":2,"y":2},{"pride":1,"x":3,"y":2},{"pride":0,"x":4,"y":2},{"pride":0,"x":5,"y":2},{"pride":0,"x":6,"y":2},{"pride":0,"x":7,"y":2},{"pride":0,"x":8,"y":2},{"pride":0,"x":9,"y":2}],[{"pride":0,"x":0,"y":3},{"pride":0,"x":1,"y":3},{"pride":1,"x":2,"y":3,"meshId":1},{"pride":1,"x":3,"y":3,"meshId":1},{"pride":0,"x":4,"y":3},{"pride":0,"x":5,"y":3},{"pride":0,"x":6,"y":3},{"pride":0,"x":7,"y":3},{"pride":0,"x":8,"y":3},{"pride":0,"x":9,"y":3}],[{"pride":0,"x":0,"y":4},{"pride":0,"x":1,"y":4},{"pride":0,"x":2,"y":4},{"pride":0,"x":3,"y":4},{"pride":0,"x":4,"y":4},{"pride":0,"x":5,"y":4},{"pride":0,"x":6,"y":4},{"pride":0,"x":7,"y":4},{"pride":0,"x":8,"y":4},{"pride":0,"x":9,"y":4}],[{"pride":0,"x":0,"y":5},{"pride":0,"x":1,"y":5},{"pride":0,"x":2,"y":5},{"pride":0,"x":3,"y":5},{"pride":0,"x":4,"y":5},{"pride":0,"x":5,"y":5},{"pride":0,"x":6,"y":5},{"pride":0,"x":7,"y":5},{"pride":0,"x":8,"y":5},{"pride":0,"x":9,"y":5}],[{"pride":0,"x":0,"y":6},{"pride":0,"x":1,"y":6},{"pride":0,"x":2,"y":6},{"pride":0,"x":3,"y":6},{"pride":0,"x":4,"y":6},{"pride":0,"x":5,"y":6},{"pride":0,"x":6,"y":6},{"pride":0,"x":7,"y":6},{"pride":0,"x":8,"y":6},{"pride":0,"x":9,"y":6}],[{"pride":0,"x":0,"y":7},{"pride":0,"x":1,"y":7},{"pride":0,"x":2,"y":7},{"pride":0,"x":3,"y":7},{"pride":0,"x":4,"y":7},{"pride":0,"x":5,"y":7},{"pride":0,"x":6,"y":7},{"pride":0,"x":7,"y":7},{"pride":0,"x":8,"y":7},{"pride":0,"x":9,"y":7}],[{"pride":0,"x":0,"y":8},{"pride":0,"x":1,"y":8},{"pride":0,"x":2,"y":8},{"pride":0,"x":3,"y":8},{"pride":0,"x":4,"y":8},{"pride":0,"x":5,"y":8},{"pride":0,"x":6,"y":8},{"pride":0,"x":7,"y":8},{"pride":0,"x":8,"y":8},{"pride":0,"x":9,"y":8}],[{"pride":0,"x":0,"y":9},{"pride":0,"x":1,"y":9},{"pride":0,"x":2,"y":9},{"pride":0,"x":3,"y":9},{"pride":0,"x":4,"y":9},{"pride":0,"x":5,"y":9},{"pride":0,"x":6,"y":9},{"pride":0,"x":7,"y":9},{"pride":0,"x":8,"y":9},{"pride":0,"x":9,"y":9}]];
    result = [[{"pride":0,"x":0,"y":0},{"pride":0,"x":1,"y":0},{"pride":0,"x":2,"y":0},{"pride":1,"x":3,"y":0,"meshId":0},{"pride":1,"x":4,"y":0,"meshId":0},{"pride":1,"x":5,"y":0,"meshId":0},{"pride":0,"x":6,"y":0},{"pride":0,"x":7,"y":0},{"pride":0,"x":8,"y":0},{"pride":0,"x":9,"y":0}],[{"pride":0,"x":0,"y":1},{"pride":0,"x":1,"y":1},{"pride":1,"x":2,"y":1,"meshId":0},{"pride":1,"x":3,"y":1,"meshId":0},{"pride":0,"x":4,"y":1},{"pride":1,"x":5,"y":1,"meshId":0},{"pride":1,"x":6,"y":1,"meshId":0},{"pride":0,"x":7,"y":1},{"pride":0,"x":8,"y":1},{"pride":0,"x":9,"y":1}],[{"pride":1,"x":0,"y":2,"meshId":1},{"pride":1,"x":1,"y":2,"meshId":1},{"pride":0,"x":2,"y":2},{"pride":1,"x":3,"y":2,"meshId":0},{"pride":1,"x":4,"y":2,"meshId":0},{"pride":0,"x":5,"y":2},{"pride":1,"x":6,"y":2,"meshId":0},{"pride":0,"x":7,"y":2},{"pride":0,"x":8,"y":2},{"pride":0,"x":9,"y":2}],[{"pride":1,"x":0,"y":3,"meshId":1},{"pride":0,"x":1,"y":3},{"pride":0,"x":2,"y":3},{"pride":0,"x":3,"y":3},{"pride":0,"x":4,"y":3},{"pride":1,"x":5,"y":3,"meshId":0},{"pride":1,"x":6,"y":3,"meshId":0},{"pride":0,"x":7,"y":3},{"pride":0,"x":8,"y":3},{"pride":0,"x":9,"y":3}],[{"pride":1,"x":0,"y":4,"meshId":1},{"pride":1,"x":1,"y":4,"meshId":1},{"pride":0,"x":2,"y":4},{"pride":1,"x":3,"y":4,"meshId":0},{"pride":1,"x":4,"y":4,"meshId":0},{"pride":1,"x":5,"y":4,"meshId":0},{"pride":0,"x":6,"y":4},{"pride":0,"x":7,"y":4},{"pride":0,"x":8,"y":4},{"pride":0,"x":9,"y":4}],[{"pride":1,"x":0,"y":5,"meshId":1},{"pride":0,"x":1,"y":5},{"pride":1,"x":2,"y":5,"meshId":1},{"pride":1,"x":3,"y":5},{"pride":1,"x":4,"y":5,"meshId":0},{"pride":0,"x":5,"y":5},{"pride":0,"x":6,"y":5},{"pride":0,"x":7,"y":5},{"pride":0,"x":8,"y":5},{"pride":0,"x":9,"y":5}],[{"pride":1,"x":0,"y":6,"meshId":1},{"pride":1,"x":1,"y":6,"meshId":1},{"pride":1,"x":2,"y":6,"meshId":1},{"pride":1,"x":3,"y":6,"meshId":1},{"pride":0,"x":4,"y":6},{"pride":0,"x":5,"y":6},{"pride":0,"x":6,"y":6},{"pride":0,"x":7,"y":6},{"pride":0,"x":8,"y":6},{"pride":0,"x":9,"y":6}],[{"pride":0,"x":0,"y":7},{"pride":0,"x":1,"y":7},{"pride":0,"x":2,"y":7},{"pride":0,"x":3,"y":7},{"pride":0,"x":4,"y":7},{"pride":0,"x":5,"y":7},{"pride":0,"x":6,"y":7},{"pride":0,"x":7,"y":7},{"pride":0,"x":8,"y":7},{"pride":0,"x":9,"y":7}],[{"pride":0,"x":0,"y":8},{"pride":0,"x":1,"y":8},{"pride":0,"x":2,"y":8},{"pride":0,"x":3,"y":8},{"pride":0,"x":4,"y":8},{"pride":0,"x":5,"y":8},{"pride":0,"x":6,"y":8},{"pride":0,"x":7,"y":8},{"pride":0,"x":8,"y":8},{"pride":0,"x":9,"y":8}],[{"pride":0,"x":0,"y":9},{"pride":0,"x":1,"y":9},{"pride":0,"x":2,"y":9},{"pride":0,"x":3,"y":9},{"pride":0,"x":4,"y":9},{"pride":0,"x":5,"y":9},{"pride":0,"x":6,"y":9},{"pride":0,"x":7,"y":9},{"pride":0,"x":8,"y":9},{"pride":0,"x":9,"y":9}]];
    // result = [[{"pride":0,"x":0,"y":0},{"pride":0,"x":1,"y":0},{"pride":1,"x":2,"y":0},{"pride":1,"x":3,"y":0,"meshId":0},{"pride":0,"x":4,"y":0},{"pride":0,"x":5,"y":0},{"pride":0,"x":6,"y":0},{"pride":0,"x":7,"y":0},{"pride":0,"x":8,"y":0},{"pride":0,"x":9,"y":0}],[{"pride":1,"x":0,"y":1,"meshId":0},{"pride":1,"x":1,"y":1,"meshId":0},{"pride":0,"x":2,"y":1},{"pride":1,"x":3,"y":1,"meshId":0},{"pride":0,"x":4,"y":1},{"pride":0,"x":5,"y":1},{"pride":0,"x":6,"y":1},{"pride":0,"x":7,"y":1},{"pride":0,"x":8,"y":1},{"pride":0,"x":9,"y":1}],[{"pride":1,"x":0,"y":2,"meshId":0},{"pride":0,"x":1,"y":2},{"pride":1,"x":2,"y":2,"meshId":0},{"pride":1,"x":3,"y":2,"meshId":0},{"pride":0,"x":4,"y":2},{"pride":0,"x":5,"y":2},{"pride":0,"x":6,"y":2},{"pride":0,"x":7,"y":2},{"pride":0,"x":8,"y":2},{"pride":0,"x":9,"y":2}],[{"pride":1,"x":0,"y":3,"meshId":0},{"pride":1,"x":1,"y":3,"meshId":0},{"pride":0,"x":2,"y":3},{"pride":1,"x":3,"y":3,"meshId":0},{"pride":0,"x":4,"y":3},{"pride":0,"x":5,"y":3},{"pride":0,"x":6,"y":3},{"pride":0,"x":7,"y":3},{"pride":0,"x":8,"y":3},{"pride":0,"x":9,"y":3}],[{"pride":1,"x":0,"y":4,"meshId":0},{"pride":0,"x":1,"y":4},{"pride":1,"x":2,"y":4,"meshId":0},{"pride":1,"x":3,"y":4,"meshId":0},{"pride":0,"x":4,"y":4},{"pride":0,"x":5,"y":4},{"pride":0,"x":6,"y":4},{"pride":0,"x":7,"y":4},{"pride":0,"x":8,"y":4},{"pride":0,"x":9,"y":4}],[{"pride":1,"x":0,"y":5,"meshId":0},{"pride":1,"x":1,"y":5,"meshId":0},{"pride":1,"x":2,"y":5,"meshId":0},{"pride":1,"x":3,"y":5,"meshId":0},{"pride":0,"x":4,"y":5},{"pride":0,"x":5,"y":5},{"pride":0,"x":6,"y":5},{"pride":0,"x":7,"y":5},{"pride":0,"x":8,"y":5},{"pride":0,"x":9,"y":5}],[{"pride":0,"x":0,"y":6},{"pride":0,"x":1,"y":6},{"pride":0,"x":2,"y":6},{"pride":0,"x":3,"y":6},{"pride":0,"x":4,"y":6},{"pride":0,"x":5,"y":6},{"pride":0,"x":6,"y":6},{"pride":0,"x":7,"y":6},{"pride":0,"x":8,"y":6},{"pride":0,"x":9,"y":6}],[{"pride":0,"x":0,"y":7},{"pride":0,"x":1,"y":7},{"pride":0,"x":2,"y":7},{"pride":0,"x":3,"y":7},{"pride":0,"x":4,"y":7},{"pride":0,"x":5,"y":7},{"pride":0,"x":6,"y":7},{"pride":0,"x":7,"y":7},{"pride":0,"x":8,"y":7},{"pride":0,"x":9,"y":7}],[{"pride":0,"x":0,"y":8},{"pride":0,"x":1,"y":8},{"pride":0,"x":2,"y":8},{"pride":0,"x":3,"y":8},{"pride":0,"x":4,"y":8},{"pride":0,"x":5,"y":8},{"pride":0,"x":6,"y":8},{"pride":0,"x":7,"y":8},{"pride":0,"x":8,"y":8},{"pride":0,"x":9,"y":8}],[{"pride":0,"x":0,"y":9},{"pride":0,"x":1,"y":9},{"pride":0,"x":2,"y":9},{"pride":0,"x":3,"y":9},{"pride":0,"x":4,"y":9},{"pride":0,"x":5,"y":9},{"pride":0,"x":6,"y":9},{"pride":0,"x":7,"y":9},{"pride":0,"x":8,"y":9},{"pride":0,"x":9,"y":9}]];
    // result = [[{"pride":0,"x":0,"y":0},{"pride":0,"x":1,"y":0},{"pride":1,"x":2,"y":0,"meshId":0},{"pride":1,"x":3,"y":0,"meshId":0},{"pride":0,"x":4,"y":0},{"pride":0,"x":5,"y":0},{"pride":0,"x":6,"y":0},{"pride":0,"x":7,"y":0},{"pride":0,"x":8,"y":0},{"pride":0,"x":9,"y":0}],[{"pride":1,"x":0,"y":1,"meshId":1},{"pride":1,"x":1,"y":1,"meshId":1},{"pride":0,"x":2,"y":1},{"pride":1,"x":3,"y":1,"meshId":0},{"pride":0,"x":4,"y":1},{"pride":0,"x":5,"y":1},{"pride":0,"x":6,"y":1},{"pride":0,"x":7,"y":1},{"pride":0,"x":8,"y":1},{"pride":0,"x":9,"y":1}],[{"pride":1,"x":0,"y":2,"meshId":1},{"pride":0,"x":1,"y":2},{"pride":1,"x":2,"y":2,"meshId":0},{"pride":1,"x":3,"y":2,"meshId":0},{"pride":0,"x":4,"y":2},{"pride":0,"x":5,"y":2},{"pride":0,"x":6,"y":2},{"pride":0,"x":7,"y":2},{"pride":0,"x":8,"y":2},{"pride":0,"x":9,"y":2}],[{"pride":1,"x":0,"y":3,"meshId":1},{"pride":0,"x":1,"y":3},{"pride":0,"x":2,"y":3},{"pride":1,"x":3,"y":3,"meshId":0},{"pride":0,"x":4,"y":3},{"pride":0,"x":5,"y":3},{"pride":0,"x":6,"y":3},{"pride":0,"x":7,"y":3},{"pride":0,"x":8,"y":3},{"pride":0,"x":9,"y":3}],[{"pride":1,"x":0,"y":4,"meshId":1},{"pride":1,"x":1,"y":4,"meshId":1},{"pride":1,"x":2,"y":4,"meshId":1},{"pride":1,"x":3,"y":4},{"pride":0,"x":4,"y":4},{"pride":0,"x":5,"y":4},{"pride":0,"x":6,"y":4},{"pride":0,"x":7,"y":4},{"pride":0,"x":8,"y":4},{"pride":0,"x":9,"y":4}],[{"pride":0,"x":0,"y":5},{"pride":0,"x":1,"y":5},{"pride":0,"x":2,"y":5},{"pride":0,"x":3,"y":5},{"pride":0,"x":4,"y":5},{"pride":0,"x":5,"y":5},{"pride":0,"x":6,"y":5},{"pride":0,"x":7,"y":5},{"pride":0,"x":8,"y":5},{"pride":0,"x":9,"y":5}],[{"pride":0,"x":0,"y":6},{"pride":0,"x":1,"y":6},{"pride":0,"x":2,"y":6},{"pride":0,"x":3,"y":6},{"pride":0,"x":4,"y":6},{"pride":0,"x":5,"y":6},{"pride":0,"x":6,"y":6},{"pride":0,"x":7,"y":6},{"pride":0,"x":8,"y":6},{"pride":0,"x":9,"y":6}],[{"pride":0,"x":0,"y":7},{"pride":0,"x":1,"y":7},{"pride":0,"x":2,"y":7},{"pride":0,"x":3,"y":7},{"pride":0,"x":4,"y":7},{"pride":0,"x":5,"y":7},{"pride":0,"x":6,"y":7},{"pride":0,"x":7,"y":7},{"pride":0,"x":8,"y":7},{"pride":0,"x":9,"y":7}],[{"pride":0,"x":0,"y":8},{"pride":0,"x":1,"y":8},{"pride":0,"x":2,"y":8},{"pride":0,"x":3,"y":8},{"pride":0,"x":4,"y":8},{"pride":0,"x":5,"y":8},{"pride":0,"x":6,"y":8},{"pride":0,"x":7,"y":8},{"pride":0,"x":8,"y":8},{"pride":0,"x":9,"y":8}],[{"pride":0,"x":0,"y":9},{"pride":0,"x":1,"y":9},{"pride":0,"x":2,"y":9},{"pride":0,"x":3,"y":9},{"pride":0,"x":4,"y":9},{"pride":0,"x":5,"y":9},{"pride":0,"x":6,"y":9},{"pride":0,"x":7,"y":9},{"pride":0,"x":8,"y":9},{"pride":0,"x":9,"y":9}]];
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
  console.log(JSON.stringify(matrix));

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

  // Lines (canvas)
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

      line[0].processed = true;
      const result = [line[0]];
      const proc = (py, px, result) => {
        let nextSegs = line.filter((seg) => {
          if (!seg.processed) {
            if ((seg[0][0] === py && seg[0][1] === px) || (seg[1][0] === py && seg[1][1] === px)) {
              return true;
            }
          }
          return false;
        });
        // nextSegs = nextSegs.sort((a, b) => {
        //   let aSeg;
        //   if (a[0][0] === py && a[0][1] === px) {
        //     aSeg = [a[0], a[1]];
        //   } else if (a[1][0] === py && a[1][1] === px) {
        //     aSeg = [a[1], a[0]];
        //   }
        //
        //   let bSeg;
        //   if (b[0][0] === py && b[0][1] === px) {
        //     bSeg = [b[0], b[1]];
        //   } else if (b[1][0] === py && b[1][1] === px) {
        //     bSeg = [b[1], b[0]];
        //   }
        //
        //   if (aSeg[1][1] < bSeg[1][1]) {
        //     return 1;
        //   }
        //   if (aSeg[1][1] > bSeg[1][1]) {
        //     return -1;
        //   }
        //
        //   if (aSeg[1][0] < bSeg[1][0]) {
        //     return -1;
        //   }
        //   if (aSeg[1][0] > bSeg[1][0]) {
        //     return 1;
        //   }
        //   return 0;
        // });
        const nextSeg = nextSegs[0];

        if (nextSeg) {
          nextSeg.processed = true;
          let resultSeg;
          if (nextSeg[0][0] === py && nextSeg[0][1] === px) {
            resultSeg = [nextSeg[0], nextSeg[1]];
          } else if (nextSeg[1][0] === py && nextSeg[1][1] === px) {
            resultSeg = [nextSeg[1], nextSeg[0]];
          }
          result.push(resultSeg);
          proc(resultSeg[1][0], resultSeg[1][1], result);
        }
      };
      proc(line[0][1][0], line[0][1][1], result, -1);
      lines[key] = result;
      lines[key].crops = [];

      let checkCrops = true;
      while (checkCrops) {
        // Если есть остатки - делаем контур для вырезания
        const notProcessedSeg = line.find((i) => !i.processed);
        if (notProcessedSeg) {
          notProcessedSeg.processed = true;
          const cropResult = [notProcessedSeg];
          proc(notProcessedSeg[1][0], notProcessedSeg[1][1], cropResult, 1);
          lines[key].crops.push(cropResult);
        } else {
          checkCrops = false;
        }
      }
    });

    const paths = [];
    console.log(lines);
    Object.keys(lines).forEach((key) => {
      const line = lines[key];
      const style = `hsl(${uniqHue[String(key)]}, 50%, 50%)`;

      let path = '';
      line.forEach(([from, to], idx) => {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = style;
        ctx.lineWidth = (idx / line.length) * 20 + 1;
        ctx.moveTo(from[1] * pointSize, from[0] * pointSize);
        ctx.lineTo(to[1] * pointSize, to[0] * pointSize);
        ctx.stroke();

        if (idx === 0) {
          path += `M${from[1] * pointSize} ${from[0] * pointSize} `;
        } else if (idx === line.length - 1) {
          path += `L${from[1] * pointSize} ${from[0] * pointSize} `;
          path += `L${to[1] * pointSize} ${to[0] * pointSize} `;
          path += 'Z ';
        } else {
          path += `L${from[1] * pointSize} ${from[0] * pointSize} `;
        }
      });

      // console.log(line.crops);

      line.crops.forEach((cropLine) => {
        cropLine.reverse();
        cropLine.forEach(([from, to], idx) => {
          ctx.beginPath();
          ctx.strokeStyle = '#000';
          ctx.lineWidth = (idx / line.length) * 20 + 1;
          ctx.moveTo(from[1] * pointSize, from[0] * pointSize);
          ctx.lineTo(to[1] * pointSize, to[0] * pointSize);
          ctx.stroke();

          if (idx === 0) {
            path += `M${from[1] * pointSize} ${from[0] * pointSize} `;
          } else if (idx === cropLine.length - 1) {
            path += `L${from[1] * pointSize} ${from[0] * pointSize} `;
            // path += `L${to[1] * pointSize} ${to[0] * pointSize} `;
            path += 'Z ';
          } else {
            path += `L${from[1] * pointSize} ${from[0] * pointSize} `;
          }
        });
      });

      paths.push(`<path d="${path}" fill='${style}'/>`);
    });

    document.querySelector('#svg1').innerHTML = paths.join('\n');
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
