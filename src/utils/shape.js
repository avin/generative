import random from 'canvas-sketch-util/random';
import pointInsidePolygon from 'point-in-polygon';
import chaikinSmooth from 'chaikin-smooth';
import { circeIntersectWithCircles, getPointCoordsByAngleAndDistance } from './geometry';

/**
 * Get rope shape contour coordinates
 * @param coords [[x,y,r]...]
 */
export function rope(coords) {
  const lineContour1 = [];
  const lineContour2 = [];

  coords.forEach((p, idx) => {
    let pB;
    if (idx === 0) {
      pB = coords[idx + 1];
    } else {
      pB = coords[idx - 1];
    }

    let angle;

    if (idx === 0) {
      angle = Math.atan2(p[1] - pB[1], p[0] - pB[0]); // radians
    } else {
      angle = Math.atan2(pB[1] - p[1], pB[0] - p[0]); // radians
    }

    [-(Math.PI / 2), -(Math.PI / 2) * 3].forEach((rotate, idx) => {
      const xC = p[2] * Math.cos(angle + rotate);
      const yC = p[2] * Math.sin(angle + rotate);

      if (idx % 2) {
        lineContour1.push([xC + p[0], yC + p[1]]);
      } else {
        lineContour2.push([xC + p[0], yC + p[1]]);
      }
    });
  });

  return [...lineContour1, ...lineContour2.reverse()];
}

export function smoothPath(path, level = 0) {
  path = chaikinSmooth(path);
  if (level === 0) {
    return path;
  }
  return smoothPath(path, level - 1);
}

export function circleTree({
  x = 0,
  y = 0,
  r = 0.5,
  angle = -Math.PI / 2,

  maxTriesFindNewPoint = 3,
  tension = 2,
  newBranchTension = 2,
  maxGenerations = 8,
  minRadius = 0.005,
  reduceRadiusFactor = 0.95,
  maxBends = 100,
  subTreesFromNode = 5,
  limitPolygon,
  reduceRadiusOnFail = false,
  newPointSearchAngel = Math.PI / 6,
  newBranchSearchAngel = Math.PI / 3,
} = {}) {
  let allPoints = [];
  const branches = [];
  const makeBranch = ({ x, y, r, angle }, beforePoint = null, generation = 1) => {
    if (generation > maxGenerations) {
      return;
    }

    let branch = [];
    for (let i = 0; i < maxBends; i += 1) {
      if (i === 0) {
        const point = {
          x,
          y,
          r,
          isRoot: true,
          generation,
        };
        branch.push(point);
        allPoints.push(point);
      } else {
        const bPoint = branch[i - 1];

        let tries = 0;
        let foundPoint = false;
        let point;
        while (!foundPoint && tries < maxTriesFindNewPoint && bPoint) {
          tries += 1;

          const rad = random.range(angle - newPointSearchAngel, angle + newPointSearchAngel);
          const coords = getPointCoordsByAngleAndDistance(rad, bPoint.r * tension, [bPoint.x, bPoint.y]);
          point = {
            x: coords[0],
            y: coords[1],
            r: bPoint.r * reduceRadiusFactor - ((1 - 1 / tries) * bPoint.r) / 5,
            generation,
            angle: rad,
          };

          if (limitPolygon && !pointInsidePolygon([point.x, point.y], limitPolygon)) {
            // eslint-disable-next-line no-continue
            continue;
          }

          // Stop if radius too small
          if (point.r < minRadius) {
            break;
          }

          // eslint-disable-next-line no-loop-func
          const comparingPoints = allPoints.filter(p => {
            return p !== branch[branch.length - 1];
          });

          if (!circeIntersectWithCircles(point, comparingPoints)) {
            branch.push(point);
            allPoints.push(point);
            foundPoint = true;
          }
        }

        // If could not find optimal position - stop
        if (!foundPoint) {
          break;
        }

        // From N-th node create sub branches
        if (i > subTreesFromNode) {
          tries = 0;
          foundPoint = false;
          while (!foundPoint && tries < maxTriesFindNewPoint && bPoint) {
            tries += 1;

            const rad = random.range(angle - newBranchSearchAngel, angle + newBranchSearchAngel);
            const coords = getPointCoordsByAngleAndDistance(rad, bPoint.r * newBranchTension, [bPoint.x, bPoint.y]);
            point = {
              x: coords[0],
              y: coords[1],
              r: bPoint.r * reduceRadiusFactor - (reduceRadiusOnFail ? ((1 - 1 / tries) * bPoint.r) / 2 : 0),
            };

            // eslint-disable-next-line no-loop-func
            const comparingPoints = allPoints.filter(p => {
              return p !== branch[branch.length - 1] && p !== branch[branch.length - 2];
            });

            if (!circeIntersectWithCircles(point, comparingPoints)) {
              foundPoint = true;
              makeBranch(
                { ...point, r: point.r / 1, angle: rad },
                { ...branch[branch.length - 2], generation: generation + 1 },
                generation + 1,
              );
            }
          }
        }
      }
    }
    if (branch.length > 1) {
      if (beforePoint) {
        branch = [beforePoint, ...branch];
      }
      branches.push(branch);
    } else {
      allPoints = allPoints.slice(0, -1);
    }
  };

  makeBranch({
    x,
    y,
    r,
    angle,
  });

  return branches;
}
