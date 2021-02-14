import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Vector3, Vector2 } from '@babylonjs/core/Maths/math';
import { Effect } from '@babylonjs/core/Materials/effect';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import '@babylonjs/core/Loading/Plugins/babylonFileLoader';
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader';
import { PointsCloudSystem, PointColor } from '@babylonjs/core/Particles/pointsCloudSystem';
import { ShaderMaterial } from '@babylonjs/core/Materials/shaderMaterial';

import { getWebGLContext } from '@/utils/webgl';
import particlesVertexShader from './shaders/vert.glsl';
import particlesFragShader from './shaders/frag.glsl';

const settings = {
  animate: true,
  context: getWebGLContext(),
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  // This creates a basic Babylon Scene object (non-mesh)
  const scene = new Scene(engine);
  scene.clearColor = Color3.FromHexString('#182026');

  Effect.ShadersStore.particlesVertexShader = particlesVertexShader;
  Effect.ShadersStore.particlesFragmentShader = particlesFragShader;

  // This creates and positions a free camera (non-mesh)
  const camera = new ArcRotateCamera('camera1', -Math.PI / 3, Math.PI / 2, 100, new Vector3(0, 0, 0), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.75;

  // The first parameter can be used to specify which mesh to import. Here we import all meshes
  const { meshes } = await SceneLoader.ImportMeshAsync('', 'static/assets/models/', 'skull.babylon', scene);

  const skullMesh = meshes[0];

  camera.target = skullMesh;

  const pcs = new PointsCloudSystem('pcs', 0, scene);

  pcs.addSurfacePoints(skullMesh, 50000, PointColor.Stated, new Color3(1, 0, 0), 0.25);

  const mesh = await pcs.buildMeshAsync();

  const particlesMaterial = new ShaderMaterial(
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

  particlesMaterial.alphaMode = Engine.ALPHA_ADD;

  particlesMaterial.setFloat('iResolution', new Vector2(1, 1));
  particlesMaterial.setFloat('pSize', 2);

  mesh.material = particlesMaterial;

  skullMesh.dispose();

  return {
    render({ time }) {
      camera.alpha += 0.00125;
      particlesMaterial.setFloat('iTime', time);
      const aRatio = scene.getEngine().getAspectRatio(camera);
      particlesMaterial.setVector2('iResolution', new Vector2(aRatio, 1));

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
