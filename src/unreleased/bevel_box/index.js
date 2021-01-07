import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { Axis, Quaternion, Space, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';

import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { math } from 'canvas-sketch-util';
import { SSAO2RenderingPipeline } from '@babylonjs/core';

const settings = {
  animate: true,
  context: 'webgl',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true);

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = Color4.FromColor3(Color3.White());

  const cAlpha = Math.PI / 4;
  const cBeta = Math.PI / 4;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 10.0, new Vector3(0, 0, 0), scene);
  camera.wheelPrecision = 50;
  camera.minZ = 0.2;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.5, 0.5, 0.5);
  baseLight.specular = new Color3(0.25, 0.25, 0.25);

  const createCapsule = (options) => {
    options = {
      bevelSize: 0.1,
      boxWidth: 5,
      bevelSegments: 20,
      mainSegments: 500,
      k: 1,
      instance: null,
      factor: 0,
      ...options,
    };

    const { bevelSize, boxWidth, bevelSegments, mainSegments, k, instance, factor } = options;

    const path = (() => {
      const path = [];

      const bevelStep = bevelSize / bevelSegments;
      const mainStep = (boxWidth - bevelSize * 2) / mainSegments;

      for (let i = 0; i < bevelSegments; i += 1) {
        path.push(new Vector3(i * bevelStep - boxWidth / 2, 0, 0));
      }

      for (let i = 1; i < mainSegments; i += 1) {
        path.push(new Vector3(i * mainStep + bevelSize - boxWidth / 2, 0, 0));
      }

      for (let i = 1; i <= bevelSegments; i += 1) {
        path.push(new Vector3(i * bevelStep + boxWidth - bevelSize - boxWidth / 2, 0, 0));
      }

      return path;
    })();

    const direction = k % 2 ? +1 : -1;
    path.forEach((step) => {
      const l = step.x + factor*Math.PI/2;

      step.y = Math.sin(l * Math.PI * direction) * 0.5;
      step.z = Math.cos(l * Math.PI * direction) * 0.5;

      step.y += Math.sin(l * Math.PI * direction * 3 + Math.PI * k) * bevelSize;
      step.z += Math.cos(l * Math.PI * direction * 3 + Math.PI * k) * bevelSize;
    });

    const radiusFunction = (i, distance) => {
      if (i < bevelSegments) {
        const x = (1 - i / bevelSegments) * bevelSize;
        const rowRadius = Math.sqrt(Math.abs(bevelSize * bevelSize - x * x));
        return rowRadius;
      }
      if (i > bevelSegments + mainSegments - 1) {
        const x = (1 - (i - mainSegments + 2) / bevelSegments) * bevelSize;
        const rowRadius = Math.sqrt(Math.abs(bevelSize * bevelSize - x * x));
        return rowRadius;
      }
      return bevelSize;
    };

    const block = new MeshBuilder.CreateTube(
      'sphere',
      { path, radiusFunction, cap: 0, tessellation: bevelSegments, instance, updatable: true },
      scene,
    );

    return block;
  };

  const mat = new StandardMaterial('mat', scene);
  mat.specularColor = new Color3(0.125, 0.125, 0.125);

  let block1 = createCapsule({ k: 0 });
  block1.material = mat;

  let block2 = createCapsule({ k: 1 });
  block2.material = mat;

  const total = 4;
  for (let i = 0; i < total; i += 1) {
    const i1 = block1.createInstance(`i1-${i}`);
    i1.rotate(new Vector3(1, 0, 0), i * ((Math.PI * 4) / total) * 1);

    const i2 = block2.createInstance(`i2-${i}`);
    i2.rotate(new Vector3(1, 0, 0), i * ((Math.PI * 4) / total) * -1);
  }

  // -----------------------------

  return {
    render({ time, width, height }) {
      const t = time*.2;

      block1 = createCapsule({ k: 0, instance: block1, factor: t });
      block2 = createCapsule({ k: 1, instance: block2, factor: t });

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
