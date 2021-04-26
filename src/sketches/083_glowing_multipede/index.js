import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { getWebGLContext } from '@/utils/webgl';
import { PBRCustomMaterial } from '@babylonjs/materials/custom/pbrCustomMaterial';
import '@babylonjs/core/Rendering/prePassRendererSceneComponent';
import '@babylonjs/core/Rendering/depthRendererSceneComponent';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { Effect } from '@babylonjs/core/Materials/effect';
import { PostProcess } from '@babylonjs/core';
import tube_vertexDefinitions from './shaders/tube/vertexDefinitions.glsl';
import tube_vertexBeforePositionUpdated from './shaders/tube/vertexBeforePositionUpdated.glsl';
import tube_vertexAfterWorldPosComputed from './shaders/tube/vertexAfterWorldPosComputed.glsl';
import tube_fragmentDefinitions from './shaders/tube/fragmentDefinitions.glsl';
import tube_fragmentCustomAlbedo from './shaders/tube/fragmentCustomAlbedo.glsl';
import postprocessFragment from './shaders/postprocess/fragment.glsl';

const random = require('canvas-sketch-util/random');

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
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = Color3.FromHexString('#10161A');

  const cAlpha = -Math.PI / 2;
  const cBeta = Math.PI / 2;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 22, new Vector3(0, 0.0, 0), scene);
  camera.minZ = 0.1;
  camera.fov = 1.0;

  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-0.25, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  baseLight.specular = new Color3(0.25, 0.25, 0.25);

  // ----------------------------

  const baseMesh = MeshBuilder.CreateIcoSphere('m', { radius: 3.0, subdivisions: 3 }, scene);
  baseMesh.updateFacetData();
  const facetPositions = baseMesh.getFacetLocalPositions();
  const facetNormals = baseMesh.getFacetLocalNormals();
  baseMesh.dispose();

  const segments = 50;
  const tubeLength = 10;
  const tubes = [];
  const baseTube = MeshBuilder.CreateTube(
    'tube',
    {
      cap: 2,
      path: (() => {
        const path = [];
        for (let j = 0; j < segments; j += 1) {
          const iS = j / segments;
          const iSL = iS * tubeLength;
          path.push(new Vector3(0, 1 * iSL, 0));
        }
        return path;
      })(),
      radiusFunction: (i) => {
        const iS = (i + 1) / segments;
        const r = Math.max(Math.abs(Math.sqrt(1 - iS) ** 1.25 - 0.2), 0.05);
        return r;
      },
      tessellation: 8,
    },
    scene,
  );

  for (let i = 0; i < facetPositions.length; i += 1) {
    const tube = baseTube.clone();

    const q = new Quaternion();
    Quaternion.FromUnitVectorsToRef(Vector3.Up(), facetNormals[i], q);

    tube.rotationQuaternion = q;

    tubes.push(tube);
  }

  baseTube.dispose();
  const mesh = Mesh.MergeMeshes(tubes, true, true);
  // const mesh = baseMesh;

  const mat = new PBRCustomMaterial('plastic', scene);
  mat.metallic = 0.0;
  mat.roughness = 0.3;
  // mat.albedoColor = new Color3.FromHexString('#48AFF0');
  mat.specularColor = new Color3(0.25, 0.25, 0.25);
  mesh.material = mat;

  let rotmatrixBlock = '';
  for (let i = 0; i < segments; i += 1) {
    rotmatrixBlock += `if(l == ${i}) rotMatrix = rotMatrix${i};\n`;
  }
  const vertexBeforePositionUpdated = tube_vertexBeforePositionUpdated.replace(
    '// -- rotmatrix-here --',
    rotmatrixBlock,
  );

  mat.Vertex_Definitions(tube_vertexDefinitions);
  mat.Vertex_Before_PositionUpdated(vertexBeforePositionUpdated);
  mat.Vertex_After_WorldPosComputed(tube_vertexAfterWorldPosComputed);
  mat.Fragment_Definitions(tube_fragmentDefinitions);
  mat.Fragment_Custom_Albedo(tube_fragmentCustomAlbedo);

  // ----------------------------

  const rotationMatrices = Array(segments)
    .fill(0)
    .map(() => {
      return Matrix.Identity();
    });

  const rMatrix = Matrix.Identity();

  function rotationBehaviour(speed = 0.005) {
    function rotateAroundWorldAxis(axis, radians) {
      const rotationMatrix = Matrix.RotationAxis(axis.normalize(), radians);
      rMatrix.multiplyToRef(rotationMatrix, rMatrix);

      rotationMatrices[0] = rMatrix;
    }

    random.setSeed(300);

    setInterval(() => {
      const t = +new Date() * 0.001;

      const dx = random.noise1D(t, 0.5, 0.4) * 0.1;
      const dy = random.noise1D(t + 1000, 0.5, 0.4) * 0.1;

      rotateAroundWorldAxis(new Vector3(0, 1, 0), dx);
      rotateAroundWorldAxis(new Vector3(1, 0, 0), dy);
    }, 20);
  }

  rotationBehaviour(0.003);

  // ----------------------------

  mat.AddUniform('tubeLength', 'float');
  mat.AddUniform('segments', 'float');

  for (let i = 0; i < segments; i += 1) {
    mat.AddUniform(`rotMatrix${i}`, 'mat4');
  }

  mat.onBind = () => {
    mat.getEffect().setFloat('tubeLength', tubeLength);
    mat.getEffect().setFloat('segments', segments);

    for (let i = 0; i < segments; i += 1) {
      mat.AddUniform(`rotMatrix${i}`, 'float');
      mat.getEffect().setMatrix(`rotMatrix${i}`, rotationMatrices[i]);
    }
  };

  // ----------------------------

  const iID = setInterval(() => {
    for (let i = rotationMatrices.length; i > 0; i -= 1) {
      rotationMatrices[i] = rotationMatrices[i - 1].clone();
    }
  }, 20);

  // -------------------------

  Effect.ShadersStore.postProcessFragmentShader = postprocessFragment;
  new PostProcess('shade-sides', 'postProcess', null, null, 1.0, camera);

  const defaultPipeline = new DefaultRenderingPipeline('default', true, scene, [camera]);
  defaultPipeline.fxaaEnabled = false;
  defaultPipeline.imageProcessingEnabled = false;
  defaultPipeline.samples = 16;

  defaultPipeline.chromaticAberrationEnabled = true;
  defaultPipeline.chromaticAberration.aberrationAmount = 2.0;

  defaultPipeline.bloomEnabled = true;
  defaultPipeline.bloomThreshold = 0.25;
  defaultPipeline.bloomWeight = 1.25;
  defaultPipeline.bloomKernel = 120;
  defaultPipeline.bloomScale = 0.5;

  defaultPipeline.grainEnabled = true;
  defaultPipeline.grain.intensity = 5;
  defaultPipeline.grain.animated = true;

  return {
    render({ time, width, height, deltaTime }) {
      scene.render();
    },
    resize({ pixelRatio, width, height }) {
      engine.resize();
    },
    unload() {
      clearInterval(iID);
      engine.dispose();
    },
  };
};

export default { sketch, settings };
