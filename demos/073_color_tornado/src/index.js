import canvasSketch from 'canvas-sketch';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
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
  scene.clearColor = Color4.FromColor3(new Color3(17 / 255, 22 / 255, 26 / 255));

  const cAlpha = Math.PI;
  const cBeta = Math.PI / 2;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 50.0, new Vector3(0, 0, 0), scene);
  camera.minZ = 0.1;
  camera.fov = 1.0;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  baseLight.specular = new Color3(1.0, 1.0, 1.0);

  const turnsCount = 8;
  const turnsSizeFactor = 32;
  const totalLines = 12;
  const segments = 2000;

  const tube = MeshBuilder.CreateTube(
    'tube',
    {
      path: (() => {
        const path = [];
        for (let i = 0; i < segments; i += 1) {
          const iS = i / segments;

          const s = iS * Math.PI * turnsCount;

          const expS = (Math.cos(iS * Math.PI + Math.PI / 2) * 0.5 + 0.6) * 10 ** 1.25;

          const x = Math.cos(s) * expS;
          const z = Math.sin(s) * expS;

          path.push(new Vector3(x, (iS - 0.5) * turnsSizeFactor, z));
        }
        return path;
      })(),
      // radius: 1 / totalLines / turnsCount *12.,
      radiusFunction: (i) => {
        const iS = Math.abs(i / segments - 0.5) * 0.5;
        return iS + 0.1;
      },
      tessellation: 16,
      cap: Mesh.CAP_ALL,
    },
    scene,
  );

  tube.thinInstanceRegisterAttribute('color', 4);

  for (let i = 0; i < totalLines; i += 1) {
    const iS = i / totalLines;

    const transition = new Vector3.Zero();
    const rotation = new Quaternion.RotationAxis(new Vector3(0, 1, 0), iS * Math.PI * 2);
    const scaling = new Vector3(1, 1, 1);

    const matrix = Matrix.Compose(scaling, rotation, transition);
    const idx = tube.thinInstanceAdd(matrix);

    const color = new Color3();
    Color3.HSVtoRGBToRef(360 * iS, 0.75, 1, color);
    tube.thinInstanceSetAttributeAt('color', idx, [color.r, color.g, color.b, 1]);
  }

  const tubeMaterial = new StandardMaterial('mat', scene);
  tube.material = tubeMaterial;
  tubeMaterial.specularColor = new Color3(0.25, 0.25, 0.25);

  // -------------------------

  const defaultPipeline = new DefaultRenderingPipeline('default', true, scene, [camera]);
  defaultPipeline.fxaaEnabled = true;
  defaultPipeline.imageProcessingEnabled = false;
  defaultPipeline.samples = 8;

  defaultPipeline.bloomEnabled = true;
  defaultPipeline.bloomThreshold = 0.0;
  defaultPipeline.bloomWeight = 0.25;
  defaultPipeline.bloomKernel = 50;
  defaultPipeline.bloomScale = 0.9;

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

canvasSketch(sketch, settings);
