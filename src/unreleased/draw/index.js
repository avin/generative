import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import '@babylonjs/core/Collisions/pickingInfo';
import { Vector2, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { getWebGLContext } from '@/utils/webgl';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Effect } from '@babylonjs/core/Materials/effect';
import { DisplayPassPostProcess, ProceduralTexture, RenderTargetTexture } from '@babylonjs/core';
import { Camera } from '@babylonjs/core/Cameras/camera';
import effectPixelShader from './shaders/effectPixelShader.glsl';

const settings = {
  animate: true,
  context: getWebGLContext(),
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  //
  // Settings ====================
  //

  const planeSize = 100;

  //
  // Scene ====================
  //

  const scene = new Scene(engine);
  scene.clearColor = new Color3(16 / 255, 22 / 255, 26 / 255);

  const camera = new ArcRotateCamera('camera', 1.28, 0.6, 30, new Vector3(0, 0, 0), scene);
  camera.fov = 1.2;
  camera.minZ = 0.1;
  // camera.attachControl(canvas);

  const baseLight = new HemisphericLight('l', new Vector3(0, 1, 0), scene);
  baseLight.specular = Color3.Black();

  const ground = new MeshBuilder.CreateGround('g', { width: planeSize, height: planeSize, updatable: false });
  ground.isPickable = true;

  const penSize = 5;
  const sphere = new MeshBuilder.CreateSphere('s', { diameter: penSize });
  sphere.isPickable = false;
  sphere.visibility = 0.2;

  const sphereMat = new StandardMaterial('', scene);
  sphereMat.diffuseColor = new Color3(1, 1, 1);
  sphere.material = sphereMat;

  //
  // Draw texture
  //

  const textureCamera = new Camera('camera', Vector3.Zero(), null);

  const texureSize = 5000;

  Effect.ShadersStore.effectPixelShader = effectPixelShader;
  const effectTexture = new ProceduralTexture('effectTexture', texureSize, 'effect', scene, null, false, false);

  const rtt = new RenderTargetTexture('rtt', texureSize, scene);
  rtt.activeCamera = textureCamera;
  scene.customRenderTargets.push(rtt);

  const displaypass = new DisplayPassPostProcess('displaypass', 1, textureCamera);
  displaypass.enablePixelPerfectMode = true;
  displaypass.onApply = (effect) => {
    effect.setTexture('passSampler', effectTexture);
  };

  effectTexture.setTexture('sameTexture', rtt);

  const groundMat = new StandardMaterial('m', scene);
  groundMat.diffuseTexture = effectTexture;
  ground.material = groundMat;

  //
  // Move ball
  //

  let lastPosition = sphere.position;
  function moveBall() {
    const pickInfo = scene.pick(scene.pointerX, scene.pointerY);

    let pickPoint = lastPosition;
    if (pickInfo.hit) {
      pickPoint = pickInfo.pickedPoint;
      lastPosition = pickPoint;
    }

    Vector3.LerpToRef(sphere.position, pickPoint, 0.2, sphere.position);
    // sphere.position = pickPoint;
  }

  let isDrawing = false;
  canvas.addEventListener('pointerdown', () => {
    isDrawing = true;
  });
  canvas.addEventListener('pointerleave', () => {
    isDrawing = false;
  });
  canvas.addEventListener('pointerup', () => {
    isDrawing = false;
  });

  const time = 0;
  let prevPenPosition = 0;
  return {
    render({ time, width, height, deltaTime }) {
      const delta = Math.min(deltaTime, 1 / 60);
      time += delta;

      moveBall();

      effectTexture.setFloat('iTime', time);
      const penPosition = new Vector2(sphere.position.x / planeSize, sphere.position.z / planeSize);
      if (!prevPenPosition) {
        prevPenPosition = penPosition;
      }
      effectTexture.setVector2('penPosition', penPosition);
      effectTexture.setVector2('prevPenPosition', prevPenPosition);
      prevPenPosition = penPosition;
      effectTexture.setFloat('penSize', penSize / planeSize / 2);
      effectTexture.setInt('isDrawing', isDrawing ? 1 : 0);
      effectTexture.setFloat('fadeFactor', 0.002);
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
