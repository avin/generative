import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Rendering/prePassRendererSceneComponent';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';
import { Ray } from '@babylonjs/core';
import intersect from 'ray-sphere-intersection';
import get from 'lodash/get';
import set from 'lodash/set';

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

  const cAlpha = -Math.PI / 2;
  const cBeta = Math.PI / 3;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 7.0, new Vector3(0, 2, 0), scene);
  camera.minZ = 0.1;
  camera.fov = 1.0;
  camera.wheelPrecision = 20;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  baseLight.specular = new Color3(0.25, 0.25, 0.25);

  // ----------------------------

  const sphereRadius = 0.1;
  const area = 3;

  // ----------------------------

  const sphere = MeshBuilder.CreateSphere(
    's',
    {
      diameter: sphereRadius * 1.5,
      segments: 6,
    },
    scene,
  );
  // sphere.isVisible = false;

  sphere.thinInstanceRegisterAttribute('color', 4);

  // ----------------------------

  const isRunning = true;
  const objects = [];

  const clusterSize = sphereRadius * 1;
  const cluster = {};

  const dropDirection = new Vector3(0, -1, 0);

  const getClusterAddress = (pos) => {
    const x = pos[0] + area / 2;
    const y = pos[2] + area / 2;

    return [Math.round(x / clusterSize), Math.round(y / clusterSize)];
  };

  const createObject = (pos) => {
    // const instance = sphere.createInstance('i');
    // instance.position = pos;
    // objects.push(instance);

    const matrix = Matrix.Translation(pos[0], pos[1], pos[2]);
    const idx = sphere.thinInstanceAdd(matrix);

    const c = new Color3();
    Color3.HSVtoRGBToRef(((pos[1] / 5) * 360 + 10) % 360, 0.75, 1, c);
    sphere.thinInstanceSetAttributeAt('color', idx, [c.r, c.g, c.b, 1]);

    const obj = { pos };
    objects.push(obj);

    const [cx, cy] = getClusterAddress(pos);

    const items = get(cluster, [cx, cy], []);
    items.push(obj);
    set(cluster, [cx, cy], items);
  };

  const addItem = (startPos) => {
    const origin = startPos;
    const direction = [0, -1, 0];

    let hit = [startPos[0], 0, startPos[2]];

    const [cx, cy] = getClusterAddress(startPos);

    let findObjects = [];
    for (let x = -1; x <= 1; x += 1) {
      for (let y = -1; y <= 1; y += 1) {
        findObjects = [...findObjects, ...get(cluster, [cx + x, cy + y], [])];
      }
    }

    for (let i = 0; i < findObjects.length; i += 1) {
      const { pos } = findObjects[i];

      const center = pos;
      const radius = sphereRadius;

      const curHit = intersect([], origin, direction, center, radius);
      if (curHit && curHit[1] > hit[1]) {
        hit = curHit;
      }
    }

    createObject(hit);
  };

  // ---------------------------------------

  const ssao = new SSAO2RenderingPipeline('ssao', scene, {
    ssaoRatio: 1.5,
    blurRatio: 1,
  });
  ssao.radius = 0.5;
  ssao.totalStrength = 0.75;
  ssao.expensiveBlur = true;
  ssao.samples = 32;
  ssao.maxZ = 100;

  scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline('ssao', camera);

  for (let i = 0; i < 200; i += 1) {
    const startPos = [(Math.random() - 0.5) * area, 10, (Math.random() - 0.5) * area];
    addItem(startPos);
  }

  return {
    render({ time, width, height, frame, deltaTime }) {
      if (objects.length < 10000) {
        for (let i = 0; i < 20; i += 1) {
          const startPos = [(Math.random() - 0.5) * area, 10, (Math.random() - 0.5) * area];
          addItem(startPos);
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
