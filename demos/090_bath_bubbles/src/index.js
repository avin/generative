import canvasSketch from 'canvas-sketch';
import fragmentShaderSource from './shaders/fragment.glsl';
import vertexShaderSource from './shaders/vertext.glsl';
import { createProgram, createShader } from './utils';

const settings = {
  canvas: document.querySelector('#canvas'),
  // dimensions: [1024, 1024],
  context: 'webgl2',
  animate: true,
};

const sketch = ({ canvas, gl }) => {
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  // gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  // gl.blendFuncSeparate( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ZERO, gl.ONE );

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  const program = createProgram(gl, vertexShader, fragmentShader);

  const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
  const uvAttributeLocation = gl.getAttribLocation(program, 'a_uv');
  const offsetAttributeLocation = gl.getAttribLocation(program, 'a_offset');

  const timeLocation = gl.getUniformLocation(program, 'u_time');
  const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');

  const numInstances = 10000;

  const offsetData = new Float32Array(numInstances * 2);
  const rotationData = new Float32Array(numInstances);
  const colorData = new Float32Array(numInstances * 3);
  const speedData = new Float32Array(numInstances);

  const colorsStorage = [];
  const rotationsStorage = [];
  const offsetsStorage = [];
  const speedsStorage = [];
  for (let i = 0; i < numInstances; i += 1) {
    offsetsStorage.push(new Float32Array(offsetData.buffer, i * 2 * 4, 2));
    rotationsStorage.push(new Float32Array(rotationData.buffer, i * 4, 1));
    colorsStorage.push(new Float32Array(colorData.buffer, i * 3 * 4, 3));
    speedsStorage.push(new Float32Array(speedData.buffer, i * 4, 1));
  }

  offsetsStorage.forEach((item) => {
    item[0] = Math.random() * 2 - 1;
    item[1] = Math.random() * 2 - 1;
  });

  rotationsStorage.forEach((item) => {
    item[0] = Math.random();
  });

  colorsStorage.forEach((item) => {
    item[0] = Math.random();
    item[1] = Math.random();
    item[2] = Math.random();
  });

  speedsStorage.forEach((item) => {
    item[0] = Math.random() * 2 + 0.5;
  });

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  {
    /* ======== POSITION ========= */

    const size = 0.075;
    /* prettier-ignore */
    const positions = new Float32Array([
      -size, -size,
      size, -size,
      size, size,
      -size, size,
    ]);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(
      positionAttributeLocation,
      2, // size - 2 components per iteration
      gl.FLOAT, // type - the data is 32bit floats
      false, // normalize - don't normalize the data
      0, // stride  - 0 = move forward size * sizeof(type) each iteration to get the next position
      0, // offset - start at the beginning of the buffer
    );

    /* ======== UV ========= */

    /* prettier-ignore */
    const uvBufferData = new Float32Array([
      0, 0,
      1, 0,
      1, 1,
      0, 1,
    ]);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, uvBufferData, gl.STATIC_DRAW);

    gl.enableVertexAttribArray(uvAttributeLocation);
    gl.vertexAttribPointer(
      uvAttributeLocation,
      2, // size - 2 components per iteration
      gl.FLOAT, // type - the data is 32bit floats
      false, // normalize - don't normalize the data
      0, // stride  - 0 = move forward size * sizeof(type) each iteration to get the next position
      0, // offset - start at the beginning of the buffer
    );

    /* ======== INDICES ========= */

    /* prettier-ignore */
    const indices = new Uint16Array([
      0, 1, 3,   // first triangle
      3, 1, 2,   // second triangle
    ]);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    /* ======== OFFSETS ========= */

    const offsetBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, offsetBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, offsetData, gl.STATIC_DRAW);

    gl.enableVertexAttribArray(offsetAttributeLocation);
    gl.vertexAttribPointer(offsetAttributeLocation, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(offsetAttributeLocation, 1);

    /* ======== CLEAN ========= */

    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
  }

  return {
    resize({ viewportWidth, viewportHeight }) {
      gl.viewport(0, 0, viewportWidth, viewportHeight);
    },
    render({ time }) {
      // Clear the canvas
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Tell it to use our program (pair of shaders)
      gl.useProgram(program);

      gl.uniform1f(timeLocation, time);
      gl.uniform2fv(resolutionLocation, [gl.canvas.width, gl.canvas.height]);

      gl.bindVertexArray(vao);

      gl.drawElementsInstanced(
        gl.TRIANGLES,
        6, // count
        gl.UNSIGNED_SHORT, // indexType
        0, // offset
        numInstances, // num instances
      );

      gl.bindVertexArray(null);
    },
    unload() {},
  };
};

canvasSketch(sketch, settings);
