import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Matrix, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { Mesh } from '@babylonjs/core/Meshes/mesh';

import blob_vertexDefinitions from './shaders/blob/vertexDefinitions.glsl';
import blob_vertexBeforePositionUpdated from './shaders/blob/vertexBeforePositionUpdated.glsl';
import blob_vertexAfterWorldPosComputed from './shaders/blob/vertexAfterWorldPosComputed.glsl';
import blob_fragmentDefinitions from './shaders/blob/fragmentDefinitions.glsl';
import blob_fragmentCustomDiffuse from './shaders/blob/fragmentCustomDiffuse.glsl';

import round_vertexDefinitions from './shaders/round/vertexDefinitions.glsl';
import round_vertexBeforePositionUpdated from './shaders/round/vertexBeforePositionUpdated.glsl';
import round_vertexAfterWorldPosComputed from './shaders/round/vertexAfterWorldPosComputed.glsl';
import round_fragmentDefinitions from './shaders/round/fragmentDefinitions.glsl';
import round_fragmentCustomDiffuse from './shaders/round/fragmentCustomDiffuse.glsl';
import round_fragmentBeforeFragColor from './shaders/round/fragmentBeforeFragColor.glsl';

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
  // Settings ===============================
  //

  const rowSize = 200;
  const density = 0.25;
  const rainHeight = 50;
  const speedFactor = 0.25;

  const initTime = +new Date();

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = Color3.FromHexString('#0F1A31');
  scene.fogMode = Scene.FOGMODE_EXP2;
  scene.fogDensity = 0.0225;
  scene.fogColor = Color3.FromHexString('#0F1A31');

  const camera = new ArcRotateCamera('camera', -2.17, 1.39, 10.98, new Vector3(0, 0, 0), scene);
  camera.fov = 1.0;
  camera.minZ = 0.1;
  camera.lowerRadiusLimit = 1;
  camera.upperRadiusLimit = 50;
  camera.wheelDeltaPercentage = 0.01;
  camera.pinchDeltaPercentage = 0.01;
  camera.lowerBetaLimit = 0;
  camera.upperBetaLimit = Math.PI / 2 - 0.001;

  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);
  baseLight.diffuse = new Color3(1.0, 1.0, 1.0);
  baseLight.groundColor = new Color3(0.0, 0.0, 0.0);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);
  baseLight.intensity = 1.0;

  // -----------------------------

  const groundMaterial = new StandardMaterial('ground', scene);
  groundMaterial.diffuseColor = Color3.FromHexString('#0C0F17');
  groundMaterial.specularColor = Color3.Black();

  const ground = MeshBuilder.CreateGround(
    'ground',
    {
      width: rowSize * density + 1,
      height: rowSize * density + 1,
    },
    scene,
  );
  ground.material = groundMaterial;

  // -----------------------------

  const roundMeshMaterial = new CustomMaterial('roundMeshMaterial', scene);
  roundMeshMaterial.diffuseColor = Color3.FromHexString('#7799B1');
  roundMeshMaterial.specularColor = new Color3(0, 0, 0);
  roundMeshMaterial.emissiveColor = new Color3(0.175, 0.175, 0.175);
  roundMeshMaterial.alpha = 0.9;

  const roundMesh = (() => {
    const mesh = MeshBuilder.CreateTube(
      'torus',
      {
        path: (() => {
          const path = [];
          const size = 0.5;
          const segments = 16;
          const step = (Math.PI * 2) / segments;
          for (let i = 0; i <= Math.PI * 2 + 0.001; i += step) {
            path.push(new Vector3(Math.cos(i) * size, 0, Math.sin(i) * size));
          }
          return path;
        })(),
        radius: 0.01,
        tessellation: 3,
      },
      scene,
    );
    mesh.material = roundMeshMaterial;

    return mesh;
  })();

  // Blob material

  const blobMaterial = new CustomMaterial('blobMaterial', scene);
  blobMaterial.specularColor = new Color3.FromHexString('#7799B1');
  blobMaterial.emissiveColor = new Color3(0.175, 0.175, 0.175);
  blobMaterial.alpha = 0.8;

  // Blob meshes

  const blobMesh = (() => {
    const path = [];
    const segments = 2;
    for (let i = 0; i < 1; i += 1 / segments) {
      const x = 0;
      const y = i;
      const z = 0;
      path.push(new Vector3(x, y, z));
    }
    const mesh = MeshBuilder.CreateTube('tube', {
      path,
      tessellation: 3,
      radiusFunction: i => {
        const maxRadius = 0.0125;
        const f = 1 - (i + 1) / segments;
        return maxRadius * f;
      },
      cap: Mesh.CAP_START,
      scene,
      updatable: false,
      sideOrientation: Mesh.DEFAULTSIDE,
    });
    mesh.material = blobMaterial;

    return mesh;
  })();

  const meshesCount = rowSize * rowSize;

  const bufferMatrices = new Float32Array(16 * meshesCount);
  const bufferIdx = new Float32Array(meshesCount);
  const bufferRFactor1 = new Float32Array(meshesCount);

  let n = 0;
  for (let x = 0; x < rowSize; x += 1) {
    for (let y = 0; y < rowSize; y += 1) {
      const rx = x + (Math.random() - 0.5);
      const ry = y + (Math.random() - 0.5);
      // const ry = 0;
      const matrix = Matrix.Translation((rx - rowSize / 2) * density, 0, (ry - rowSize / 2) * density);
      matrix.copyToArray(bufferMatrices, n * 16);
      bufferIdx[n] = n;
      bufferRFactor1[n] = Math.random();

      n += 1;
    }
  }

  blobMesh.thinInstanceSetBuffer('matrix', bufferMatrices, 16);
  blobMesh.thinInstanceSetBuffer('idx', bufferIdx, 1);
  blobMesh.thinInstanceSetBuffer('rFactor1', bufferRFactor1, 1);

  roundMesh.thinInstanceSetBuffer('matrix', bufferMatrices, 16);
  roundMesh.thinInstanceSetBuffer('idx', bufferIdx, 1);
  roundMesh.thinInstanceSetBuffer('rFactor1', bufferRFactor1, 1);

  // ---------------------------------------

  blobMaterial.Vertex_Definitions(blob_vertexDefinitions);
  blobMaterial.Vertex_Before_PositionUpdated(blob_vertexBeforePositionUpdated);
  blobMaterial.Vertex_After_WorldPosComputed(blob_vertexAfterWorldPosComputed);
  blobMaterial.Fragment_Definitions(blob_fragmentDefinitions);
  blobMaterial.Fragment_Custom_Diffuse(blob_fragmentCustomDiffuse);

  roundMeshMaterial.Vertex_Definitions(round_vertexDefinitions);
  roundMeshMaterial.Vertex_Before_PositionUpdated(round_vertexBeforePositionUpdated);
  roundMeshMaterial.Vertex_After_WorldPosComputed(round_vertexAfterWorldPosComputed);
  roundMeshMaterial.Fragment_Definitions(round_fragmentDefinitions);
  roundMeshMaterial.Fragment_Custom_Diffuse(round_fragmentCustomDiffuse);
  roundMeshMaterial.Fragment_Before_FragColor(round_fragmentBeforeFragColor);

  [blobMaterial, roundMeshMaterial].forEach(material => {
    material.AddAttribute('rFactor1');
    material.AddAttribute('idx');

    material.AddUniform('iTime', 'float');
    material.AddUniform('speedFactor', 'float');
    material.AddUniform('rainHeight', 'float');

    material.onBind = () => {
      const time = (+new Date() - initTime) * 0.001;
      material.getEffect().setFloat('iTime', time);
      material.getEffect().setFloat('speedFactor', speedFactor);
      material.getEffect().setFloat('rainHeight', rainHeight);
    };
  });

  // ---------------------------------------

  const defaultPipeline = new DefaultRenderingPipeline('default', false, scene, [camera]);
  defaultPipeline.fxaaEnabled = true;
  defaultPipeline.samples = 8;

  //
  defaultPipeline.bloomEnabled = true;
  defaultPipeline.bloomThreshold = 0.17;
  defaultPipeline.bloomWeight = 5.0;
  defaultPipeline.bloomKernel = 100;
  defaultPipeline.bloomScale = 0.9;

  // ---------------------------------------

  // ---------------------------------------

  return {
    render({ time, deltaTime }) {
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
