export function setDrawPolygon(context, lineCoords, closePath = false) {
  context.beginPath();
  for (let i = 0; i < lineCoords.length; i += 1) {
    const p = lineCoords[i];
    if (i === 0) {
      context.moveTo(p[0], p[1]);
    } else {
      context.lineTo(p[0], p[1]);
    }
  }
  if (closePath) {
    context.closePath();
  }
}

export const drawLine = (context, lineCoords, closePath = false) => {
  setDrawPolygon(context, lineCoords, closePath);
  context.stroke();
};

const resultGetPixelArray = [0, 0, 0, 0];
export function getPixel(imgData, x, y, colorNumber) {
  const n = (~~x + ~~y * imgData.width) * 4;

  if (colorNumber !== undefined) {
    return imgData.data[n + colorNumber];
  }

  for (let i = 0; i < 4; i += 1) {
    resultGetPixelArray[i] = n + i;
  }
  return resultGetPixelArray;
}
