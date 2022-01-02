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
