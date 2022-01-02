/**
 * Get vectors intersection
 * @param p1
 * @param p2
 * @param p3
 * @param p4
 * @returns {number[]}
 */
export function findIntersection(p1, p2, p3, p4) {
  const x =
    ((p1[0] * p2[1] - p2[0] * p1[1]) * (p3[0] - p4[0]) - (p1[0] - p2[0]) * (p3[0] * p4[1] - p3[1] * p4[0])) /
    ((p1[0] - p2[0]) * (p3[1] - p4[1]) - (p1[1] - p2[1]) * (p3[0] - p4[0]));
  const y =
    ((p1[0] * p2[1] - p2[0] * p1[1]) * (p3[1] - p4[1]) - (p1[1] - p2[1]) * (p3[0] * p4[1] - p3[1] * p4[0])) /
    ((p1[0] - p2[0]) * (p3[1] - p4[1]) - (p1[1] - p2[1]) * (p3[0] - p4[0]));
  return [x, y];
}

/**
 * Is point on line
 * @param p
 * @param a
 * @param b
 * @returns {boolean}
 */
function isPointBetween(p, a, b) {
  return (
    ((a[0] <= p[0] && p[0] <= b[0]) || (a[0] >= p[0] && p[0] >= b[0])) &&
    ((a[1] <= p[1] && p[1] <= b[1]) || (a[1] >= p[1] && p[1] >= b[1]))
  );
}

/**
 * Get segments intersection
 * @param p1
 * @param p2
 * @param p3
 * @param p4
 * @returns {*}
 */
export function findSegmentIntersection(p1, p2, p3, p4) {
  const i1 = findIntersection(p1, p2, p3, p4);

  const isIntersected = isPointBetween(i1, p1, p2) && isPointBetween(i1, p3, p4);
  return isIntersected ? i1 : false;
}

/**
 * Get two points distance
 * @returns {number}
 * @param p1x
 * @param p1y
 * @param p2x
 * @param p2y
 */
export function pointsDistance(p1x, p1y, p2x, p2y) {
  return Math.sqrt((p1x - p2x) ** 2 + (p1y - p2y) ** 2);
}
