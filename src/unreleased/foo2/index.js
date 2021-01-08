import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector2, Vector3 } from '@babylonjs/core/Maths/math';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { Effect } from '@babylonjs/core/Materials/effect';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { ProceduralTexture, RenderTargetTexture } from '@babylonjs/core';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { Camera } from '@babylonjs/core/Cameras/camera';

import baseVertex from './shaders/vert.glsl';
import commonShader from './shaders/common.glsl';
import imageFragment from './shaders/imageFrag.glsl';
import bufferAFragment from './shaders/bufferAFrag.glsl';
import bufferBFragment from './shaders/bufferBFrag.glsl';

const settings = {
  animate: true,
  context: 'webgl2',
};

Effect.ShadersStore.bufferAVertexShader = baseVertex;
Effect.ShadersStore.bufferAFragmentShader = `${commonShader}\n${bufferAFragment}`;

Effect.ShadersStore.bufferBVertexShader = baseVertex;
Effect.ShadersStore.bufferBFragmentShader = `${commonShader}\n${bufferBFragment}`;

Effect.ShadersStore.imageVertexShader = baseVertex;
Effect.ShadersStore.imageFragmentShader = `${commonShader}\n${imageFragment}`;

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  // ----------------------------------

  const scene = new Scene(engine);

  // ----- BACK ---------

  const createRenderTarget = (bufferTexture, layerMask) => {
    const oCamera = new ArcRotateCamera('camera1', 0, 0, 10, Vector3.Zero(), scene);
    oCamera.layerMask = layerMask;
    oCamera.setTarget(Vector3.Zero());
    oCamera.mode = Camera.ORTHOGRAPHIC_CAMERA;

    oCamera.orthoTop = 1;
    oCamera.orthoBottom = -1;
    oCamera.orthoLeft = -1;
    oCamera.orthoRight = 1;

    const oLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
    oLight.diffuse = new Color3(1, 1, 1);
    oLight.groundColor = new Color3(1, 1, 1);
    oLight.specular = new Color3(0.0, 0.0, 0.0);
    oLight.includeOnlyWithLayerMask = layerMask;

    const oMaterial = new StandardMaterial('base', scene);
    oMaterial.backFaceCulling = true;
    // oMaterial.diffuseColor = Color3.Green();

    const oGround = Mesh.CreateGround('ground1', 2, 2, 1, scene);
    oGround.material = oMaterial;
    oGround.layerMask = layerMask;

    oGround.rotation.y = -Math.PI / 2;

    const renderTarget = new RenderTargetTexture(
      'render to texture', // name
      512, // texture size
      scene, // the scene
    );
    scene.customRenderTargets.push(renderTarget);
    renderTarget.activeCamera = oCamera;
    renderTarget.renderList.push(oGround);
    oMaterial.diffuseTexture = bufferTexture;

    return renderTarget;
  };

  // --------------------

  const cAlpha = Math.PI / 4;
  const cBeta = Math.PI / 3;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 3.0, new Vector3(0, 0, 0), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);
  scene.activeCamera = camera;

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(1.0, 1.0, 1.0);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);

  // -----------------------------------------------------

  scene.onNewLightAdded = (newLight, positionInArray, scene) => {
    newLight.excludeWithLayerMask = 0x10000000;
  };

  const bufferATexture = new ProceduralTexture('bufferA', 512, 'bufferA', scene, null, false, false);
  bufferATexture.setTexture('iChannel0', createRenderTarget(bufferATexture, 0x10000000));

  const bufferBTexture = new ProceduralTexture('bufferB', 512, 'bufferB', scene, null, false, false);
  bufferBTexture.setTexture('iChannel0', bufferATexture);
  bufferBTexture.setTexture('iChannel1', createRenderTarget(bufferBTexture, 0x20000000));

  const imageTexture = new ProceduralTexture('image', 512, 'image', scene, null, false, false);
  imageTexture.setTexture('iChannel0', bufferATexture);
  imageTexture.setTexture('iChannel1', bufferBTexture);

  const material = new StandardMaterial('mat', scene);
  material.diffuseTexture = bufferATexture;

  const ground = MeshBuilder.CreateGround(
    'ground1',
    {
      width: 4,
      height: 4,
      subdivisions: 1,
    },
    scene,
  );
  ground.material = material;
  ground.material.backFaceCulling = true;

  // renderTarget.renderList.push(ground);

  // scene.activeCamera = oCamera;

  const layers = [bufferATexture, bufferBTexture, imageTexture];

  return {
    render({ time, frame }) {
      for (let i = 0; i < layers.length; i += 1) {
        const layer = layers[i];

        layer.setInt('iFrame', frame);
        layer.setFloat('iTime', time);
        layer.setVector2('iResolution', new Vector2(1, 1));
      }

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
