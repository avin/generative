import canvasSketch from 'canvas-sketch';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { PointLight, ShadowGenerator } from '@babylonjs/core';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { getWebGLContext } from './webgl';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: getWebGLContext(),
  animate: true,
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

  const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2, 5.0, new Vector3(0, 0, 0), scene);
  camera.wheelPrecision = 50;
  camera.minZ = 0.2;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  // baseLight.specular = new Color3(0.25, 0.25, 0.25);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);

  const pointLight = new PointLight('pointLight', Vector3.Zero(), scene);
  pointLight.intensity = 0.1;

  const shadowGenerator = new ShadowGenerator(1024, pointLight);
  shadowGenerator.useContactHardeningShadow = true;
  shadowGenerator.contactHardeningLightSizeUVRatio = 0.0075;

  // -----------------------------

  const path = [];
  for (let i = 0; i < Math.PI; i += 0.01) {
    const coord = new Vector3(1, 0, 0);

    const rotationQuaternion1 = new Quaternion.RotationAxis(new Vector3(0, 1, 0), i);
    const rotationQuaternion2 = new Quaternion.RotationAxis(new Vector3(1, 0, 0), i * 10);
    // const rotationQuaternion3 = new Quaternion.RotationAxis(new Vector3(0, 0, 1), i*200.);

    coord.rotateByQuaternionToRef(rotationQuaternion1, coord);
    coord.rotateByQuaternionToRef(rotationQuaternion2, coord);
    // coord.rotateByQuaternionToRef(rotationQuaternion3, coord);

    path.push(coord);
  }

  const tube = MeshBuilder.CreateTube(
    'tube',
    {
      path,
      radiusFunction: (i) => {
        if (i === 0 || i === path.length - 1) {
          return 0;
        }
        return 0.05;
      },
      tessellation: 32,
      updatable: true,
    },
    scene,
  );
  shadowGenerator.getShadowMap().renderList.push(tube);
  const tubeMaterial = new StandardMaterial('tubeMaterial', scene);
  tube.material = tubeMaterial;
  tubeMaterial.diffuseColor = Color3.FromHexString('#FF66A1');

  const box = MeshBuilder.CreateBox(
    'box',
    {
      width: 3,
      height: 3,
      depth: 3,
      sideOrientation: Mesh.BACKSIDE,
    },
    scene,
  );
  box.receiveShadows = true;
  const boxMaterial = new StandardMaterial('boxMaterial', scene);
  box.material = boxMaterial;
  boxMaterial.diffuseColor = Color3.FromHexString('#F5F8FA');

  return {
    render({ time, width, height, deltaTime }) {
      tube.rotate(new Vector3(1, 0, 0), deltaTime * 5);
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
