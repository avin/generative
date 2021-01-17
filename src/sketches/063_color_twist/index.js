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

import mesh_vertexDefinitions from './shaders/mesh/vertexDefinitions.glsl';
import mesh_vertexBeforePositionUpdated from './shaders/mesh/vertexBeforePositionUpdated.glsl';
import mesh_vertexAfterWorldPosComputed from './shaders/mesh/vertexAfterWorldPosComputed.glsl';
import mesh_fragmentDefinitions from './shaders/mesh/fragmentDefinitions.glsl';
import mesh_fragmentCustomDiffuse from './shaders/mesh/fragmentCustomDiffuse.glsl';
import mesh_fragmentBeforeFragColor from './shaders/mesh/fragmentBeforeFragColor.glsl';
import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import star_vertexDefinitions from '@/sketches/062_star_track/shaders/star/vertexDefinitions.glsl';
import star_vertexBeforePositionUpdated from '@/sketches/062_star_track/shaders/star/vertexBeforePositionUpdated.glsl';
import star_vertexAfterWorldPosComputed from '@/sketches/062_star_track/shaders/star/vertexAfterWorldPosComputed.glsl';
import star_fragmentDefinitions from '@/sketches/062_star_track/shaders/star/fragmentDefinitions.glsl';
import star_fragmentCustomDiffuse from '@/sketches/062_star_track/shaders/star/fragmentCustomDiffuse.glsl';

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

  const initTime = +new Date();

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = Color3.FromHexString('#182026');

  const camera = new ArcRotateCamera('camera', -0.1, 0, 20, new Vector3(0, 0, 0), scene);
  camera.fov = 1.0;
  camera.minZ = 0.1;
  camera.lowerRadiusLimit = 1;
  camera.upperRadiusLimit = 50;
  camera.wheelDeltaPercentage = 0.01;
  camera.pinchDeltaPercentage = 0.01;
  camera.lowerBetaLimit = .1;
  camera.upperBetaLimit = Math.PI / 2 - 0.001;

  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);
  baseLight.diffuse = new Color3(1.0, 1.0, 1.0);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);
  baseLight.intensity = 1.0;

  // -----------------------------

  const radius = 1.25;
  const mesh = MeshBuilder.CreateTube(
    'torus',
    {
      path: (() => {
        const path = [];
        const size = 5.0;
        const segments = 512;
        const length = Math.PI * 2 * 2;
        const step = length / segments;
        let sm = 0;
        for (let i = 0; i < length + step*2; i += step) {
          const iPhase = i * 3 + sm;
          const x = Math.cos(i) * (size + Math.sin(iPhase) * radius);
          const y = Math.cos(iPhase);
          const z = Math.sin(i) * (size + Math.sin(iPhase) * radius);
          path.push(new Vector3(x, y, z));

          sm += (Math.PI * 2) / segments;

          // step += Math.PI*2/segments;
        }
        return path;
      })(),

      radiusFunction: i => {
        if (i === 0) {
          return radius * 0.98;
        }
        return radius;
      },
      tessellation: 64,
      sideOrientation: Mesh.DOUBLESIDE,
    },
    scene,
  );

  mesh.rotate(new Vector3(1,0,0), Math.PI);

  const meshMaterial = new CustomMaterial('meshMaterial', scene);
  meshMaterial.emissiveColor = Color3.Black();
  meshMaterial.specularColor = Color3.Black();
  meshMaterial.diffuseTexture = new Texture('NONE', scene); // to appear UV attributes
  mesh.material = meshMaterial;

  // ---------------------------------------

  meshMaterial.Vertex_Definitions(mesh_vertexDefinitions);
  meshMaterial.Vertex_Before_PositionUpdated(mesh_vertexBeforePositionUpdated);
  meshMaterial.Vertex_After_WorldPosComputed(mesh_vertexAfterWorldPosComputed);
  meshMaterial.Fragment_Definitions(mesh_fragmentDefinitions);
  meshMaterial.Fragment_Custom_Diffuse(mesh_fragmentCustomDiffuse);

  meshMaterial.AddUniform('iTime', 'float');

  meshMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    meshMaterial.getEffect().setFloat('iTime', time);
  };

  // ---------------------------------------

  const ssao = new SSAO2RenderingPipeline('ssao', scene, {
    ssaoRatio: 1.5, // Ratio of the SSAO post-process, in a lower resolution
    blurRatio: 1, // Ratio of the combine post-process (combines the SSAO and the scene)
  });
  ssao.radius = 0.5;
  ssao.totalStrength = 0.75;
  ssao.expensiveBlur = true;
  ssao.samples = 32;
  ssao.maxZ = 100;

  scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline('ssao', camera);

  // -------------------------------

  const defaultPipeline = new DefaultRenderingPipeline('default', false, scene, [camera]);
  defaultPipeline.fxaaEnabled = true;
  defaultPipeline.samples = 8;

  // //
  // defaultPipeline.bloomEnabled = true;
  // defaultPipeline.bloomThreshold = 0.17;
  // defaultPipeline.bloomWeight = 0.5;
  // defaultPipeline.bloomKernel = 100;
  // defaultPipeline.bloomScale = 0.9;

  // -------------------------------

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
