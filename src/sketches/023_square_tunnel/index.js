import * as BABYLON from 'babylonjs';

const settings = {
  dimensions: [1280, 1280],
  animate: true,
  context: 'webgl',
};

const sketch = ({ canvas, width, height }) => {
  const engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3(0.0, 0.1, 0.2);

  // Make scene glowing
  const gl = new BABYLON.GlowLayer('glow', scene);
  gl.intensity = 2.0;

  const camera = new BABYLON.ArcRotateCamera(
    'camera1',
    Math.PI / 2,
    Math.PI / 2,
    0.1,
    new BABYLON.Vector3(0, 0, 0),
    scene,
  );
  camera.wheelDeltaPercentage = 0.01;

  const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = 10.7;

  const mat = new BABYLON.StandardMaterial('mat', scene);
  mat.disableLighting = true;

  // Square path
  const path = [
    new BABYLON.Vector3(-1.0, 0.0, 0.0),
    new BABYLON.Vector3(0.0, 1, 0.0),
    new BABYLON.Vector3(1.0, 0, 0.0),
    new BABYLON.Vector3(0.0, -1, 0.0),
    new BABYLON.Vector3(-1.0, 0.0, 0.0),
  ];

  const colors = new Array(path.length).fill(0).map(() => new BABYLON.Color4(1, 1, 1, 1));

  const squaresCount = 100;
  const step = 1.0;
  const maxZ = squaresCount * step;

  const squares = [];
  for (let i = 0; i < squaresCount; i += 1) {
    const square = BABYLON.MeshBuilder.CreateLines('tube', { points: path, colors }, scene);
    square.material.emissiveColor = new BABYLON.Color3(1, 0.5, 0);
    square.material.disableLighting = true;
    square.material.alpha = 1;

    square.idx = i;
    square.originalPosZ = -square.idx * step;

    square.position.z = square.originalPosZ;

    squares.push(square);
  }

  return {
    render({ time }) {
      for (let i = 0; i < squaresCount; i += 1) {
        const square = squares[i];
        square.position.z = square.originalPosZ + time * 10;
        square.rotation.z = (Math.cos(time + square.idx * 0.1) * Math.PI) / 2;

        BABYLON.Color3.HSVtoRGBToRef((square.idx * 10) % 360, 1, 1, square.material.emissiveColor);
        square.material.emissiveColor.scaleToRef(
          1 - Math.sqrt(Math.abs(square.position.z / maxZ)),
          square.material.emissiveColor,
        );

        if (square.position.z > 0) {
          square.idx += squaresCount;
          square.originalPosZ = -square.idx * step;
        }
      }

      camera.fov = (Math.sin(time * 3) * 0.25 + 0.75) * 0.25 + 0.525;

      scene.render();
    },
    resize({ pixelRatio, width, height }) {
      engine.resize();
    },
    unload() {
      engine.dispose();
    },
  };
};

export default { sketch, settings };
