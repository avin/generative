import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { PBRCustomMaterial } from '@babylonjs/materials/custom/pbrCustomMaterial';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData';
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader';
import '@babylonjs/core/Loading/loadingScreen';
// import '@babylonjs/loaders/glTF';
import '@babylonjs/loaders/glTF/2.0/glTFLoader';
import '@babylonjs/loaders/glTF/2.0/Extensions/KHR_draco_mesh_compression';
import colors from 'nice-color-palettes';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { Effect } from '@babylonjs/core/Materials/effect';
import { PostProcess } from '@babylonjs/core';
import postprocessFragment from './shaders/postprocess/fragment.glsl';
import sphere_vertexDefinitions from './shaders/sphere/vertexDefinitions.glsl';
import sphere_vertexBeforePositionUpdated from './shaders/sphere/vertexBeforePositionUpdated.glsl';
import sphere_fragmentDefinitions from './shaders/sphere/fragmentDefinitions.glsl';
import sphere_fragmentCustomAlpha from './shaders/sphere/fragmentCustomAlpha.glsl';

const colorPalette = [...colors[0], '#ffff00'];

const settings = {
  animate: true,
  context: 'webgl',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  //
  // Main scene ===============================
  //

  const initTime = +new Date();

  const scene = new Scene(engine);
  scene.clearColor = Color4.FromColor3(new Color3(245 / 255, 248 / 255, 250 / 255));

  const cAlpha = Math.PI / 4;
  const cBeta = Math.PI / 3;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 6.0, new Vector3(0, 0, 0), scene);
  camera.wheelPrecision = 50;
  camera.minZ = 0.1;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.125, 0.125, 0.125);
  baseLight.specular = new Color3(1.0, 1.0, 1.0);

  // const pLight = new PointLight('pLight', new Vector3(0,0,0), scene);
  // pLight.intensity = 10;

  SceneLoader.ShowLoadingScreen = false;
  await SceneLoader.AppendAsync('./', 'static/assets/models/torus-big.glb', scene);

  scene.meshes.forEach((m) => m.setEnabled(false));

  // const meshes = scene.meshes.slice(1, 7);
  const meshes = scene.meshes.slice(1, 7);

  let sphereBufferMatricesSize = 0;
  let sphereColorsSize = 0;
  let spherePositionsSize = 0;
  meshes.forEach((m) => {
    const positions = m.getVerticesData(VertexBuffer.PositionKind).length / 3;
    sphereBufferMatricesSize += positions * 16;
    sphereColorsSize += positions * 4;
    spherePositionsSize += positions * 3;
  });

  const sphereBufferMatrices = new Float32Array(sphereBufferMatricesSize);
  const sphereBufferColors = new Float32Array(sphereColorsSize);
  const sphereBufferPositions = new Float32Array(spherePositionsSize);

  const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 0.05, segments: 4 }, scene);

  let total = 0;
  meshes.forEach((torus, idx) => {
    const torusPositions = torus.getVerticesData(VertexBuffer.PositionKind);
    torus.dispose();

    const color = Color3.FromHexString(colorPalette[idx % colorPalette.length])
      .toLinearSpace()
      .toLinearSpace();

    for (let i = 0; i < torusPositions.length / 3; i += 1) {
      const x = torusPositions[i * 3 + 0];
      const y = torusPositions[i * 3 + 1];
      const z = torusPositions[i * 3 + 2];

      const a = Vector3.GetAngleBetweenVectors(new Vector3(x, y, z), new Vector3(1, 0, 0), new Vector3(0, 1, 0));

      if (a < 1.4) {
        const matrix = Matrix.Translation(x, y, z);
        matrix.copyToArray(sphereBufferMatrices, total * 16);

        sphereBufferColors[total * 4 + 0] = color.r;
        sphereBufferColors[total * 4 + 1] = color.g;
        sphereBufferColors[total * 4 + 2] = color.b;
        sphereBufferColors[total * 4 + 3] = 1;

        sphereBufferPositions[total * 3 + 0] = x;
        sphereBufferPositions[total * 3 + 1] = y;
        sphereBufferPositions[total * 3 + 2] = z;
      }
      total += 1;
    }
  });

  sphere.thinInstanceSetBuffer('matrix', sphereBufferMatrices, 16);
  sphere.thinInstanceSetBuffer('color', sphereBufferColors, 4);
  sphere.thinInstanceSetBuffer('mPos', sphereBufferPositions, 3);

  // const mat = new CustomMaterial('plastic', scene);
  const mat = new PBRCustomMaterial('plastic', scene);
  // mat.wireframe = true;
  mat.metallic = 0.0;
  mat.roughness = 0.2;
  // mat.albedoColor = new Color3(1, 1, 1);
  sphere.material = mat;

  mat.AddAttribute('mPos');

  mat.Vertex_Definitions(sphere_vertexDefinitions);
  mat.Vertex_Before_PositionUpdated(sphere_vertexBeforePositionUpdated);
  mat.Fragment_Definitions(sphere_fragmentDefinitions);
  mat.Fragment_Custom_Alpha(sphere_fragmentCustomAlpha);

  mat.AddUniform('iTime', 'float');
  mat.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    mat.getEffect().setFloat('iTime', time);
  };

  // -------------------

  Effect.ShadersStore.customFragmentShader = postprocessFragment;
  new PostProcess('shade-sides', 'custom', null, null, 1.0, camera);

  const defaultPipeline = new DefaultRenderingPipeline('default', true, scene, [camera]);
  defaultPipeline.fxaaEnabled = true;
  defaultPipeline.samples = 8;

  defaultPipeline.imageProcessingEnabled = false;

  // defaultPipeline.chromaticAberrationEnabled = true;
  // defaultPipeline.chromaticAberration.aberrationAmount = 2.5;

  return {
    render({ time, width, height, frame, deltaTime }) {
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
