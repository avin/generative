import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { Vector3, Matrix, Quaternion } from '@babylonjs/core/Maths/math';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import vertexDefinitions from './shaders/vertexDefinitions.glsl';
import vertexBeforePositionUpdated from './shaders/vertexBeforePositionUpdated.glsl';
import fragmentDefinitions from './shaders/fragmentDefinitions.glsl';
import fragmentCustomDiffuse from './shaders/fragmentCustomDiffuse.glsl';
import '@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent';

const settings = {
  animate: true,
  context: 'webgl',
};

const tmpVector1 = Vector3.Zero();
function setDirectionToRef(normal, quaternion) {
  quaternion = quaternion || new Quaternion();

  tmpVector1.set(normal.z, 0, -normal.x).normalize();
  const radians = Math.acos(normal.y);

  quaternion = Quaternion.RotationAxisToRef(tmpVector1, radians, quaternion);

  return quaternion;
}

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true);

  const scene = new Scene(engine);
  // scene.clearColor = new Color3(16 / 255, 22 / 255, 26 / 255);
  scene.clearColor = new Color3(245 / 255, 248 / 255, 250 / 255);

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.7, Math.PI / 3.5, 50.7, new Vector3(0, 0, 0), scene);
  camera.lowerBetaLimit = null;
  camera.upperBetaLimit = null;
  camera.lowerAlphaLimit = null;
  camera.upperAlphaLimit = null;
  camera.allowUpsideDown = true;
  camera.attachControl(canvas, true);
  camera.fov = 1.0;
  camera.minZ = 0.1;
  // camera.wheelPrecision = 150.0;

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.intensity = 1;
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.specular = new Color3(0.25, 0.25, 0.25);
  baseLight.groundColor = new Color3(0.5, 0.5, 0.5);
  // baseLight.groundColor = new Color3(1, 1, 1);

  const mat = new CustomMaterial('s', scene);
  mat.diffuseColor = new Color3(72 / 255, 175 / 255, 240 / 255);
  mat.specularColor = new Color3(1, 1, 1);
  mat.specularColor = new Color3(0, 0, 0);
  mat.freeze();

  const baseSphere = MeshBuilder.CreateIcoSphere(
    'baseSphere',
    { radius: 20, subdivisions: 64, updatable: false, flat: false },
    scene,
  );
  const sphereMat = new StandardMaterial('mat', scene);
  baseSphere.material = sphereMat;
  sphereMat.diffuseColor = new Color3(0, 0, 0);
  sphereMat.specularColor = new Color3(0, 0, 0);
  // baseSphere.visibility = 0.25;

  //
  // Mesh
  //

  const path = [];
  const maxSegments = 10;
  for (let i = 0; i < maxSegments; i += 1) {
    path.push(new Vector3(0, i / maxSegments, 0));
  }
  const mesh = MeshBuilder.CreateTube('tube', {
    path,
    tessellation: 6,
    radiusFunction: (i) => {
      const r = 1 - (i + 1) / maxSegments;
      const rs = Math.sin((r * Math.PI) / 2);

      return rs * 0.125;
    },
    cap: Mesh.NO_CAP,
    scene,
    updatable: false,
    sideOrientation: Mesh.DEFAULTSIDE,
  });
  mesh.material = mat;
  mesh.freezeWorldMatrix();
  mesh.doNotSyncBoundingInfo = true;

  //
  // Instances
  //

  const spherePositions = baseSphere.geometry.getVerticesData(VertexBuffer.PositionKind);
  const sphereNormals = baseSphere.geometry.getVerticesData(VertexBuffer.NormalKind);

  const rotation = Quaternion.RotationAxis(new Vector3(0, 0, 1), Math.PI / 2);
  const scaling = new Vector3(1, 1, 1);

  const resultMatrix = new Matrix();

  const total = spherePositions.length / 3;

  const bufferMatrices = new Float32Array(16 * total);
  const bufferIdxes = new Float32Array(total);

  const transition = new Vector3();
  const normal = new Vector3();
  for (let i = 0; i < total; i += 1) {
    transition.x = spherePositions[i * 3 + 0];
    transition.y = spherePositions[i * 3 + 1];
    transition.z = spherePositions[i * 3 + 2];

    scaling.y = 1 + (Math.random() * 0.5 - 0.5) * .5;

    const rx = (Math.random() * 0.5 - 0.5) * 0.5;
    const ry = (Math.random() * 0.5 - 0.5) * 0.5;
    const rz = (Math.random() * 0.5 - 0.5) * 0.5;

    const randomRot = Quaternion.RotationAlphaBetaGamma(rx, ry, rz);
    transition.rotateByQuaternionToRef(randomRot, transition);

    normal.x = sphereNormals[i * 3 + 0];
    normal.y = sphereNormals[i * 3 + 1];
    normal.z = sphereNormals[i * 3 + 2];

    setDirectionToRef(normal, rotation);

    Matrix.ComposeToRef(scaling, rotation, transition, resultMatrix);
    resultMatrix.copyToArray(bufferMatrices, 16 * i);
    bufferIdxes[i] = i;
  }

  mesh.thinInstanceSetBuffer('matrix', bufferMatrices, 16, true);
  mesh.thinInstanceSetBuffer('idx', bufferIdxes, 1, true);

  //
  // Shaders
  //

  mat.AddAttribute('idx');

  mat.Vertex_Definitions(vertexDefinitions);
  mat.Vertex_Before_PositionUpdated(vertexBeforePositionUpdated);
  mat.Fragment_Definitions(fragmentDefinitions);
  mat.Fragment_Custom_Diffuse(fragmentCustomDiffuse);

  mat.Vertex_After_WorldPosComputed('*/');

  //
  // Attributes
  //

  mat.AddUniform('iTime', 'float');

  const initTime = +new Date();
  let time = 0;
  mat.onBind = () => {
    time = (+new Date() - initTime) * 0.001;
    mat.getEffect().setFloat('iTime', time);
  };

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
  };
};

export default { sketch, settings };
