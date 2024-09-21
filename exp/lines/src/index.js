import canvasSketch from 'canvas-sketch';

const size = 1000;

const settings = {
  canvas: document.querySelector('#canvas'),
  dimensions: [size, size],
  animate: true,
  pixelRatio: 0.2,
  pixelated: true,
};

const sketch = (options) => {
  const { canvasWidth: width, canvasHeight: height, context } = options;

  // Создаем ImageData размером с canvas
  const imageData = context.createImageData(width, height);
  const data = imageData.data;

  // Функция для установки цвета пикселя в буфере
  function setPixel(x, y, r, g, b, a) {
    const index = (y * width + x) * 4;
    data[index] = r; // Красный
    data[index + 1] = g; // Зеленый
    data[index + 2] = b; // Синий
    data[index + 3] = a; // Прозрачность
  }

  // Алгоритм Брезенхема для рисования линии от (x0, y0) до (x1, y1)
  function drawLine(x0, y0, x1, y1) {
    x0 = Math.round(x0);
    y0 = Math.round(y0);
    x1 = Math.round(x1);
    y1 = Math.round(y1);

    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1;
    const sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;

    while (true) {
      if (x0 >= 0 && x0 < width && y0 >= 0 && y0 < height) {
        setPixel(x0, y0, 255, 0, 0, 255);
      }

      if (x0 === x1 && y0 === y1) {
        break;
      }
      const e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        x0 += sx;
      }
      if (e2 < dx) {
        err += dx;
        y0 += sy;
      }
    }
  }

  // Функция для проекции 3D-точки в 2D
  function project([x, y, z], width, height) {
    const scale = 200 / (z + 400); // Простая перспектива
    const x2D = x * scale + width / 2;
    const y2D = y * scale + height / 2;
    return [x2D, y2D];
  }

  // Кубические вершины
  const cubeVertices = [
    [-1, -1, -1],
    [1, -1, -1],
    [1, 1, -1],
    [-1, 1, -1],
    [-1, -1, 1],
    [1, -1, 1],
    [1, 1, 1],
    [-1, 1, 1],
  ].map((v) => v.map((coord) => coord * 100)); // Увеличиваем размер куба

  // Ребра куба (соединяем вершины)
  // prettier-ignore
  const cubeEdges = [
    [0, 1], [1, 2], [2, 3], [3, 0], // Задняя грань
    [4, 5], [5, 6], [6, 7], [7, 4], // Передняя грань
    [0, 4], [1, 5], [2, 6], [3, 7], // Боковые ребра
  ];

  return ({ time }) => {
    imageData.data.fill(0); // Очищаем буфер

    // Матрицы вращения вокруг осей
    const angle = time * 0.5;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);

    // Вращаем куб в 3D вокруг осей X и Y
    const rotatedVertices = cubeVertices.map(([x, y, z]) => {
      // Вращение вокруг оси Y
      const xRotY = x * cosA - z * sinA;
      const zRotY = x * sinA + z * cosA;

      // Вращение вокруг оси X
      const yRotX = y * cosA - zRotY * sinA;
      const zRotX = y * sinA + zRotY * cosA;

      return [xRotY, yRotX, zRotX];
    });

    // Проецируем и рисуем линии
    cubeEdges.forEach(([start, end]) => {
      const [x0, y0] = project(rotatedVertices[start], width, height);
      const [x1, y1] = project(rotatedVertices[end], width, height);
      drawLine(x0, y0, x1, y1);
    });

    // Рисуем буфер на canvas
    context.putImageData(imageData, 0, 0);
  };
};

canvasSketch(sketch, settings);
