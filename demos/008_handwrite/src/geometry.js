/**
 *
 * @param angle (RADIANS)
 * @param distance
 * @param initPoint
 * @returns {number[]}
 */
export function getPointCoordsByAngleAndDistance(angle, distance, initPoint = [0, 0]) {
  const xC = distance * Math.cos(angle);
  const yC = distance * Math.sin(angle);
  return [initPoint[0] + xC, initPoint[1] + yC];
}

/**
 * Determine if circle is fully places in another one
 * @param c1
 * @param c2
 * @param auto - automatic set smaller circle on first place
 * @returns {boolean}
 */
export function isCircleInCircle(c1, c2, auto = false) {
  let x0;
  let y0;
  let r0;
  let x1;
  let y1;
  let r1;

  if (!auto || c2.r1 >= c1.r1) {
    [x0, y0, r0] = c1;
    [x1, y1, r1] = c2;
  } else {
    [x1, y1, r1] = c2;
    [x0, y0, r0] = c1;
  }

  return r1 >= Math.hypot(x1 - x0, y1 - y0) + r0;
}

/**
 * Get two circles intersection
 *
 * Original: https://stackoverflow.com/a/12221389/1531295
 *
 * @param x0
 * @param y0
 * @param r0
 * @param x1
 * @param y1
 * @param r1
 * @param getCoordinates
 */
export function twoCirclesIntersection([x0, y0, r0], [x1, y1, r1], getCoordinates = true) {
  /* dx and dy are the vertical and horizontal distances between
   * the circle centers.
   */
  const dx = x1 - x0;
  const dy = y1 - y0;

  /* Determine the straight-line distance between the centers. */
  const d = Math.hypot(dy, dx);

  /* Check for solvability. */
  if (d > r0 + r1) {
    /* no solution. circles do not intersect. */
    return false;
  }
  if (d < Math.abs(r0 - r1)) {
    /* no solution. one circle is contained in the other */
    return false;
  }

  if (!getCoordinates) {
    return true;
  }

  /* 'point 2' is the point where the line through the circle
   * intersection points crosses the line between the circle
   * centers.
   */

  /* Determine the distance from point 0 to point 2. */
  const a = (r0 * r0 - r1 * r1 + d * d) / (2.0 * d);

  /* Determine the coordinates of point 2. */
  const x2 = x0 + (dx * a) / d;
  const y2 = y0 + (dy * a) / d;

  /* Determine the distance from point 2 to either of the
   * intersection points.
   */
  const h = Math.sqrt(r0 * r0 - a * a);

  /* Now determine the offsets of the intersection points from
   * point 2.
   */
  const rx = -dy * (h / d);
  const ry = dx * (h / d);

  /* Determine the absolute intersection points. */
  const xi = x2 + rx;
  const xiPrime = x2 - rx;
  const yi = y2 + ry;
  const yiPrime = y2 - ry;

  return [xi, xiPrime, yi, yiPrime];
}

export function circeIntersectWithCircles(circle, anotherCircles) {
  let intersect = false;
  for (let i = 0; i < anotherCircles.length; i += 1) {
    const aCircle = anotherCircles[i];
    intersect =
      intersect ||
      twoCirclesIntersection([circle.x, circle.y, circle.r], [aCircle.x, aCircle.y, aCircle.r], false) ||
      isCircleInCircle([circle.x, circle.y, circle.r], [aCircle.x, aCircle.y, aCircle.r], true);
    if (intersect) {
      break;
    }
  }
  return intersect;
}
