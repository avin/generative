import random from 'canvas-sketch-util/random';
import { lerp } from 'canvas-sketch-util/math';
import { circleTree, rope } from '@/utils/shape';

const seed = random.getRandomSeed();
random.setSeed(seed);

const settings = {
  dimensions: [1024, 1024],
  animate: true,
};

const sketch = async ({ width, height }) => {
  const margin = width * 0.1;

  const sx = v => lerp(margin, width - margin, v);
  const sy = v => lerp(margin, height - margin, v);

  let prevTime = -10;

  return ({ context, width, height, time, playhead }) => {
    if (time - prevTime < 2) {
      return;
    }
    prevTime = time;

    const tree = circleTree({
      x: 0.5,
      y: 1,
      r: 0.025,
      angle: -Math.PI / 2,
      tension: 1.8,
      newBranchTension: 1.5,
      limitPolygon: [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ],
      maxGenerations: 40,
      reduceRadiusFactor: 0.98,
      maxBends: 10,
      maxTriesFindNewPoint: 3,
      subTreesFromNode: 3,
      reduceRadiusOnFail: false,
    });

    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);

    context.strokeStyle = 'hsl(0, 0%, 20%)';

    tree.forEach((branch, branchIdx) => {
      const branchCoords = branch.map(p => [p.x, p.y, p.r]);

      branchCoords[branchCoords.length - 1][2] = 0.0;

      const ropeCoords = rope(branchCoords, branch);

      if (branch[0].generation === 1) {
        ropeCoords[0][1] = 1;
        ropeCoords[ropeCoords.length - 1][1] = 1;
      }

      context.fillStyle = `hsl(${branch[0].generation * 20}, 50%, 70%)`;

      context.beginPath();
      ropeCoords.forEach(([x, y], idx) => {
        if (idx === 0) {
          context.moveTo(sx(x), sy(y));
        } else {
          context.lineTo(sx(x), sy(y));
        }
      });
      context.closePath();
      context.fill();
    });

    context.fillStyle = 'hsl(0, 80%, 50%)';
  };
};

export default { sketch, settings };
