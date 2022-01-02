import canvasSketch from 'canvas-sketch';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';
import '@babylonjs/core/Loading/Plugins/babylonFileLoader';
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import '@babylonjs/core';
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
  scene.clearColor = Color3.FromHexString('#182026');

  const camera = new ArcRotateCamera('camera', -Math.PI / 2, 1.53, 95, new Vector3(0, 0, 0), scene);
  camera.fov = 1.0;
  camera.minZ = 0.1;

  const baseLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);
  baseLight.diffuse = new Color3(1.0, 1.0, 1.0);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);
  baseLight.intensity = 1.0;

  // ---------------------------------------

  const { meshes } = await SceneLoader.ImportMeshAsync('', 'assets/models/', 'skull.babylon', scene);

  const skullMesh = meshes[0];
  skullMesh.position = new Vector3(0, 0, 0);
  camera.target = skullMesh;

  // ---------------------------------------

  const eyeBall = MeshBuilder.CreateSphere('eyeBall', { diameter: 11.0, segments: 32 });

  const eyeBallMaterial = new StandardMaterial('eyeBallMaterial', scene);
  eyeBall.material = eyeBallMaterial;

  const eyeIris = MeshBuilder.CreateSphere('eyeBall', { diameter: 8.0, segments: 32 });
  eyeIris.parent = eyeBall;
  eyeIris.position.z = 2;
  const eyeIrisMaterial = new StandardMaterial('eyeBallMaterial', scene);
  eyeIrisMaterial.diffuseColor = Color3.FromHexString('#6C91B1');
  eyeIris.material = eyeIrisMaterial;

  const eyePupil = MeshBuilder.CreateSphere('eyeBall', { diameter: 4.0, segments: 32 });
  eyePupil.parent = eyeIris;
  eyePupil.position.z = 2.5;
  const eyePupilMaterial = new StandardMaterial('eyePupilMaterial', scene);
  eyePupilMaterial.diffuseColor = Color3.Black();
  eyePupil.material = eyePupilMaterial;

  const eye = Mesh.MergeMeshes([eyeBall, eyeIris, eyePupil], true, true, undefined, false, true);
  eye.setEnabled(false);

  const eyeLeft = eye.createInstance('eyeLeft');
  eyeLeft.position.x = 9;
  eyeLeft.position.z = -21.5;
  eyeLeft.position.y = 3.5;

  const eyeRight = eye.createInstance('eyeRight');
  eyeRight.position.x = -9;
  eyeRight.position.z = -21;
  eyeRight.position.y = 3.5;

  // ---------------------------------------

  const pickPlane = MeshBuilder.CreateGround('ground', {
    width: 100,
    height: 100,
    subdivisions: 1,
    updatable: true,
  });
  pickPlane.rotate(new Vector3(1, 0, 0), -Math.PI / 2);
  pickPlane.position.z = -50;
  pickPlane.visibility = 0;

  // ---------------------------------------

  function moveEyes() {
    const pickInfo = scene.pick(scene.pointerX, scene.pointerY, (mesh) => mesh === pickPlane);
    let pickPoint;
    if (pickInfo.hit) {
      pickPoint = pickInfo.pickedPoint;
    } else {
      pickPoint = new Vector3(0, 0, -100);
    }

    eyeLeft.lookAt(pickPoint);
    eyeRight.lookAt(pickPoint);
  }

  // ---------------------------------------

  const ssao = new SSAO2RenderingPipeline('ssao', scene, {
    ssaoRatio: 1.5,
    blurRatio: 2.0,
  });
  ssao.radius = 10.5;
  ssao.totalStrength = 1.75;
  ssao.expensiveBlur = true;
  ssao.samples = 32;
  ssao.maxZ = 100;

  scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline('ssao', camera);

  // -------------------------------

  const defaultPipeline = new DefaultRenderingPipeline('default', false, scene, [camera]);
  defaultPipeline.fxaaEnabled = true;
  defaultPipeline.samples = 8;

  // -------------------------------

  return {
    render({ time, deltaTime }) {
      scene.render();

      moveEyes();
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
