import * as BABYLON from '@babylonjs/core';
import { getWebGLContext } from '@/utils/webgl';
import particlesVertexShader from './shaders/vert.glsl';
import particlesFragShader from './shaders/frag.glsl';

const settings = {
  animate: true,
  context: getWebGLContext(),
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
    -Math.PI / 2,
    Math.PI / 2,
    50,
    new BABYLON.Vector3(0, 0, 0),
    scene,
  );

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  const pcs = new BABYLON.PointsCloudSystem('pcs', 0, scene);

  const generateParticles = (particle, i, s) => {
    const radius = 50;
    const ptAngle = Math.random() * 2 * Math.PI;
    const ptRadiusSq = Math.random() * radius * radius;
    const x = Math.sqrt(ptRadiusSq) * Math.cos(ptAngle);
    const y = Math.sqrt(ptRadiusSq) * Math.sin(ptAngle);

    particle.position = new BABYLON.Vector3(x, 0, y);
  };
  pcs.addPoints(100000, generateParticles);

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
      uniforms: ['world', 'worldView', 'worldViewProjection', 'view', 'iTime', 'iResolution', 'pSize', 'camPos'],
      needAlphaBlending: true,
    },
  );
  particlesMaterial.pointsCloud = true;

  particlesMaterial.alphaMode = BABYLON.Engine.ALPHA_SCREENMODE;
  // particlesMaterial.alphaMode = 5.;

  particlesMaterial.setFloat('iResolution', new BABYLON.Vector2(1, 1));
  particlesMaterial.setFloat('pSize', 2);

  pcs.mesh.material = particlesMaterial;

  return {
    render({ time }) {
      particlesMaterial.setFloat('iTime', time);
      const aRatio = scene.getEngine().getAspectRatio(camera);
      particlesMaterial.setVector2('iResolution', new BABYLON.Vector2(aRatio, 1));
      particlesMaterial.setVector3('camPos', camera.position);

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
