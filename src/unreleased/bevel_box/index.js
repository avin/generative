import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { Plane, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { MirrorTexture, PBRMaterial } from '@babylonjs/core';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';

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

  const scene = new Scene(engine);
  scene.clearColor = Color4.FromColor3(Color3.White());

  const cAlpha = Math.PI / 4;
  const cBeta = Math.PI / 3;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 5.0, new Vector3(0, 0, 0), scene);
  camera.wheelPrecision = 50;
  camera.minZ = 0.2;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.5, 0.5, 0.5);
  baseLight.specular = new Color3(0.25, 0.25, 0.25);

  // Mirror
  var mirror = Mesh.CreateBox('Mirror', 1.0, scene);
  mirror.setEnabled(false);
  mirror.scaling = new Vector3(100.0, 0.01, 100.0);
  mirror.material = new StandardMaterial('mirror', scene);
  mirror.material.diffuseTexture = new Texture('static/assets/textures/amiga.jpg', scene);
  mirror.material.diffuseTexture.uScale = 10;
  mirror.material.diffuseTexture.vScale = 10;
  mirror.material.reflectionTexture = new MirrorTexture('mirror', 1024, scene, true);
  mirror.material.reflectionTexture.mirrorPlane = new Plane(0, -1.0, 0, -2.0);
  // mirror.material.reflectionTexture.renderList = [greenSphere, yellowSphere, blueSphere, knot];
  mirror.material.reflectionTexture.level = 0.5;
  mirror.position = new Vector3(0, -2, 0);

  const createCapsule = (options) => {
    options = {
      bevelSize: 0.05,
      boxWidth: 3,
      bevelSegments: 20,
      mainSegments: 500,
      k: 1,
      instance: null,
      time: 0,
      ...options,
    };

    const { bevelSize, boxWidth, bevelSegments, mainSegments, k, instance, time } = options;

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
      const l = step.x + time;

      step.y = Math.sin(l * Math.PI * direction) * 0.5;
      step.z = Math.cos(l * Math.PI * direction) * 0.5;

      step.y += Math.sin(l * Math.PI * direction * 9 + Math.PI * k) * bevelSize * 1.125;
      step.z += Math.cos(l * Math.PI * direction * 9 + Math.PI * k) * bevelSize * 1.125;
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

  let block1 = createCapsule({ k: 0 });
  block1.setEnabled(false);

  let block2 = createCapsule({ k: 1 });
  block2.setEnabled(false);

  const mat = new PBRMaterial('plastic', scene);
  mat.baseColor = new Color3(1.0, 0.766, 0.336);
  mat.metallic = 0.1; // set to 1 to only use it from the metallicRoughnessTexture
  mat.roughness = 0.1; // set to 1 to only use it from the metallicRoughnessTexture
  // mat.environmentTexture = CubeTexture.CreateFromPrefilteredData('static/assets/env/e1.dds', scene);

  block1.material = mat;
  block2.material = mat;

  const total = 8;
  for (let i = 0; i < total; i += 1) {
    const i1 = block1.createInstance(`i1-${i}`);
    i1.rotate(new Vector3(1, 0, 0), i * ((Math.PI * 2) / total) * 1);

    const i2 = block2.createInstance(`i2-${i}`);
    i2.rotate(new Vector3(1, 0, 0), i * ((Math.PI * 2) / total) * -1);
  }

  [block1, block2].forEach((block) => {
    const instanceCount = total;
    const colorData = new Float32Array(4 * instanceCount);
    for (let index = 0; index < instanceCount; index += 1) {
      const color = new Color3();
      Color3.HSVtoRGBToRef(Math.random() * 360, 0.75, 1, color);

      colorData[index * 4] = color.r;
      colorData[index * 4 + 1] = color.g;
      colorData[index * 4 + 2] = color.b;
      colorData[index * 4 + 3] = 1.0;
    }
    const buffer = new VertexBuffer(engine, colorData, VertexBuffer.ColorKind, false, false, 4, true);
    block.setVerticesBuffer(buffer);
  });

  // -----------------------------

  return {
    render({ time, width, height }) {
      const t = time * 0.2;

      block1 = createCapsule({ k: 0, instance: block1, time: t });
      block2 = createCapsule({ k: 1, instance: block2, time: t });

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
