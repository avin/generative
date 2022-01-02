import canvasSketch from 'canvas-sketch';
import random from 'canvas-sketch-util/random';
import set from 'lodash/set';
import get from 'lodash/get';
import { playSound } from './sound';

const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [600, 600],
  animate: true,
};

const colors = ['#556270', '#4ecdc4', '#c7f464', '#ff6b6b', '#c44d58'];

const contour = [
  [
    [0, 0],
    [1, 0],
  ],
  [
    [1, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [0, 1],
  ],
  [
    [0, 1],
    [1, 1],
  ],
];

const sketch = ({ width, height, canvas }) => {
  const cellSize = width * 0.05;

  let score = 0;
  let gameOver = true;
  let gameOverTime = -1;
  let globalTime = 0;
  let highlightLines = [];

  const matrix = [];
  const maxY = Math.floor(width / cellSize);
  const maxX = Math.floor(height / cellSize);

  const reset = () => {
    score = 0;
    for (let y = 0; y < maxY; y += 1) {
      for (let x = 0; x < maxX; x += 1) {
        set(matrix, [y, x], {
          x,
          y,
          pixelX: x * cellSize,
          pixelY: y * cellSize,
          pride: random.rangeFloor(0, 4),
        });
      }
    }
  };

  const findNeighbors = (cell, pride, expectCells = []) => {
    expectCells.push(cell);

    for (const offset of [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ]) {
      const neighborCoord = { x: cell.x + offset[0], y: cell.y + offset[1] };

      if (!expectCells.find((i) => i.x === neighborCoord.x && i.y === neighborCoord.y)) {
        const neighborCell = get(matrix, [neighborCoord.y, neighborCoord.x]);

        if (neighborCell && neighborCell.pride === pride) {
          const pride = neighborCell.pride;
          findNeighbors(neighborCell, pride, expectCells);
        }
      }
    }
  };

  const findAvailableMove = () => {
    let found = false;
    for (let y = 0; y < maxY; y += 1) {
      if (found) {
        break;
      }
      for (let x = 0; x < maxX; x += 1) {
        const cell = matrix[y][x];
        if (cell.pride !== undefined) {
          const foundNeighbors = [];
          findNeighbors(cell, cell.pride, foundNeighbors);
          if (foundNeighbors.length > 1) {
            found = true;
            break;
          }
        }
      }
    }
    return found;
  };

  const cleanCells = (cells) => {
    highlightLines = [];
    score += cells.length ** 2;

    for (const cell of cells) {
      cell.pride = undefined;
    }

    // Compress Y
    for (let x = 0; x < maxX; x += 1) {
      let column = [];
      for (let y = 0; y < maxY; y += 1) {
        column.push(matrix[y][x]);
      }
      column = column.sort((cell) => (cell.pride === undefined ? -1 : 1));

      column.forEach((cell, y) => {
        cell.y = y;
        matrix[y][x] = cell;
      });
    }

    // Compress X (by checking last row only)
    const emptyXes = [];
    matrix[maxY - 1].forEach((cell, x) => {
      if (cell.pride === undefined) {
        emptyXes.push(x);
      }
    });
    for (let y = 0; y < maxY; y += 1) {
      let row = matrix[y];
      row = row.sort((cell) => (emptyXes.includes(cell.x) ? -1 : 1));
      row = row.map((cell, idx) => {
        cell.x = idx;
        return cell;
      });
      matrix[y] = row;
    }

    // Move to left side
    for (let y = 0; y < maxY; y += 1) {
      const row = matrix[y];
      for (let x = 0; x < maxX; x += 1) {
        const cell = row[x];
        cell.x -= emptyXes.length;
        if (cell.x < 0) {
          cell.x = maxX + cell.x;
        }
      }
      matrix[y] = row.sort((a, b) => a.x - b.x);
    }

    if (!findAvailableMove()) {
      gameOver = true;
      gameOverTime = globalTime;
    }
  };

  canvas.addEventListener('click', (e) => {
    if (gameOver) {
      // Delay to prevent miss click
      if (globalTime - gameOverTime > 1) {
        reset();
        gameOver = false;
        playSound(200, 'sine', 0.9);
      }
      return;
    }
    const rect = e.target.getBoundingClientRect();
    const kX = rect.width / width;
    const kY = rect.height / height;
    const x = Math.floor((e.clientX - rect.left) / (cellSize * kX));
    const y = Math.floor((e.clientY - rect.top) / (cellSize * kY));

    const cell = get(matrix, [y, x]);

    if (cell && cell.pride !== undefined) {
      const pride = cell.pride;
      const foundCells = [];
      findNeighbors(cell, pride, foundCells);

      if (foundCells.length > 1) {
        playSound(349.2 + foundCells.length * 50, 'sine', 0.12);

        cleanCells(foundCells);

        canvas.dispatchEvent(new Event('mousemove', e));
      }
    }
  });

  let prevMouseOverX;
  let prevMouseOverY;
  canvas.addEventListener('mousemove', (e) => {
    if (gameOver) {
      return;
    }
    const rect = e.target.getBoundingClientRect();
    const kX = rect.width / width;
    const kY = rect.height / height;
    const x = Math.floor((e.clientX - rect.left) / (cellSize * kX));
    const y = Math.floor((e.clientY - rect.top) / (cellSize * kY));

    if (prevMouseOverX === x && prevMouseOverY === y) {
      return;
    }

    prevMouseOverX = x;
    prevMouseOverY = y;

    highlightLines = [];
    // Clean highlight
    for (let y = 0; y < maxY; y += 1) {
      for (let x = 0; x < maxX; x += 1) {
        matrix[y][x].highlight = false;
      }
    }

    const cell = get(matrix, [y, x]);

    if (cell && cell.pride !== undefined) {
      const pride = cell.pride;
      const foundCells = [];
      findNeighbors(cell, pride, foundCells);

      if (foundCells.length > 1) {
        foundCells.forEach((cell) => {
          cell.highlight = true;
        });
      }
    }

    for (let y = 0; y < maxY; y += 1) {
      for (let x = 0; x < maxX; x += 1) {
        const cell = matrix[y][x];
        if (cell.highlight) {
          for (const [b, e] of contour) {
            const line = [
              [cell.x + b[0], cell.y + b[1]],
              [cell.x + e[0], cell.y + e[1]],
            ];
            const sameLineIndex = highlightLines.findIndex((hl) => {
              return (
                hl[0][0] === line[0][0] && hl[0][1] === line[0][1] && hl[1][0] === line[1][0] && hl[1][1] === line[1][1]
              );
            });
            if (sameLineIndex === -1) {
              highlightLines.push(line);
            } else {
              highlightLines = highlightLines.filter((_, idx) => idx !== sameLineIndex);
            }
          }
        }
      }
    }
  });

  return ({ context, width, height, time }) => {
    globalTime = time;
    context.fillStyle = 'hsla(0, 0%, 98%, 1)';
    context.fillRect(0, 0, width, height);

    for (let y = 0; y < matrix.length; y += 1) {
      const row = matrix[y];
      for (let x = 0; x < row.length; x += 1) {
        const cell = row[x];

        // Move cells Y
        if (cell.pixelY < cell.y * cellSize) {
          cell.pixelY += Math.sqrt(cell.y * cellSize - cell.pixelY);
        } else {
          cell.pixelY = cell.y * cellSize;
        }

        // Move cells X
        if (cell.pixelX > cell.x * cellSize) {
          cell.pixelX -= Math.sqrt(cell.pixelX - cell.x * cellSize);
        } else {
          cell.pixelX = cell.x * cellSize;
        }

        // Draw cells
        const color = colors[cell.pride];
        if (color) {
          context.fillStyle = colors[cell.pride];
          context.fillRect(cell.pixelX, cell.pixelY, cellSize + 0.5, cellSize + 1);
        }
      }
    }

    context.lineWidth = 1.5;
    context.lineCap = 'butt';
    context.strokeStyle = 'hsla(0,0%,0%, 0.5)';

    highlightLines.forEach((hl) => {
      context.beginPath();
      context.moveTo(hl[0][0] * cellSize, hl[0][1] * cellSize);
      context.lineTo(hl[1][0] * cellSize, hl[1][1] * cellSize);
      context.stroke();
    });

    if (gameOver) {
      context.save();
      context.translate(width / 2, height / 2);
      context.rotate(Math.cos(time * 2) / 10);
      context.scale(Math.cos(time * 4) / 8 + 1, Math.cos(time * 4) / 8 + 1);
      const fontSize = 80;
      context.font = `bold ${fontSize}px Arial`;
      context.textAlign = 'center';
      context.shadowBlur = 6;
      context.shadowColor = 'hsl(0, 0%, 10%)';

      const text = score === 0 ? 'Pixel Mania' : 'Game Over!';
      context.fillStyle = 'rgba(255,0,0,0.4)';
      context.fillText(text, Math.cos(time * 4) * 5, 0);

      context.fillStyle = 'rgba(0,255,255,0.4)';
      context.fillText(text, Math.sin(time * 4) * 5, 0);

      context.fillStyle = 'hsl(0, 0%, 100%)';
      context.fillText(text, 0, 0);

      context.fillStyle = 'hsl(0, 0%, 97.5%)';

      if (score) {
        context.font = `bold ${fontSize - 20}px Arial`;
        context.fillText(`Score: ${score}`, 0, fontSize - 10);
      } else {
        context.font = `bold ${fontSize - 30}px Arial`;
        context.fillText(`Click to start!`, 0, fontSize - 20);
      }

      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
