import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { Matrix, Vector3 } from '@babylonjs/core/Maths/math';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { Mesh } from '@babylonjs/core/Meshes/mesh';

import contour_vertexBeforePositionUpdated from './shaders/contour/vertexBeforePositionUpdated.glsl';
import filler_vertexBeforePositionUpdated from './shaders/filler/vertexBeforePositionUpdated.glsl';

const settings = {
  animate: true,
  context: 'webgl',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true);

  //
  // Settings ===============================
  //

  const length = 10;
  const segments = 500;
  const radius = 0.05;
  const spaceBetween = 0.5;
  const rowItems = 21;
  const totalItems = (rowItems + 1) * (rowItems + 1);

  const blackColor = new Color3(16 / 255, 22 / 255, 26 / 255);
  const whiteColor = new Color3(245 / 255, 248 / 255, 250 / 255);

  const initTime = +new Date();

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = Color4.FromColor3(blackColor);

  const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2, -0.0, new Vector3(0, 0, 0), scene);
  // camera.attachControl(canvas, true);
  camera.minZ = 0.1;
  camera.fov = 1.15;

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(1, 1, 1);

  const mainMaterial = new CustomMaterial('tubeMaterial', scene);
  mainMaterial.specularColor = new Color3(0.0, 0.0, 0.0);
  mainMaterial.emissiveColor = new Color3(0.1, 0.1, 0.1);
  mainMaterial.freeze();

  //
  // Meshes
  //

  const contourMaterial = new CustomMaterial('tubeMaterial', scene);
  contourMaterial.diffuseColor = whiteColor;
  contourMaterial.specularColor = new Color3(0, 0, 0);

  const fillerMaterial = new CustomMaterial('tubeMaterial', scene);
  fillerMaterial.diffuseColor = blackColor;
  fillerMaterial.specularColor = new Color3(0, 0, 0);

  const path = [];
  for (let i = 0; i < length; i += length / segments) {
    path.push(new Vector3(0, 0, i - 1));
  }
  const meshParams = {
    path,
    tessellation: 32,
    radius,
    cap: Mesh.DOUBLESIDE,
    scene,
    updatable: false,
  };

  const contourMesh = MeshBuilder.CreateTube('tube', { ...meshParams, sideOrientation: Mesh.BACKSIDE });
  contourMesh.material = contourMaterial;

  const fillerMesh = MeshBuilder.CreateTube('tube', { ...meshParams, sideOrientation: Mesh.FRONTSIDE });
  fillerMesh.material = fillerMaterial;

  const bufferMatrices = new Float32Array(16 * totalItems);
  let idx = 0;
  for (let y = -rowItems / 2; y <= rowItems / 2; y += 1) {
    for (let x = -rowItems / 2; x <= rowItems / 2; x += 1) {
      const matrix = Matrix.Translation(x * spaceBetween, y * spaceBetween, 0);
      matrix.copyToArray(bufferMatrices, 16 * idx);
      idx += 1;
    }
  }
  contourMesh.thinInstanceSetBuffer('matrix', bufferMatrices, 16);
  fillerMesh.thinInstanceSetBuffer('matrix', bufferMatrices, 16);

  //
  // Shaders
  //

  contourMaterial.Vertex_Before_PositionUpdated(contour_vertexBeforePositionUpdated);
  fillerMaterial.Vertex_Before_PositionUpdated(filler_vertexBeforePositionUpdated);

  [fillerMaterial, contourMaterial].forEach(material => {
    material.AddUniform('iTime', 'float');
    material.AddUniform('factor', 'float');
    material.AddUniform('speed', 'float');
    material.AddUniform('radius', 'float');
    material.AddUniform('swingSize', 'float');

    material.onBind = () => {
      const time = (+new Date() - initTime) * 0.001;
      material.getEffect().setFloat('iTime', time);
      material.getEffect().setFloat('factor', 1.0);
      material.getEffect().setFloat('speed', 5);
      material.getEffect().setFloat('radius', radius);
      material.getEffect().setFloat('swingSize', 0.15);
    };
  });

  // FOV control

  window.addEventListener('mousewheel', e => {
    const sign = Math.sign(e.wheelDelta) * -1;

    camera.fov += sign * 0.05;
    camera.fov = Math.max(Math.min(camera.fov, 1.2), 0.25);
  });

  return {
    render({ time, width, height }) {
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
