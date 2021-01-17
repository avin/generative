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

  const camera = new ArcRotateCamera('camera', -2, 0, 20, new Vector3(0, 0, 0), scene);
  camera.fov = 1.0;
  camera.minZ = 0.1;
  camera.wheelDeltaPercentage = 0.01;
  camera.pinchDeltaPercentage = 0.01;

  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);
  baseLight.diffuse = new Color3(1.0, 1.0, 1.0);
  baseLight.groundColor = new Color3(0.25, 0.25, 0.25);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);
  baseLight.intensity = 1.0;

  // -----------------------------

  // star material

  const starMaterial = new CustomMaterial('starMaterial', scene);
  starMaterial.specularColor = starColor;
  starMaterial.emissiveColor = new Color3(0.175, 0.175, 0.175);
  starMaterial.alpha = 0.8;

  // Blob meshes

  const radius = 1.25;
  const mesh = MeshBuilder.CreateTube(
    'torus',
    {
      path: (() => {
        const path = [];
        const size = 5.0;
        const segments = 256;
        const length = Math.PI * 2 * 2;
        const step = length / segments;
        let sm = 0;
        for (let i = 0; i <= length + step; i += step) {
          const x = Math.cos(i) * (size + Math.sin(i * 3 + sm) * radius);
          const y = Math.cos(i * 3 + sm);
          const z = Math.sin(i) * (size + Math.sin(i * 3 + sm) * radius);
          path.push(new Vector3(x, y, z));

          sm += (Math.PI * 2) / segments;

          // step += Math.PI*2/segments;
        }
        return path;
      })(),

      radius,
      tessellation: 64,
      sideOrientation: Mesh.DOUBLESIDE,
    },
    scene,
  );

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
  };
};

export default { sketch, settings };
