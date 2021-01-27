import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Vector2, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { DisplayPassPostProcess, ProceduralTexture, RenderTargetTexture } from '@babylonjs/core';
import { Effect } from '@babylonjs/core/Materials/effect';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { Camera } from '@babylonjs/core/Cameras/camera';
import { Mesh } from '@babylonjs/core/Meshes/mesh';

import effectPixelShader from './shaders/effectPixelShader.glsl';

const settings = {
  animate: true,
  context: 'webgl2',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = new Color3(23 / 255, 32 / 255, 38 / 255);

  const camera = new ArcRotateCamera('camera', -2.36, 2.4, 2.52, new Vector3(0, 0, 0), scene);
  camera.minZ = 0.1;
  camera.fov = 1.2;
  camera.wheelPrecision = 10.0;

  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);
  baseLight.diffuse = new Color3(1.0, 1.0, 1.0);
  baseLight.groundColor = new Color3(1.0, 1.0, 1.0);

  const texureSize = 2048;

  Effect.ShadersStore.effectPixelShader = effectPixelShader;
  const effectTexture = new ProceduralTexture('effectTexture', texureSize, 'effect', scene, null, false, false);

  const textureCamera = new Camera('camera', Vector3.Zero(), null);

  const rtt = new RenderTargetTexture('rtt', texureSize, scene);
  rtt.activeCamera = textureCamera;
  scene.customRenderTargets.push(rtt);

  const displaypass = new DisplayPassPostProcess('displaypass', 1, textureCamera);
  displaypass.enablePixelPerfectMode = true;
  displaypass.onApply = effect => {
    effect.setTexture('passSampler', effectTexture);
  };

  effectTexture.setTexture('sameTexture', rtt);

  const plane = MeshBuilder.CreateDisc('plane', { radius: 3, sideOrientation: Mesh.DOUBLESIDE }, scene);

  const planeMaterial = new StandardMaterial('planeMaterial', scene);
  planeMaterial.specularColor = Color3.Black();
  planeMaterial.diffuseTexture = effectTexture;
  plane.material = planeMaterial;

  let time = 0;
  return {
    render({ deltaTime, frame }) {
      const delta = Math.min(deltaTime, 1/60);
      time += delta;

      effectTexture.setFloat('iTime', time);
      effectTexture.setInt('iFrame', frame);
      effectTexture.setVector2('iResolution', new Vector2(texureSize, texureSize));

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
