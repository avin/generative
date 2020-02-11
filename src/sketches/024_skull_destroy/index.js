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

  // This creates a basic Babylon Scene object (non-mesh)
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = BABYLON.Color3.FromHexString('#182026');

  BABYLON.Effect.ShadersStore.particlesVertexShader = particlesVertexShader;
  BABYLON.Effect.ShadersStore.particlesFragmentShader = particlesFragShader;

  // This creates and positions a free camera (non-mesh)
  const camera = new BABYLON.ArcRotateCamera(
    'camera1',
    -Math.PI / 3,
    Math.PI / 2,
    100,
    new BABYLON.Vector3(0, 0, 0),
    scene,
  );

  // This targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.75;

  // The first parameter can be used to specify which mesh to import. Here we import all meshes
  const { meshes } = await BABYLON.SceneLoader.ImportMeshAsync('', 'static/assets/models/', 'skull.babylon', scene);

  const skullMesh = meshes[0];

  camera.target = skullMesh;

  const pcs = new BABYLON.PointsCloudSystem('pcs', 0, scene);

  pcs.addSurfacePoints(skullMesh, 50000, BABYLON.PointColor.Stated, new BABYLON.Color3(1, 0, 0), 0.25);

  const mesh = await pcs.buildMeshAsync();

  const particlesMaterial = new BABYLON.ShaderMaterial(
    'shader',
    scene,
    {
      vertex: 'particles',
      fragment: 'particles',
    },
    {
      attributes: ['position', 'normal', 'uv'],
      uniforms: ['world', 'worldView', 'worldViewProjection', 'view', 'iTime', 'iResolution', 'pSize'],
      needAlphaBlending: true,
    },
  );
  particlesMaterial.pointsCloud = true;

  particlesMaterial.alphaMode = BABYLON.Engine.ALPHA_ADD;

  particlesMaterial.setFloat('iResolution', new BABYLON.Vector2(1, 1));
  particlesMaterial.setFloat('pSize', 2);

  mesh.material = particlesMaterial;

  skullMesh.dispose();

  return {
    render({ time }) {
      camera.alpha += 0.00125;
      particlesMaterial.setFloat('iTime', time);
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
