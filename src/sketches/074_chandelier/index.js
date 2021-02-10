import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Rendering/prePassRendererSceneComponent';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';

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
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = Color3.FromHexString('#10161A');

  const cAlpha = -Math.PI / 2;
  const cBeta = Math.PI / 3;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 30.0, new Vector3(0, 0, 0), scene);
  camera.minZ = 0.1;
  camera.fov = 1.0;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  baseLight.specular = new Color3(0.25, 0.25, 0.25);

  // ----------------------------

  const PI = Math.PI;
  const PI2 = Math.PI * 2;

  const radius = 10;
  const knees = 16;
  const segments = 400;

  const pathBuildFunc = (phase) => {
    const path = [];
    for (let i = 0; i <= segments + 1; i += 1) {
      const iS = i / segments;

      const x = Math.cos(iS * PI2) * (radius + Math.cos(iS * PI * knees + Math.PI * phase));
      const y = Math.sin(iS * PI2) * (radius + Math.cos(iS * PI * knees + Math.PI * phase));
      const z = 0;

      path.push(new Vector3(x, y, z));
    }
    return path;
  };

  const radiusFunc = (i) => {
    const iS = i / segments;
    return Math.cos(iS * Math.PI * 2) / 2;
  };

  const tube1 = MeshBuilder.CreateTube(
    'tube1',
    {
      path: pathBuildFunc(0),
      radiusFunction: radiusFunc,
      tessellation: 16,
    },
    scene,
  );
  const tube2 = MeshBuilder.CreateTube(
    'tube2',
    {
      path: pathBuildFunc(1),
      radiusFunction: radiusFunc,
      tessellation: 16,
    },
    scene,
  );

  const tubeMaterial = new StandardMaterial('mat', scene);
  tube1.material = tubeMaterial;
  tube2.material = tubeMaterial;
  tubeMaterial.diffuseColor = Color3.FromHexString('#FFC940');
  tubeMaterial.emissiveColor = Color3.Black();
  tubeMaterial.specularColor = new Color3(0.25, 0.25, 0.25);

  const tubes = [];
  const totalLines = 64;
  for (let i = 0; i < totalLines; i += 1) {
    const iS = i / totalLines;

    const rotation = new Quaternion.RotationAxis(new Vector3(0, 1, 0), iS * Math.PI * 2);

    let newTube;
    if (i % 2) {
      newTube = tube1.clone('');
    } else {
      newTube = tube2.clone('');
    }

    newTube.rotationQuaternion = rotation;
    tubes.push(newTube);
  }

  tube1.dispose();
  tube2.dispose();
  Mesh.MergeMeshes(tubes, true, true);

  const torusThickness = 1.5;
  const toruses = [];
  for (let i = 0; i <= knees; i += 1) {
    if (i % 2) {
      continue;
    }
    const iY = Math.cos((i / knees) * PI) * radius;

    const r = Math.sqrt(radius * radius - iY * iY);

    const torus = MeshBuilder.CreateTorus(
      'torus',
      {
        diameter: r * 2,
        thickness: torusThickness,
        tessellation: 32,
      },
      scene,
    );
    torus.position.y = iY;

    toruses.push(torus);
  }

  const torus = Mesh.MergeMeshes(toruses, true);

  const torusMaterial = new StandardMaterial('mat', scene);
  torus.material = torusMaterial;
  torusMaterial.diffuseColor = Color3.FromHexString('#48AFF0');
  torusMaterial.specularColor = new Color3(0.25, 0.25, 0.25);

  // ---------------------------------------

  const ssao = new SSAO2RenderingPipeline('ssao', scene, {
    ssaoRatio: 1.5,
    blurRatio: 1,
  });
  ssao.radius = 0.5;
  ssao.totalStrength = 0.75;
  ssao.expensiveBlur = true;
  ssao.samples = 32;
  ssao.maxZ = 100;

  scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline('ssao', camera);

  // -------------------------------

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

export default { sketch, settings };
