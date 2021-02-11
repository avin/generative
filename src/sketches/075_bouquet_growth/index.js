import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Matrix, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Rendering/prePassRendererSceneComponent';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';
import { PostProcess } from '@babylonjs/core';
import intersect from 'ray-sphere-intersection';
import { Effect } from '@babylonjs/core/Materials/effect';
import { PBRCustomMaterial } from '@babylonjs/materials/custom/pbrCustomMaterial';
import get from 'lodash/get';
import set from 'lodash/set';

import postprocessFragment from './shaders/postprocess/fragment.glsl';
import sphere_vertexDefinitions from './shaders/sphere/vertexDefinitions.glsl';
import sphere_vertexBeforePositionUpdated from './shaders/sphere/vertexBeforePositionUpdated.glsl';

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
  scene.clearColor = Color3.FromHexString('#10161A');

  const cAlpha = -Math.PI / 3;
  const cBeta = Math.PI / 2.5;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 7.0, new Vector3(0, 5, 0), scene);
  camera.minZ = 0.1;
  camera.fov = 1.5;
  camera.wheelPrecision = 20;
  camera.useAutoRotationBehavior = true;
  camera.autoRotationBehavior.idleRotationSpeed = 0.1;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-0.25, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  // baseLight.groundColor = new Color3(1, 1, 1);
  baseLight.specular = new Color3(0.25, 0.25, 0.25);

  // ----------------------------

  const sphereRadius = 0.1;
  const area = 10;

  // ----------------------------

  const sphere = MeshBuilder.CreateSphere(
    's',
    {
      diameter: sphereRadius * 1.25,
      segments: 6,
    },
    scene,
  );

  // ----------------------------

  const objects = [];

  const clusterSize = sphereRadius;
  const cluster = {};

  const getClusterAddress = (pos) => {
    const x = pos[0] + area / 2;
    const y = pos[2] + area / 2;

    return [Math.round(x / clusterSize), Math.round(y / clusterSize)];
  };

  const totalSpheres = 50000;
  const bufferMatrices = new Float32Array(16 * totalSpheres);
  const bufferColors = new Float32Array(4 * totalSpheres);
  const bufferBornTimes = new Float32Array(totalSpheres);

  let idx = 0;
  const createObject = (pos, gen, bornTime) => {
    const matrix = Matrix.Translation(pos[0], pos[1], pos[2]);
    matrix.copyToArray(bufferMatrices, idx * 16);

    gen = gen || 0;
    gen += 0.01;

    const c = new Color3();
    Color3.HSVtoRGBToRef((gen * 360 + 10) % 360, 0.75, 1, c);
    c.toLinearSpaceToRef(c);

    bufferColors[4 * idx + 0] = c.r;
    bufferColors[4 * idx + 1] = c.g;
    bufferColors[4 * idx + 2] = c.b;

    bufferBornTimes[idx] = bornTime;

    const obj = { pos, gen };
    objects.push(obj);

    const [cx, cy] = getClusterAddress(pos);

    const items = get(cluster, [cx, cy], []);
    items.push(obj);
    set(cluster, [cx, cy], items);

    idx += 1;
  };

  const dropDirection = [0, -1, 0];
  const addItem = (startPos, time) => {
    const origin = startPos;

    let hit;
    if (startPos[0] < Math.sqrt(1 ** 2 - startPos[2] ** 2) && startPos[2] < Math.sqrt(1 ** 2 - startPos[0] ** 2)) {
      hit = [startPos[0], 0, startPos[2]];
    }

    let nextGen = Math.random() * 360;

    const [cx, cy] = getClusterAddress(startPos);

    let findObjects = [];
    for (let x = -1; x <= 1; x += 1) {
      for (let y = -1; y <= 1; y += 1) {
        findObjects = [...findObjects, ...get(cluster, [cx + x, cy + y], [])];
      }
    }

    for (let i = 0; i < findObjects.length; i += 1) {
      const { pos, gen } = findObjects[i];

      const center = pos;
      const radius = sphereRadius;

      const curHit = intersect([], origin, dropDirection, center, radius);
      if (curHit && !hit) {
        hit = curHit;
        nextGen = gen;
      } else if (curHit && curHit[1] > hit[1]) {
        hit = curHit;
        nextGen = gen;
      }
    }

    if (hit) {
      createObject(hit, nextGen, time);
    }
  };

  // ---------------------------------------

  const mat = new PBRCustomMaterial('plastic', scene);
  mat.metallic = 0.0;
  mat.roughness = 0.3;
  sphere.material = mat;

  mat.AddAttribute('bornTime');

  mat.Vertex_Definitions(sphere_vertexDefinitions);
  mat.Vertex_Before_PositionUpdated(sphere_vertexBeforePositionUpdated);

  // ---------------------------------------

  mat.AddUniform('iTime', 'float');

  const initTime = +new Date();
  mat.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    mat.getEffect().setFloat('iTime', time);
  };

  // ---------------------------------------

  const ssao = new SSAO2RenderingPipeline('ssao', scene, {
    ssaoRatio: 1.5,
    blurRatio: 1,
  });
  ssao.radius = sphereRadius * 10;
  ssao.totalStrength = 1.0;
  ssao.expensiveBlur = true;
  ssao.samples = 32;
  ssao.maxZ = 100;

  scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline('ssao', camera);

  Effect.ShadersStore.customFragmentShader = postprocessFragment;
  new PostProcess('shade-sides', 'custom', null, null, 1.0, camera);

  const defaultPipeline = new DefaultRenderingPipeline('default', true, scene, [camera]);
  defaultPipeline.fxaaEnabled = true;
  defaultPipeline.imageProcessingEnabled = false;
  defaultPipeline.samples = 8;

  defaultPipeline.bloomEnabled = true;
  defaultPipeline.bloomThreshold = 0.0;
  defaultPipeline.bloomWeight = 0.1;
  defaultPipeline.bloomKernel = 100;
  defaultPipeline.bloomScale = 0.9;

  defaultPipeline.grainEnabled = true;
  defaultPipeline.grain.intensity = 5;
  defaultPipeline.grain.animated = true;

  let prevCTime = 0;
  return {
    render({ time, width, height, frame, deltaTime }) {
      if (objects.length < totalSpheres) {
        for (let i = 0; i < 100; i += 1) {
          const startPos = [(Math.random() - 0.5) * area, totalSpheres, (Math.random() - 0.5) * area];
          addItem(startPos, time);
        }

        const cTime = Math.floor(time * 10);
        if (cTime !== prevCTime) {
          sphere.thinInstanceSetBuffer('matrix', bufferMatrices, 16);
          sphere.thinInstanceSetBuffer('color', bufferColors, 4);
          sphere.thinInstanceSetBuffer('bornTime', bufferBornTimes, 1);

          prevCTime = cTime;
        }
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
