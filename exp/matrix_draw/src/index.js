import get from 'lodash/get';

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
        // pride: Math.random() > 0.5 ? 1 : 0, // pride = 1 - закрашенная клетка
        pride: 0,
        x,
        y,
      };
    }
  }
  // prettier-ignore
  {
    // result = [[{"pride":1,"x":0,"y":0,"meshId":0},{"pride":1,"x":1,"y":0,"meshId":0},{"pride":1,"x":2,"y":0,"meshId":0},{"pride":0,"x":3,"y":0},{"pride":0,"x":4,"y":0},{"pride":0,"x":5,"y":0},{"pride":0,"x":6,"y":0},{"pride":0,"x":7,"y":0},{"pride":0,"x":8,"y":0},{"pride":0,"x":9,"y":0}],[{"pride":1,"x":0,"y":1,"meshId":0},{"pride":0,"x":1,"y":1},{"pride":1,"x":2,"y":1,"meshId":0},{"pride":1,"x":3,"y":1,"meshId":0},{"pride":0,"x":4,"y":1},{"pride":0,"x":5,"y":1},{"pride":0,"x":6,"y":1},{"pride":0,"x":7,"y":1},{"pride":0,"x":8,"y":1},{"pride":0,"x":9,"y":1}],[{"pride":1,"x":0,"y":2,"meshId":0},{"pride":1,"x":1,"y":2,"meshId":0},{"pride":0,"x":2,"y":2},{"pride":1,"x":3,"y":2},{"pride":0,"x":4,"y":2},{"pride":0,"x":5,"y":2},{"pride":0,"x":6,"y":2},{"pride":0,"x":7,"y":2},{"pride":0,"x":8,"y":2},{"pride":0,"x":9,"y":2}],[{"pride":0,"x":0,"y":3},{"pride":0,"x":1,"y":3},{"pride":1,"x":2,"y":3,"meshId":1},{"pride":1,"x":3,"y":3,"meshId":1},{"pride":0,"x":4,"y":3},{"pride":0,"x":5,"y":3},{"pride":0,"x":6,"y":3},{"pride":0,"x":7,"y":3},{"pride":0,"x":8,"y":3},{"pride":0,"x":9,"y":3}],[{"pride":0,"x":0,"y":4},{"pride":0,"x":1,"y":4},{"pride":0,"x":2,"y":4},{"pride":0,"x":3,"y":4},{"pride":0,"x":4,"y":4},{"pride":0,"x":5,"y":4},{"pride":0,"x":6,"y":4},{"pride":0,"x":7,"y":4},{"pride":0,"x":8,"y":4},{"pride":0,"x":9,"y":4}],[{"pride":0,"x":0,"y":5},{"pride":0,"x":1,"y":5},{"pride":0,"x":2,"y":5},{"pride":0,"x":3,"y":5},{"pride":0,"x":4,"y":5},{"pride":0,"x":5,"y":5},{"pride":0,"x":6,"y":5},{"pride":0,"x":7,"y":5},{"pride":0,"x":8,"y":5},{"pride":0,"x":9,"y":5}],[{"pride":0,"x":0,"y":6},{"pride":0,"x":1,"y":6},{"pride":0,"x":2,"y":6},{"pride":0,"x":3,"y":6},{"pride":0,"x":4,"y":6},{"pride":0,"x":5,"y":6},{"pride":0,"x":6,"y":6},{"pride":0,"x":7,"y":6},{"pride":0,"x":8,"y":6},{"pride":0,"x":9,"y":6}],[{"pride":0,"x":0,"y":7},{"pride":0,"x":1,"y":7},{"pride":0,"x":2,"y":7},{"pride":0,"x":3,"y":7},{"pride":0,"x":4,"y":7},{"pride":0,"x":5,"y":7},{"pride":0,"x":6,"y":7},{"pride":0,"x":7,"y":7},{"pride":0,"x":8,"y":7},{"pride":0,"x":9,"y":7}],[{"pride":0,"x":0,"y":8},{"pride":0,"x":1,"y":8},{"pride":0,"x":2,"y":8},{"pride":0,"x":3,"y":8},{"pride":0,"x":4,"y":8},{"pride":0,"x":5,"y":8},{"pride":0,"x":6,"y":8},{"pride":0,"x":7,"y":8},{"pride":0,"x":8,"y":8},{"pride":0,"x":9,"y":8}],[{"pride":0,"x":0,"y":9},{"pride":0,"x":1,"y":9},{"pride":0,"x":2,"y":9},{"pride":0,"x":3,"y":9},{"pride":0,"x":4,"y":9},{"pride":0,"x":5,"y":9},{"pride":0,"x":6,"y":9},{"pride":0,"x":7,"y":9},{"pride":0,"x":8,"y":9},{"pride":0,"x":9,"y":9}]];
    // result = [[{"pride":0,"x":0,"y":0},{"pride":0,"x":1,"y":0},{"pride":0,"x":2,"y":0},{"pride":1,"x":3,"y":0,"meshId":0},{"pride":1,"x":4,"y":0,"meshId":0},{"pride":1,"x":5,"y":0,"meshId":0},{"pride":0,"x":6,"y":0},{"pride":0,"x":7,"y":0},{"pride":0,"x":8,"y":0},{"pride":0,"x":9,"y":0}],[{"pride":0,"x":0,"y":1},{"pride":0,"x":1,"y":1},{"pride":1,"x":2,"y":1,"meshId":0},{"pride":1,"x":3,"y":1,"meshId":0},{"pride":0,"x":4,"y":1},{"pride":1,"x":5,"y":1,"meshId":0},{"pride":1,"x":6,"y":1,"meshId":0},{"pride":0,"x":7,"y":1},{"pride":0,"x":8,"y":1},{"pride":0,"x":9,"y":1}],[{"pride":1,"x":0,"y":2,"meshId":1},{"pride":1,"x":1,"y":2,"meshId":1},{"pride":0,"x":2,"y":2},{"pride":1,"x":3,"y":2,"meshId":0},{"pride":1,"x":4,"y":2,"meshId":0},{"pride":0,"x":5,"y":2},{"pride":1,"x":6,"y":2,"meshId":0},{"pride":0,"x":7,"y":2},{"pride":0,"x":8,"y":2},{"pride":0,"x":9,"y":2}],[{"pride":1,"x":0,"y":3,"meshId":1},{"pride":0,"x":1,"y":3},{"pride":0,"x":2,"y":3},{"pride":0,"x":3,"y":3},{"pride":0,"x":4,"y":3},{"pride":1,"x":5,"y":3,"meshId":0},{"pride":1,"x":6,"y":3,"meshId":0},{"pride":0,"x":7,"y":3},{"pride":0,"x":8,"y":3},{"pride":0,"x":9,"y":3}],[{"pride":1,"x":0,"y":4,"meshId":1},{"pride":1,"x":1,"y":4,"meshId":1},{"pride":0,"x":2,"y":4},{"pride":1,"x":3,"y":4,"meshId":0},{"pride":1,"x":4,"y":4,"meshId":0},{"pride":1,"x":5,"y":4,"meshId":0},{"pride":0,"x":6,"y":4},{"pride":0,"x":7,"y":4},{"pride":0,"x":8,"y":4},{"pride":0,"x":9,"y":4}],[{"pride":1,"x":0,"y":5,"meshId":1},{"pride":0,"x":1,"y":5},{"pride":1,"x":2,"y":5,"meshId":1},{"pride":1,"x":3,"y":5},{"pride":1,"x":4,"y":5,"meshId":0},{"pride":0,"x":5,"y":5},{"pride":0,"x":6,"y":5},{"pride":0,"x":7,"y":5},{"pride":0,"x":8,"y":5},{"pride":0,"x":9,"y":5}],[{"pride":1,"x":0,"y":6,"meshId":1},{"pride":1,"x":1,"y":6,"meshId":1},{"pride":1,"x":2,"y":6,"meshId":1},{"pride":1,"x":3,"y":6,"meshId":1},{"pride":0,"x":4,"y":6},{"pride":0,"x":5,"y":6},{"pride":0,"x":6,"y":6},{"pride":0,"x":7,"y":6},{"pride":0,"x":8,"y":6},{"pride":0,"x":9,"y":6}],[{"pride":0,"x":0,"y":7},{"pride":0,"x":1,"y":7},{"pride":0,"x":2,"y":7},{"pride":0,"x":3,"y":7},{"pride":0,"x":4,"y":7},{"pride":0,"x":5,"y":7},{"pride":0,"x":6,"y":7},{"pride":0,"x":7,"y":7},{"pride":0,"x":8,"y":7},{"pride":0,"x":9,"y":7}],[{"pride":0,"x":0,"y":8},{"pride":0,"x":1,"y":8},{"pride":0,"x":2,"y":8},{"pride":0,"x":3,"y":8},{"pride":0,"x":4,"y":8},{"pride":0,"x":5,"y":8},{"pride":0,"x":6,"y":8},{"pride":0,"x":7,"y":8},{"pride":0,"x":8,"y":8},{"pride":0,"x":9,"y":8}],[{"pride":0,"x":0,"y":9},{"pride":0,"x":1,"y":9},{"pride":0,"x":2,"y":9},{"pride":0,"x":3,"y":9},{"pride":0,"x":4,"y":9},{"pride":0,"x":5,"y":9},{"pride":0,"x":6,"y":9},{"pride":0,"x":7,"y":9},{"pride":0,"x":8,"y":9},{"pride":0,"x":9,"y":9}]];
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
  // console.log(JSON.stringify(matrix));

  let lastUniqId = 0;
  const getUniqId = () => {
    uniqHue[lastUniqId] = uniqHue[lastUniqId] === undefined ? Math.floor(Math.random() * 360) : uniqHue[lastUniqId];

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
            lines[cell.meshId].push({
              p1: { y: y + contour[idx][0][0], x: x + contour[idx][0][1] },
              p2: { y: y + contour[idx][1][0], x: x + contour[idx][1][1] },
              cell,
            });
          }
        });
      }
    }

    Object.keys(lines).forEach((key) => {
      const line = lines[key];

      const proc = (py, px, result, oCell) => {
        const nextSegs = line
          .filter((seg) => {
            // console.log(seg);
            if (!seg.processed) {
              if ((seg.p1.y === py && seg.p1.x === px) || (seg.p2.y === py && seg.p2.x === px)) {
                return true;
              }
            }
            return false;
          })
          .sort((a, b) => {
            // В приоритете соседняя линия того же квадратика
            if (a.cell === oCell) {
              return -1;
            }
            return 1;
          });

        const nextSeg = nextSegs[0];

        if (nextSeg) {
          nextSeg.processed = true;
          let resultSeg;
          if (nextSeg.p1.y === py && nextSeg.p1.x === px) {
            resultSeg = { p1: nextSeg.p1, p2: nextSeg.p2 };
          } else if (nextSeg.p2.y === py && nextSeg.p2.x === px) {
            resultSeg = { p1: nextSeg.p2, p2: nextSeg.p1 };
          }
          result.push(resultSeg);
          proc(resultSeg.p2.y, resultSeg.p2.x, result, nextSeg.cell);
        }
      };
      line[0].processed = true;
      const result = [line[0]];
      proc(line[0].p2.y, line[0].p2.x, result, line[0].cell);
      lines[key] = result;
      lines[key].crops = [];

      let checkCrops = true;
      while (checkCrops) {
        // Если есть остатки - делаем контур для вырезания
        const notProcessedSeg = line.find((i) => !i.processed);
        if (notProcessedSeg) {
          notProcessedSeg.processed = true;
          const cropResult = [notProcessedSeg];
          proc(notProcessedSeg.p2.y, notProcessedSeg.p2.x, cropResult, notProcessedSeg.cell);
          cropResult.reverse();
          cropResult.map((seg) => {
            const op2 = seg.p2;
            seg.p2 = seg.p1;
            seg.p1 = op2;
            return seg;
          });
          lines[key].crops.push(cropResult);
        } else {
          checkCrops = false;
        }
      }
    });

    // Draw canvas counters
    Object.keys(lines).forEach((key) => {
      // const line = lines[key];
      const style = `hsl(${uniqHue[String(key)]}, 50%, 50%)`;

      for (const [lineIdx, line] of [lines[key], ...lines[key].crops].entries()) {
        for (const [segIdx, seg] of line.entries()) {
          const { p1: from, p2: to } = seg;

          ctx.beginPath();

          if (lineIdx === 0) {
            ctx.lineWidth = 1;
            ctx.strokeStyle = style;
          } else {
            ctx.strokeStyle = '#000';
            ctx.lineWidth = (segIdx / line.length) * 10 + 1;
          }

          ctx.lineWidth = (segIdx / line.length) * 10 + 1;
          ctx.moveTo(from.x * pointSize, from.y * pointSize);
          ctx.lineTo(to.x * pointSize, to.y * pointSize);
          ctx.stroke();
        }
      }
    });

    const getDir = (seg) => {
      if (seg.p1.x === seg.p2.x) {
        if (seg.p1.y > seg.p2.y) {
          return 'sn';
        }
        return 'ns';
      }
      if (seg.p1.y === seg.p2.y) {
        if (seg.p1.x > seg.p2.x) {
          return 'ew';
        }
        return 'we';
      }
    };

    const cr = 5;
    const getSubPath = (seg, prevSeg, roundInnerCorners) => {
      const { p1: p } = seg;

      const segDir = getDir(seg);
      const prevSegDir = getDir(prevSeg);

      let path = '';
      if (prevSegDir === 'we' && segDir === 'ns') {
        path += `L${p.x * pointSize - cr} ${p.y * pointSize} `;
        path += `Q${p.x * pointSize} ${p.y * pointSize} ${p.x * pointSize} ${p.y * pointSize + cr}`;
      } else if (prevSegDir === 'ns' && segDir === 'ew') {
        path += `L${p.x * pointSize} ${p.y * pointSize - cr} `;
        path += `Q${p.x * pointSize} ${p.y * pointSize} ${p.x * pointSize - cr} ${p.y * pointSize}`;
      } else if (prevSegDir === 'ew' && segDir === 'sn') {
        path += `L${p.x * pointSize + cr} ${p.y * pointSize} `;
        path += `Q${p.x * pointSize} ${p.y * pointSize} ${p.x * pointSize} ${p.y * pointSize - cr}`;
      } else if (prevSegDir === 'sn' && segDir === 'we') {
        path += `L${p.x * pointSize} ${p.y * pointSize + cr} `;
        path += `Q${p.x * pointSize} ${p.y * pointSize} ${p.x * pointSize + cr} ${p.y * pointSize}`;
      } else if (roundInnerCorners && prevSegDir === 'sn' && segDir === 'ew') {
        path += `L${p.x * pointSize} ${p.y * pointSize + cr} `;
        path += `Q${p.x * pointSize} ${p.y * pointSize} ${p.x * pointSize - cr} ${p.y * pointSize}`;
      } else if (roundInnerCorners && prevSegDir === 'ew' && segDir === 'ns') {
        path += `L${p.x * pointSize + cr} ${p.y * pointSize} `;
        path += `Q${p.x * pointSize} ${p.y * pointSize} ${p.x * pointSize} ${p.y * pointSize + cr}`;
      } else if (roundInnerCorners && prevSegDir === 'ns' && segDir === 'we') {
        path += `L${p.x * pointSize} ${p.y * pointSize - cr} `;
        path += `Q${p.x * pointSize} ${p.y * pointSize} ${p.x * pointSize + cr} ${p.y * pointSize}`;
      } else if (roundInnerCorners && prevSegDir === 'we' && segDir === 'sn') {
        path += `L${p.x * pointSize - cr} ${p.y * pointSize} `;
        path += `Q${p.x * pointSize} ${p.y * pointSize} ${p.x * pointSize} ${p.y * pointSize - cr}`;
      } else {
        path += `L${p.x * pointSize} ${p.y * pointSize} `;
      }
      return path;
    };

    [
      { svgSelector: '#svg1', roundInnerCorners: true },
      { svgSelector: '#svg2', roundInnerCorners: false },
    ].forEach(({ svgSelector, roundInnerCorners }) => {
      // Generate SVG
      const paths = [];

      Object.keys(lines).forEach((key) => {
        const style = `hsl(${uniqHue[String(key)]}, 50%, 50%)`;

        let path = '';
        for (const [lineIdx, line] of [lines[key], ...lines[key].crops].entries()) {
          for (const [segIdx, seg] of line.entries()) {
            const { p1: from } = seg;
            const prevSeg = line[segIdx - 1] || line[line.length - 1];
            const nextSeg = line[segIdx + 1] || line[0];

            const segDir = getDir(seg);
            const prevSegDir = getDir(prevSeg);

            if (segIdx === 0) {
              if (lineIdx === 0) {
                path += `M${from.x * pointSize + cr} ${from.y * pointSize} `;
              } else {
                path += `M${from.x * pointSize} ${from.y * pointSize + cr} `;
              }
            } else if (segIdx === line.length - 1) {
              path += getSubPath(seg, prevSeg, roundInnerCorners);
              path += getSubPath(nextSeg, seg, roundInnerCorners);
              path += 'Z ';
            } else if (prevSegDir !== segDir) {
              path += getSubPath(seg, prevSeg, roundInnerCorners);
            }
          }
        }
        paths.push(`<path d="${path}" fill='${style}'/>`);
      });

      document.querySelector(svgSelector).innerHTML = paths.join('\n');
    });
  }
};

drawAll();

let drawMode = -1;
let prevX;
let prevY;
let prevDrawMode;
const updMatrix = (y, x) => {
  if (prevX === x && prevY === y && drawMode === prevDrawMode) {
    return;
  }
  prevX = x;
  prevY = y;
  prevDrawMode = drawMode;

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

['#canvas1', '#canvas2', '#canvas3', '#svg1', '#svg2'].forEach((selector) => {
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
