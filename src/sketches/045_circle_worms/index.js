import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Camera } from '@babylonjs/core/Cameras/camera';
import { Vector3, Vector2 } from '@babylonjs/core/Maths/math';
import { Effect } from '@babylonjs/core/Materials/effect';
import { PointsCloudSystem } from '@babylonjs/core/Particles/pointsCloudSystem';
import { ShaderMaterial } from '@babylonjs/core/Materials/shaderMaterial';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';

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

  const scene = new Scene(engine);
  scene.clearColor = new Color3(16 / 255, 22 / 255, 26 / 255);

  Effect.ShadersStore.particlesVertexShader = particlesVertexShader;
  Effect.ShadersStore.particlesFragmentShader = particlesFragShader;

  const camera = new ArcRotateCamera('camera1', 0, 0, 10000, Vector3.Zero(), scene);
  camera.setTarget(Vector3.Zero());
  // camera.attachControl(canvas, true);
  camera.mode = Camera.ORTHOGRAPHIC_CAMERA;

  camera.orthoTop = 1;
  camera.orthoBottom = -1;
  camera.orthoLeft = -1;
  camera.orthoRight = 1;

  const pcs = new PointsCloudSystem('pcs', 0, scene);

  const sizeStep = 0.75;

  const stackSize = 150;

  const ratio = scene.getEngine().getAspectRatio(camera);

  const wormsCount = 200 * ratio;
  const wormPositions = [];
  for (let i = 0; i < wormsCount; i += 1) {
    const x = (Math.random() - 0.5) * 2;
    const y = (Math.random() - 0.5) * 2 * ratio;

    wormPositions.push([x, y]);
  }

  for (let i = 0; i < stackSize; i += 1) {
    wormPositions.forEach(([x, y]) => {
      pcs.addPoints(1, (particle) => {
        particle.position = new Vector3(x, i, y);
      });
    });
  }

  await pcs.buildMeshAsync();

  const particlesMaterial = new ShaderMaterial(
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

  particlesMaterial.setFloat('iResolution', new Vector2(1, 1));
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
