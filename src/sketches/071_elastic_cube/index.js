import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { PBRCustomMaterial } from '@babylonjs/materials/custom/pbrCustomMaterial';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData';
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader';
import '@babylonjs/core/Loading/loadingScreen';
import '@babylonjs/loaders/glTF/2.0/glTFLoader';
import '@babylonjs/loaders/glTF/2.0/Extensions/KHR_draco_mesh_compression';
import { PointLight } from '@babylonjs/core';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';

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
  scene.clearColor = Color4.FromColor3(new Color3(25 / 255, 32 / 255, 38 / 255));

  const cAlpha = Math.PI / 4;
  const cBeta = Math.PI / 3;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 5.0, new Vector3(0, 0, 0), scene);
  camera.wheelPrecision = 50;
  camera.minZ = 0.9;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-2, 2, -1), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.specular = new Color3(1, 1, 1);

  const pLight = new PointLight('pLight', new Vector3(0, -5, 0), scene);
  pLight.intensity = 10;

  const pLight2 = new PointLight('pLight', new Vector3(0, -5, 0), scene);
  pLight2.intensity = 5;
  pLight2.position = camera.position;

  // SceneLoader.ShowLoadingScreen = false;
  await SceneLoader.AppendAsync('./', 'static/assets/models/bevel-box.glb', scene);
  const mesh = scene.meshes[1];

  mesh.markVerticesDataAsUpdatable(VertexBuffer.PositionKind, true);
  mesh.markVerticesDataAsUpdatable(VertexBuffer.NormalKind, true);

  const basePositions = new Float32Array(mesh.getVerticesData(VertexBuffer.PositionKind));

  const updatePositions = (time, mesh, pl) => {
    const positions = mesh.getVerticesData(VertexBuffer.PositionKind);

    const t = time;
    const pm = t | 0;
    const dF = 0.2;
    const pf = (t % 1) * (1 + dF);

    for (let i = 0; i < positions.length / 3; i += 1) {
      const x = basePositions[i * 3 + 0];
      const y = basePositions[i * 3 + 1];
      const z = basePositions[i * 3 + 2];

      const vec = new Vector3(x, y, z);

      if (pm % 2 !== 0) {
        const rpf = Math.max(Math.min(pf + (z - 0.5) * 0.1, 1), 0);
        const q = Quaternion.RotationAxis(new Vector3(0, 0, 1), (Math.cos(rpf * Math.PI) * Math.PI * 2) / 2);
        vec.rotateByQuaternionAroundPointToRef(q, new Vector3(0, 0, z), vec);
      } else {
        const rpf = Math.max(Math.min(pf + (y - 0.5) * 0.1, 1), 0);
        const q = Quaternion.RotationAxis(new Vector3(0, 1, 0), (Math.cos(rpf * Math.PI) * Math.PI * 2) / 2);
        vec.rotateByQuaternionAroundPointToRef(q, new Vector3(0, y, 0), vec);
      }

      positions[i * 3 + 0] = vec.x;
      positions[i * 3 + 1] = vec.y;
      positions[i * 3 + 2] = vec.z;
    }

    pl.chromaticAberration.aberrationAmount = (Math.sin((t % 1) * Math.PI) * 50000) / engine.getRenderWidth();

    mesh.updateVerticesData(VertexBuffer.PositionKind, positions);

    const indices = mesh.getIndices();
    const normals = [];
    VertexData.ComputeNormals(positions, indices, normals, { useRightHandedSystem: true });

    mesh.updateVerticesData(VertexBuffer.NormalKind, normals);
  };

  const mat = new PBRCustomMaterial('plastic', scene);
  // mat.wireframe = true;
  mat.metallic = 0.0;
  mat.roughness = 0.24;
  mat.albedoColor = new Color3(1, 1, 1);
  mesh.material = mat;

  // -------------------

  const defaultPipeline = new DefaultRenderingPipeline('default', true, scene, [camera]);
  defaultPipeline.fxaaEnabled = true;
  defaultPipeline.samples = 8;

  defaultPipeline.imageProcessingEnabled = false;

  defaultPipeline.chromaticAberrationEnabled = true;
  defaultPipeline.chromaticAberration.aberrationAmount = 2.5;

  // ------------------------------

  return {
    render({ time, width, height }) {
      updatePositions(time * 0.5, mesh, defaultPipeline);

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
