import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Matrix, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { Camera } from '@babylonjs/core/Cameras/camera';

import { getWebGLContext } from '@/utils/webgl';
import plane_vertexDefinitions from './shaders/plane/vertexDefinitions.glsl';
import plane_vertexBeforePositionUpdated from './shaders/plane/vertexBeforePositionUpdated.glsl';
import plane_fragmentDefinitions from './shaders/plane/fragmentDefinitions.glsl';
import plane_fragmentCustomDiffuse from './shaders/plane/fragmentCustomDiffuse.glsl';

const settings = {
  animate: true,
  context: getWebGLContext(),
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  //
  // Settings ===============================
  //

  const meshesCount = 40;

  const colorBlack = new Color3(23 / 255, 32 / 255, 38 / 255);

  const initTime = +new Date();

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = colorBlack;

  const camera = new ArcRotateCamera('camera', 0, 0, 10, new Vector3(0, 0, 0), scene);
  camera.fov = 1.0;
  camera.minZ = 0.1;

  camera.mode = Camera.ORTHOGRAPHIC_CAMERA;

  camera.orthoTop = 1;
  camera.orthoBottom = -1;
  camera.orthoLeft = -1;
  camera.orthoRight = 1;

  // camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);
  baseLight.diffuse = new Color3(1.0, 1.0, 1.0);
  baseLight.groundColor = new Color3(0.0, 0.0, 0.0);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);
  baseLight.intensity = 1.0;

  const plane = MeshBuilder.CreateGround(
    'plane',
    { subdivisionsX: 1, subdivisionsY: 512, width: meshesCount / 40, height: 2 },
    scene,
  );

  const planeMaterial = new CustomMaterial('planeMaterial', scene);
  // planeMaterial.wireframe = true;
  plane.material = planeMaterial;

  const bufferMatrices = new Float32Array(16 * meshesCount * 3);
  const bufferColors = new Float32Array(4 * meshesCount * 3);
  const bufferIdx = new Float32Array(meshesCount * 3);
  const bufferUseColor = new Float32Array(meshesCount * 3);
  const bufferRFactor1 = new Float32Array(meshesCount * 3);

  let idx = 0;
  for (let n = 0; n < meshesCount; n += 1) {
    const rFactor1 = Math.random();

    for (let i = 0; i < 3; i += 1) {
      const step = i === 1 ? 0.01 : 0.009;
      const matrix = Matrix.Translation(i * step + n * 0.025, idx * 0.001, 0);
      matrix.copyToArray(bufferMatrices, idx * 16);

      bufferColors[idx * 4 + 0] = colorBlack.r;
      bufferColors[idx * 4 + 1] = colorBlack.g;
      bufferColors[idx * 4 + 2] = colorBlack.b;
      bufferColors[idx * 4 + 3] = 1;

      bufferIdx[idx] = n;
      bufferRFactor1[idx] = rFactor1;
      bufferUseColor[idx] = i === 1 ? 1 : 0;

      idx += 1;
    }
  }

  plane.thinInstanceSetBuffer('matrix', bufferMatrices, 16);
  plane.thinInstanceSetBuffer('color', bufferColors, 4);
  plane.thinInstanceSetBuffer('idx', bufferIdx, 1);
  plane.thinInstanceSetBuffer('rFactor1', bufferRFactor1, 1);
  plane.thinInstanceSetBuffer('useColor', bufferUseColor, 1);

  // -----------------------------------------

  planeMaterial.Vertex_Definitions(plane_vertexDefinitions);
  planeMaterial.Vertex_Before_PositionUpdated(plane_vertexBeforePositionUpdated);
  planeMaterial.Fragment_Definitions(plane_fragmentDefinitions);
  planeMaterial.Fragment_Custom_Diffuse(plane_fragmentCustomDiffuse);

  planeMaterial.AddAttribute('rFactor1');
  planeMaterial.AddAttribute('idx');
  planeMaterial.AddAttribute('useColor');

  planeMaterial.AddUniform('iTime', 'float');
  planeMaterial.AddUniform('sizeFactor', 'float');
  planeMaterial.AddUniform('count', 'float');

  planeMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    planeMaterial.getEffect().setFloat('iTime', time);
    planeMaterial.getEffect().setFloat('count', meshesCount);
    planeMaterial.getEffect().setFloat('sizeFactor', engine.getRenderWidth() / engine.getRenderHeight());
  };

  // --------------------------------------

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
