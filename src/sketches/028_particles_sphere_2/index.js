import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Vector3, Vector2 } from '@babylonjs/core/Maths/math';
import { Effect } from '@babylonjs/core/Materials/effect';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { PointsCloudSystem } from '@babylonjs/core/Particles/pointsCloudSystem';
import { ShaderMaterial } from '@babylonjs/core/Materials/shaderMaterial';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';

import customVertexShader from './shaders/vert.glsl';
import customFragmentShader from './shaders/frag.glsl';

const settings = {
  animate: true,
  context: 'webgl2',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  const scene = new Scene(engine);
  scene.clearColor = Color3.Black;
  const camera = new ArcRotateCamera('Camera', -Math.PI / 2, Math.PI / 2, 2.25, Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
  camera.fov = 5.0;
  camera.allowUpsideDown = true;
  camera.norotationconstraint = true;
  camera.lowerBetaLimit = null;
  camera.upperBetaLimit = null;

  camera.lowerRadiusLimit = 2.25;
  camera.upperRadiusLimit = 2.25;

  Effect.ShadersStore.customVertexShader = customVertexShader;
  Effect.ShadersStore.customFragmentShader = customFragmentShader;

  const sphere = new MeshBuilder.CreateIcoSphere('sphere', { radius: 1, subdivisions: 5 }, scene);

  const pcs = new PointsCloudSystem('pcs', 0, scene, { updatable: false });
  pcs.addSurfacePoints(sphere, 100000, Color3.White);

  const pMaterial = new ShaderMaterial(
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

  pMaterial.alphaMode = Engine.ALPHA_ADD;
  pMaterial.backFaceCulling = false;

  pMaterial.setFloat('iResolution', new Vector2(1, 1));
  pMaterial.setFloat('pSize', 5);

  pcs.buildMeshAsync().then((mesh) => {
    pcs.mesh.material = pMaterial;
    sphere.dispose();
  });

  return {
    render({ time }) {
      camera.alpha += 0.00125;
      pMaterial.setFloat('iTime', time);
      const aRatio = scene.getEngine().getAspectRatio(camera);
      pMaterial.setVector2('iResolution', new Vector2(aRatio, 1));

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
