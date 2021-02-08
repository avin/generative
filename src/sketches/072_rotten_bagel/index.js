import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { PBRCustomMaterial } from '@babylonjs/materials/custom/pbrCustomMaterial';
import { Effect } from '@babylonjs/core/Materials/effect';
import { PostProcess } from '@babylonjs/core';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';

import postprocessFragment from './shaders/postprocess/fragment.glsl';
import sphere_vertexDefinitions from './shaders/sphere/vertexDefinitions.glsl';
import sphere_vertexBeforePositionUpdated from './shaders/sphere/vertexBeforePositionUpdated.glsl';

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

  const initTime = +new Date();

  const scene = new Scene(engine);
  scene.clearColor = Color4.FromColor3(new Color3(245 / 255, 248 / 255, 250 / 255));

  const cAlpha = Math.PI / 4;
  const cBeta = Math.PI / 3;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 40.0, new Vector3(0, 0, 0), scene);
  camera.minZ = 0.1;
  camera.fov = 1.2;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.125, 0.125, 0.125);
  baseLight.specular = new Color3(1.0, 1.0, 1.0);

  // -------------------------

  const matrices = [];
  const colors = [];
  const poses = [];

  const sphereSize = 0.5;
  const size = 20;
  const segments = 150 / sphereSize;
  const sliceTotal = 200 / sphereSize;
  const twistFactor = 4;

  const pickTorus = MeshBuilder.CreateTorus('pickTorus', { diameter: size * 2, thickness: 22 * sphereSize }, scene);
  pickTorus.visibility = 0;

  for (let s = 0; s < segments; s += 1) {
    const sv = (s / segments) * Math.PI * 2;
    const sx = Math.cos(sv) * size;
    const sy = Math.sin(sv) * size;

    if (Math.abs(sv - Math.PI / 4) > 0.6) {
      for (let i = 0; i < sliceTotal; i += 1) {
        const ca = 137.5 * (Math.PI / 180);
        const a = i * ca;
        const r = sphereSize * 0.55 * Math.sqrt(i);
        const x = r * Math.cos(a);
        const y = r * Math.sin(a);

        const transition = new Vector3(0, x, y);

        const l = transition.length();

        const color = new Color3();
        Color3.HSVtoRGBToRef((l * 360) / 7.0, 0.7, 1, color);
        colors.push(color.toLinearSpace());

        transition.rotateByQuaternionToRef(
          Quaternion.RotationAxis(new Vector3(1, 0, 0), -sv * twistFactor),
          transition,
        );

        transition.rotateByQuaternionToRef(
          Quaternion.RotationAxis(new Vector3(0, 1, 0), -sv + Math.PI / 2),
          transition,
        );

        transition.addToRef(new Vector3(sx, 0, sy), transition);

        poses.push(transition);

        const rotation = new Quaternion();
        const scaling = new Vector3(1, 1, 1);

        const matrix = Matrix.Compose(scaling, rotation, transition);

        matrices.push(matrix);
      }
    }
  }

  const bufferMatrices = new Float32Array(matrices.length * 16);
  matrices.forEach((m, idx) => {
    m.copyToArray(bufferMatrices, 16 * idx);
  });

  const bufferColors = new Float32Array(colors.length * 4);
  colors.forEach((c, idx) => {
    bufferColors[idx * 4 + 0] = c.r;
    bufferColors[idx * 4 + 1] = c.g;
    bufferColors[idx * 4 + 2] = c.b;
    bufferColors[idx * 4 + 3] = 1;
  });

  const bufferPoses = new Float32Array(colors.length * 3);
  poses.forEach((p, idx) => {
    bufferPoses[idx * 3 + 0] = p.x;
    bufferPoses[idx * 3 + 1] = p.y;
    bufferPoses[idx * 3 + 2] = p.z;
  });

  const sphere = MeshBuilder.CreateSphere('sphere', { diameter: sphereSize, segments: 2 }, scene);
  sphere.isPickable = false;

  sphere.thinInstanceSetBuffer('matrix', bufferMatrices, 16);
  sphere.thinInstanceSetBuffer('color', bufferColors, 4);
  sphere.thinInstanceSetBuffer('mPos', bufferPoses, 3);

  const mat = new PBRCustomMaterial('plastic', scene);
  mat.metallic = 0.0;
  mat.roughness = 0.3;
  sphere.material = mat;

  mat.AddAttribute('mPos');

  mat.Vertex_Definitions(sphere_vertexDefinitions);
  mat.Vertex_Before_PositionUpdated(sphere_vertexBeforePositionUpdated);
  // mat.Fragment_Definitions(sphere_fragmentDefinitions);
  // mat.Fragment_Custom_Alpha(sphere_fragmentCustomAlpha);

  const scannerBall = MeshBuilder.CreateSphere('scanBall', { diameter: 15 }, scene);
  scannerBall.rotate(new Vector3(1, 0, 0), Math.PI / 2);
  scannerBall.billboardMode = Mesh.BILLBOARDMODE_ALL;
  const scannerBallMaterial = new StandardMaterial('m', scene);
  scannerBall.material = scannerBallMaterial;
  scannerBallMaterial.diffuseColor = new Color3(0, 0, 0);
  scannerBallMaterial.specularColor = new Color3(0, 0, 0);
  scannerBallMaterial.emissiveColor = new Color3(0, 0, 0);
  scannerBallMaterial.alpha = 0.1;

  let pickVector;
  function checkPickTorus() {
    const pickInfo = scene.pick(scene.pointerX, scene.pointerY, (mesh) => mesh === pickTorus);
    if (pickInfo.hit) {
      pickVector = pickInfo.pickedPoint;
      scannerBallMaterial.alpha = 0.1;
    } else {
      pickVector = new Vector3(1000, 0, 0);
      scannerBallMaterial.alpha = 0.0;
    }

    scannerBall.position = pickVector;
  }

  mat.AddUniform('iTime', 'float');
  mat.AddUniform('zoomPoint', 'vec3');
  mat.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    mat.getEffect().setFloat('iTime', time);
    mat.getEffect().setVector3('zoomPoint', pickVector);
  };

  // -------------------

  Effect.ShadersStore.customFragmentShader = postprocessFragment;
  new PostProcess('shade-sides', 'custom', null, null, 1.0, camera);

  const defaultPipeline = new DefaultRenderingPipeline('default', true, scene, [camera]);
  defaultPipeline.fxaaEnabled = true;
  defaultPipeline.samples = 8;

  defaultPipeline.imageProcessingEnabled = false;

  // defaultPipeline.chromaticAberrationEnabled = true;
  // defaultPipeline.chromaticAberration.aberrationAmount = 2.5;

  return {
    render({ time, width, height, frame, deltaTime }) {
      checkPickTorus();

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
