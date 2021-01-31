import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Matrix, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { Mesh } from '@babylonjs/core/Meshes/mesh';

import star_vertexDefinitions from './shaders/star/vertexDefinitions.glsl';
import star_vertexBeforePositionUpdated from './shaders/star/vertexBeforePositionUpdated.glsl';
import star_vertexAfterWorldPosComputed from './shaders/star/vertexAfterWorldPosComputed.glsl';
import star_fragmentDefinitions from './shaders/star/fragmentDefinitions.glsl';
import star_fragmentCustomDiffuse from './shaders/star/fragmentCustomDiffuse.glsl';

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
  const density = 0.125;
  const rainHeight = 50;
  const speedFactor = 0.25;

  const spaceColor = Color3.FromHexString('#10161A');
  const starColor = Color3.FromHexString('#F5F8FA');

  const initTime = +new Date();

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = spaceColor;
  scene.fogMode = Scene.FOGMODE_EXP2;
  scene.fogDensity = 0.0225;
  scene.fogColor = spaceColor;

  const camera = new ArcRotateCamera('camera', -2, 0, 50, new Vector3(0, 0, 0), scene);
  camera.fov = 1.0;
  camera.minZ = 0.1;

  // camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);
  baseLight.diffuse = new Color3(1.0, 1.0, 1.0);
  baseLight.groundColor = new Color3(0.0, 0.0, 0.0);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);
  baseLight.intensity = 1.0;

  // -----------------------------

  // star material

  const starMaterial = new CustomMaterial('starMaterial', scene);
  starMaterial.specularColor = starColor;
  starMaterial.emissiveColor = new Color3(0.175, 0.175, 0.175);
  starMaterial.alpha = 0.8;

  // Blob meshes

  const starMesh = (() => {
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
      tessellation: 5,
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
    mesh.material = starMaterial;

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

  starMesh.thinInstanceSetBuffer('matrix', bufferMatrices, 16);
  starMesh.thinInstanceSetBuffer('idx', bufferIdx, 1);
  starMesh.thinInstanceSetBuffer('rFactor1', bufferRFactor1, 1);

  // ---------------------------------------

  starMaterial.Vertex_Definitions(star_vertexDefinitions);
  starMaterial.Vertex_Before_PositionUpdated(star_vertexBeforePositionUpdated);
  starMaterial.Vertex_After_WorldPosComputed(star_vertexAfterWorldPosComputed);
  starMaterial.Fragment_Definitions(star_fragmentDefinitions);
  starMaterial.Fragment_Custom_Diffuse(star_fragmentCustomDiffuse);

  starMaterial.AddAttribute('rFactor1');
  starMaterial.AddAttribute('idx');

  starMaterial.AddUniform('iTime', 'float');
  starMaterial.AddUniform('speedFactor', 'float');
  starMaterial.AddUniform('rainHeight', 'float');

  starMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    starMaterial.getEffect().setFloat('iTime', time);
    starMaterial.getEffect().setFloat('speedFactor', speedFactor);
    starMaterial.getEffect().setFloat('rainHeight', rainHeight);
  };

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
