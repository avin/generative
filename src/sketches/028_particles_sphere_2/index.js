import * as BABYLON from 'babylonjs';
import customVertexShader from './shaders/vert.glsl';
import customFragmentShader from './shaders/frag.glsl';

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
  scene.clearColor = BABYLON.Color3.Black;
  const camera = new BABYLON.ArcRotateCamera('Camera', -Math.PI / 2, Math.PI / 2, 2.25, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
  camera.fov = 5.0;
  camera.allowUpsideDown = true;
  camera.norotationconstraint = true;
  camera.lowerBetaLimit = null;
  camera.upperBetaLimit = null;

  camera.lowerRadiusLimit = 2.25;
  camera.upperRadiusLimit = 2.25;



  BABYLON.Effect.ShadersStore.customVertexShader = customVertexShader;
  BABYLON.Effect.ShadersStore.customFragmentShader = customFragmentShader;

  const sphere = new BABYLON.MeshBuilder.CreateIcoSphere('sphere', { radius: 1, subdivisions: 5 }, scene);

  const pcs = new BABYLON.PointsCloudSystem('pcs', 0, scene, { updatable: false });
  pcs.addSurfacePoints(sphere, 100000, BABYLON.Color3.White);

  const pMaterial = new BABYLON.ShaderMaterial(
    'shader',
    scene,
    {
      vertex: 'custom',
      fragment: 'custom',
    },
    {
      attributes: ['position', 'normal', 'uv'],
      uniforms: ['world', 'worldView', 'worldViewProjection', 'view', 'iTime', 'iResolution', 'pSize'],
      needAlphaBlending: true,
    },
  );
  pMaterial.pointsCloud = true;

  pMaterial.alphaMode = BABYLON.Engine.ALPHA_ADD;
  pMaterial.backFaceCulling = false;

  pMaterial.setFloat('iResolution', new BABYLON.Vector2(1, 1));
  pMaterial.setFloat('pSize', 5);

  pcs.buildMeshAsync().then(mesh => {
    pcs.mesh.material = pMaterial;
    sphere.dispose();
  });

  return {
    render({ time }) {
      camera.alpha += 0.00125;
      pMaterial.setFloat('iTime', time);
      const aRatio = scene.getEngine().getAspectRatio(camera);
      pMaterial.setVector2('iResolution', new BABYLON.Vector2(aRatio, 1));

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
