import * as BABYLON from 'babylonjs';
import particlesVertexShader from './shaders/vert.glsl';
import particlesFragShader from './shaders/frag.glsl';

const settings = {
  animate: true,
  context: 'webgl',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3(16 / 255, 22 / 255, 26 / 255);

  BABYLON.Effect.ShadersStore.particlesVertexShader = particlesVertexShader;
  BABYLON.Effect.ShadersStore.particlesFragmentShader = particlesFragShader;

  const camera = new BABYLON.ArcRotateCamera('camera1', 0, 0, 10000, BABYLON.Vector3(0, -1, 1), scene);
  camera.setTarget(BABYLON.Vector3.Zero());
  // camera.attachControl(canvas, true);
  camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;

  camera.orthoTop = 1;
  camera.orthoBottom = -1;
  camera.orthoLeft = -1;
  camera.orthoRight = 1;

  const pcs = new BABYLON.PointsCloudSystem('pcs', 0, scene);

  const sizeStep = 0.75;

  const stackSize = 150;

  const wormsCount = 200;
  const wormPositions = [];
  for (let i = 0; i < wormsCount; i += 1) {
    const x = (Math.random() - 0.5) * 2;
    const y = (Math.random() - 0.5) * 2;

    wormPositions.push([x, y]);
  }

  for (let i = 0; i < stackSize; i += 1) {
    wormPositions.forEach(([x, y]) => {
      pcs.addPoints(1, particle => {
        particle.position = new BABYLON.Vector3(x, i, y);
      });
    });
  }

  await pcs.buildMeshAsync();

  const particlesMaterial = new BABYLON.ShaderMaterial(
    'shader',
    scene,
    {
      vertex: 'particles',
      fragment: 'particles',
    },
    {
      attributes: ['position', 'normal', 'uv'],
      uniforms: [
        'world',
        'worldView',
        'worldViewProjection',
        'view',
        'iTime',
        'iResolution',
        'pSize',
        'stackSize',
        'sizeStep',
        'aRatio',
      ],
      needAlphaBlending: true,
    },
  );
  particlesMaterial.pointsCloud = true;

  particlesMaterial.setFloat('iResolution', new BABYLON.Vector2(1, 1));
  particlesMaterial.setFloat('pSize', 1);
  particlesMaterial.setFloat('stackSize', stackSize);
  particlesMaterial.setFloat('sizeStep', sizeStep);
  particlesMaterial.setFloat('aRatio', 1);

  pcs.mesh.material = particlesMaterial;

  return {
    render({ time, width, height }) {
      particlesMaterial.setFloat('iTime', time);
      particlesMaterial.setFloat('aRatio', width / height);
      const aRatio = scene.getEngine().getAspectRatio(camera);
      particlesMaterial.setVector2('iResolution', new BABYLON.Vector2(aRatio, 1));

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
