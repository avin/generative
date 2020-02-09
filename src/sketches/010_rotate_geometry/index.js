import { vec3, mat4 } from 'gl-matrix';

const settings = {
  dimensions: [1024, 1024],
  animate: true,
};

const sketch = async ({ context, width, height }) => {
  const cubeVertices = [
    [-1, -1, +1],
    [-1, -1, -1],
    [+1, -1, -1],
    [+1, -1, +1],
    [+1, +1, +1],
    [+1, +1, -1],
    [-1, +1, -1],
    [-1, +1, +1],
  ];

  const cubeEdges = [
    [0, 7],
    [0, 3],
    [0, 1],
    [6, 7],
    [6, 5],
    [6, 1],
    [2, 5],
    [2, 1],
    [2, 3],
    [4, 3],
    [4, 5],
    [4, 7],
  ];

  const initView = mat4.create();

  const backCanvas = document.createElement('canvas');
  backCanvas.width = width;
  backCanvas.height = height;
  const backCanvasContext = backCanvas.getContext('2d');

  let lastTime = 0;

  [context, backCanvasContext].forEach(context => {
    context.fillStyle = 'hsla(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);
  });

  let pathBuffer = [];
  let odd = true;

  return ({ context, time }) => {
    context.drawImage(backCanvas, 0, 0);

    context.lineWidth = 1;
    context.strokeStyle = 'hsl(0, 0%, 98%)';

    const total = 20;
    const path = new Path2D();
    for (let i = 0; i < total; i += 1) {
      const modelView = mat4.clone(initView);

      mat4.rotateX(modelView, modelView, Math.cos(time) + time / 10);
      mat4.rotateY(modelView, modelView, Math.sin(time));
      mat4.rotateZ(modelView, modelView, Math.sin(time + Math.PI / 4));
      const sF = (Math.cos(time) / 4 + 1.5) / Math.sqrt(i / 2);
      mat4.scale(modelView, modelView, [sF, sF, sF]);

      context.fillStyle = `hsl(${time}, 80%, 50%)`;

      const cubeVerticesMorphed = cubeVertices.map(p => {
        const pT = [];
        vec3.transformMat4(pT, p, modelView);

        return pT;
      });

      cubeEdges.forEach((edge, eI) => {
        const lineCoords = edge.map(pN => {
          return [cubeVerticesMorphed[pN][0] * 100 + width / 2, cubeVerticesMorphed[pN][1] * 100 + width / 2];
        });
        lineCoords.forEach((p, pI) => {
          if (eI === 0 && pI === 0) {
            path.moveTo(p[0], p[1]);
          } else {
            path.lineTo(p[0], p[1]);
          }
        });
      });
    }

    context.stroke(path);

    if (time - lastTime > 0.04) {
      pathBuffer.push(path);
      odd = !odd;
      if (pathBuffer.length > 2) {
        pathBuffer = pathBuffer.slice(1);
      } else {
        return;
      }

      lastTime = time;

      backCanvasContext.fillStyle = 'hsla(0, 0%, 10%)';
      backCanvasContext.fillRect(0, 0, width, height);

      if (odd) {
        backCanvasContext.lineWidth = 1;
        backCanvasContext.strokeStyle = '#F00';
        backCanvasContext.stroke(pathBuffer[1]);
      } else {
        backCanvasContext.lineWidth = 1;
        backCanvasContext.strokeStyle = '#0FF';
        backCanvasContext.stroke(pathBuffer[0]);
      }
    }
  };
};

export default { sketch, settings };
