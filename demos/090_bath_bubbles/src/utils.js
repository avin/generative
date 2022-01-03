export const createShader = (gl, type, source) => {
  const shader = gl.createShader(type);
  if (!shader) {
    throw new Error('createShader failed');
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    // gl.deleteShader(shader);
    throw new Error(`could not compile shader: ${gl.getShaderInfoLog(shader) || ''}`);
  }

  return shader;
};

export const createProgram = (gl, vertexShader, fragmentShader) => {
  const program = gl.createProgram();
  if (!program) {
    throw new Error('createProgram failed');
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    // gl.deleteProgram(program);
    throw new Error(`program failed to link:${gl.getProgramInfoLog(program) || ''}`);
  }

  return program;
};

export const createAndSetupTexture = (gl) => {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Set up texture so we can render any size image and so we are
  // working with pixels.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

  if (texture === null) {
    throw new Error('texture create fail');
  }

  return texture;
};

export const setCanvasSizeForTexture = (gl, texture) => {
  gl.bindTexture(gl.TEXTURE_2D, texture);
  {
    // make the texture the same size as the image
    const mipLevel = 0; // the largest mip
    const internalFormat = gl.RGBA; // format we want in the texture
    const border = 0; // must be 0
    const srcFormat = gl.RGBA; // format of data we are supplying
    const srcType = gl.UNSIGNED_BYTE; // type of data we are supplying
    const data = null; // no data = create a blank texture
    gl.texImage2D(
      gl.TEXTURE_2D,
      mipLevel,
      internalFormat,
      gl.canvas.width,
      gl.canvas.height,
      border,
      srcFormat,
      srcType,
      data,
    );
  }
};

export const resizeCanvasToDisplaySize = (canvas) => {
  // Lookup the size the browser is displaying the canvas in CSS pixels.
  const displayWidth = canvas.clientWidth;
  const displayHeight = canvas.clientHeight;

  // Check if the canvas is not the same size.
  const needResize = canvas.width !== displayWidth || canvas.height !== displayHeight;

  if (needResize) {
    // Make the canvas the same size
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }

  return needResize;
};
