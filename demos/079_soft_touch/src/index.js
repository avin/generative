import canvasSketch from 'canvas-sketch';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import '@babylonjs/core/Collisions/pickingInfo';
import { Vector2, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Effect } from '@babylonjs/core/Materials/effect';
import { DisplayPassPostProcess, ProceduralTexture, RenderTargetTexture } from '@babylonjs/core';
import { Camera } from '@babylonjs/core/Cameras/camera';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';
import effectPixelShader from './shaders/effectPixelShader.glsl';
import ground_vertexDefinitions from './shaders/ground/vertexDefinitions.glsl';
import ground_vertexBeforePositionUpdated from './shaders/ground/vertexBeforePositionUpdated.glsl';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: 'webgl2',
  animate: true,
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

  const camera = new ArcRotateCamera('camera', 1.28, 0.5, 60, new Vector3(4, 0, 8), scene);
  camera.fov = 1.2;
  camera.minZ = 0.1;
  // camera.attachControl(canvas);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.5, 0.5, 0.5);
  baseLight.specular = Color3.Black();
  baseLight.intensity = 0.25;

  const dirLight = new DirectionalLight('dirLight', new Vector3(-1, -3, 1), scene);
  dirLight.intensity = 1.25;
  dirLight.position = new Vector3(10, 10, -20);
  // dirLight.specular = Color3.Black();

  // ------------------------------

  const pickGround = new MeshBuilder.CreateGround('g', {
    width: planeSize,
    height: planeSize,
    updatable: false,
  });
  pickGround.visibility = 0;
  pickGround.isPickable = true;

  const ground = new MeshBuilder.CreateGround('g', {
    width: planeSize,
    height: planeSize,
    subdivisions: 500,
    updatable: false,
  });
  ground.isPickable = false;

  const penSize = 5;
  const sphere = new MeshBuilder.CreateCapsule('s', {
    radius: penSize / 2,
    tessellation: 32,
    height: penSize * 2,
  });
  sphere.isPickable = false;
  sphere.visibility = 0.5;

  const sphereMat = new PBRMaterial('', scene);
  sphereMat.metallic = 0;
  sphereMat.roughness = 0.1;
  sphereMat.albedoColor = new Color3.FromHexString('#7157D9').toLinearSpace();
  // sphereMat.specularColor = Color3.Black();
  sphere.material = sphereMat;

  //
  // Draw texture
  //

  const textureCamera = new Camera('camera', Vector3.Zero(), null);

  const texureSize = 1000;

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

  //
  // Move ball
  //

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

  let lastPosition = sphere.position;
  function moveBall() {
    const pickInfo = scene.pick(scene.pointerX, scene.pointerY);

    let pickPoint = lastPosition;
    if (pickInfo.hit) {
      pickPoint = pickInfo.pickedPoint;
      lastPosition = pickPoint;
    }

    Vector3.LerpToRef(sphere.position, pickPoint, 0.2, sphere.position);

    sphere.position.y = isDrawing ? penSize / 2 : penSize;
  }

  //
  // Ground
  //

  const groundMat = new PBRMaterial('m', scene);
  groundMat.albedoColor = Color3.FromHexString('#FF66A1').toLinearSpace();
  groundMat.metallic = 0.05;
  groundMat.roughness = 0.35;
  // groundMat.wireframe = true;
  ground.material = groundMat;

  groundMat.customShaderNameResolve = (
    shaderName,
    uniforms,
    uniformBuffers,
    samplers,
    defines,
    attributes,
    options,
  ) => {
    Effect.ShadersStore.customVertexShader = Effect.ShadersStore.pbrVertexShader;
    Effect.ShadersStore.customPixelShader = Effect.ShadersStore.pbrPixelShader;

    uniforms.push('planeSize');
    uniforms.push('penSize');

    samplers.push('heightTexture');

    Effect.ShadersStore.customVertexShader = Effect.ShadersStore.customVertexShader
      .replace(`#define CUSTOM_VERTEX_DEFINITIONS`, ground_vertexDefinitions)
      .replace(`#define CUSTOM_VERTEX_UPDATE_POSITION`, ground_vertexBeforePositionUpdated);

    return 'custom';
  };

  groundMat.onBind = () => {
    groundMat.getEffect().setTexture('heightTexture', effectTexture);
    groundMat.getEffect().setFloat('penSize', penSize);
    groundMat.getEffect().setFloat('planeSize', planeSize);
  };

  // ----------------------------

  let prevPenPosition = 0;
  return {
    render({ time, width, height, deltaTime }) {
      moveBall();

      const penPosition = new Vector2(sphere.position.x / planeSize, sphere.position.z / planeSize);
      if (!prevPenPosition) {
        prevPenPosition = penPosition;
      }
      effectTexture.setVector2('penPosition', penPosition);
      effectTexture.setVector2('prevPenPosition', prevPenPosition);
      prevPenPosition = penPosition;
      effectTexture.setFloat('penSize', penSize / planeSize);
      effectTexture.setInt('isDrawing', isDrawing ? 1 : 0);
      effectTexture.setFloat('fadeFactor', 0.00175);
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

canvasSketch(sketch, settings);
