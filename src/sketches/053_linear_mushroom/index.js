import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { Vector2, Vector3, Matrix, Quaternion } from '@babylonjs/core/Maths/math';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { Effect } from '@babylonjs/core/Materials/effect';
import { ShaderMaterial } from '@babylonjs/core/Materials/shaderMaterial';
import { Camera } from '@babylonjs/core/Cameras/camera';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';

import tube_vertexDefinitions from './shaders/tube/vertexDefinitions.glsl';
import tube_vertexBeforePositionUpdated from './shaders/tube/vertexBeforePositionUpdated.glsl';
import tube_fragmentDefinitions from './shaders/tube/fragmentDefinitions.glsl';
import tube_fragmentCustomDiffuse from './shaders/tube/fragmentCustomDiffuse.glsl';

import backgroundFragment from './shaders/background/fragment.glsl';
import backgroundVertex from './shaders/background/vertex.glsl';

const settings = {
  animate: true,
  context: 'webgl',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true);

  //
  // Settings ===============================
  //

  const tubeHeight = 90;
  const tubeSegments = 1000;
  const tubeSegmentStep = tubeHeight / tubeSegments;
  const tubeRadius = 10;
  const tubeTessellation = 100;

  const initTime = +new Date();

  //
  // Background scene ===============================
  //

  Effect.ShadersStore.backgroundVertexShader = backgroundVertex;
  Effect.ShadersStore.backgroundFragmentShader = backgroundFragment;

  const bScene = new Scene(engine);
  const bCamera = new ArcRotateCamera('camera1', 0, 0, 2, Vector3.Zero(), bScene);
  bCamera.mode = Camera.ORTHOGRAPHIC_CAMERA;

  bCamera.orthoTop = 1;
  bCamera.orthoBottom = -1;
  bCamera.orthoLeft = -1;
  bCamera.orthoRight = 1;

  const shader = new ShaderMaterial(
    'shader',
    bScene,
    {
      vertex: 'background',
      fragment: 'background',
    },
    {
      attributes: ['position', 'normal', 'uv'],
      uniforms: ['world', 'worldView', 'worldViewProjection', 'view', 'iTime', 'iResolution'],
    },
  );

  shader.setVector2('iResolution', new Vector2(1, 1));

  const ground = MeshBuilder.CreateGround(
    'ground',
    {
      width: 2,
      height: 2,
      subdivisions: 1,
    },
    bScene,
  );
  ground.material = shader;
  ground.material.backFaceCulling = false;
  ground.rotation.y = -Math.PI / 2;

  bScene.registerBeforeRender(() => {
    const time = (+new Date() - initTime) * 0.001;
    shader.setFloat('iTime', time);
    const aRatio = bScene.getEngine().getAspectRatio(bCamera);
    shader.setVector2('iResolution', new Vector2(aRatio, 1));
  });

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.autoClear = false;

  const camera = new ArcRotateCamera('camera', Math.PI / 1.5, Math.PI / 2 + 0.4, 60.0, new Vector3(0, 0, 0), scene);

  camera.lowerBetaLimit = Math.PI / 8;
  camera.upperBetaLimit = Math.PI - Math.PI / 8;
  camera.lowerRadiusLimit = 30;
  camera.upperRadiusLimit = 100;

  camera.lowerAlphaLimit = null;
  camera.upperAlphaLimit = null;
  camera.allowUpsideDown = true;

  camera.allowUpsideDown = true;
  camera.attachControl(canvas, true);
  camera.fov = 1.0;
  camera.minZ = 0.1;
  camera.useAutoRotationBehavior = true;
  camera.autoRotationBehavior.idleRotationSpeed = 0.02;
  // camera.autoRotationBehavior.idleRotationSpeed = 0.19;

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.intensity = 1.5;
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.specular = new Color3(1.25, 1.25, 1.25);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);

  const tubeMaterial = new CustomMaterial('tubeMaterial', scene);
  tubeMaterial.diffuseTexture = new Texture('NONE', scene); // to appear UV attributes
  tubeMaterial.diffuseColor = new Color3(138 / 255, 155 / 255, 168 / 255);
  tubeMaterial.specularColor = new Color3(0.0, 0.0, 0.0);
  tubeMaterial.freeze();

  //
  // Meshes
  //

  const path = [];
  for (let i = 0; i < tubeSegments; i += 1) {
    path.push(new Vector3(0, (i - tubeSegments / 2) * tubeSegmentStep, 0));
  }

  const tube = MeshBuilder.CreateTube('tube', {
    path,
    radius: tubeRadius,
    tessellation: tubeTessellation,
    updatable: false,
  });
  tube.material = tubeMaterial;

  const total = 2;

  const tubeBufferMatrices = new Float32Array(16 * total);
  const tubeBufferIdxes = new Float32Array(total);

  for (let i = 0; i < total; i += 1) {
    const resultMatrix = Matrix.Compose(new Vector3(1, 1, 1), new Quaternion(), new Vector3());
    resultMatrix.copyToArray(tubeBufferMatrices, 16 * i);

    tubeBufferIdxes[i] = i;
  }

  tube.thinInstanceSetBuffer('matrix', tubeBufferMatrices, 16, true);
  tube.thinInstanceSetBuffer('idx', tubeBufferIdxes, 1, true);

  //
  // Shaders
  //

  tubeMaterial.AddAttribute('idx');

  tubeMaterial.Vertex_Definitions(tube_vertexDefinitions);
  tubeMaterial.Vertex_Before_PositionUpdated(tube_vertexBeforePositionUpdated);
  tubeMaterial.Fragment_Definitions(tube_fragmentDefinitions);
  tubeMaterial.Fragment_Custom_Diffuse(tube_fragmentCustomDiffuse);

  //
  // Attributes
  //

  tubeMaterial.AddUniform('iTime', 'float');
  tubeMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    tubeMaterial.getEffect().setFloat('iTime', time);
  };

  return {
    render({ time, width, height }) {
      bScene.render();
      scene.render();
    },
    resize({ pixelRatio, width, height }) {
      engine.resize();
    },
    unload() {
      engine.dispose();
    },
    babylonScene: scene,
  };
};

export default { sketch, settings };
