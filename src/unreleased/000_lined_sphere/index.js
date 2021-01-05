import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { PointLight, VolumetricLightScatteringPostProcess } from '@babylonjs/core';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import {VertexBuffer} from "@babylonjs/core/Meshes/buffer";

import tube_vertexDefinitions from './shaders/tube/vertexDefinitions.glsl';
import tube_vertexBeforePositionUpdated from './shaders/tube/vertexBeforePositionUpdated.glsl';
import tube_fragmentDefinitions from './shaders/tube/fragmentDefinitions.glsl';
import tube_fragmentCustomDiffuse from './shaders/tube/fragmentCustomDiffuse.glsl';

const settings = {
  animate: true,
  context: 'webgl',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true);

  //
  // Settings ===============================
  //

  const rowsCount = 100;
  const tubeTessellation = 10;

  const initTime = +new Date();

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = new Color3(16 / 255, 22 / 255, 26 / 255);
  scene.autoClear = false; // Color buffer
  scene.autoClearDepthAndStencil = false; // Depth and stencil, obviously

  const camera = new ArcRotateCamera('camera', Math.PI / 1.5, Math.PI / 3, 200.0, new Vector3(0, 0, 0), scene);
  camera.attachControl(canvas, true);

  camera.lowerRadiusLimit = 100;
  camera.fov = 0.8;

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.intensity = 0.5;
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(1, 1, 1);

  const pointLight = new PointLight('pointLight', new Vector3(0, 0, 0), scene);
  pointLight.intensity = 5;

  const tubeMaterial = new CustomMaterial('tubeMaterial', scene);
  tubeMaterial.specularColor = new Color3(0.0, 0.0, 0.0);
  tubeMaterial.freeze();

  //
  // Meshes
  //

  const sun = MeshBuilder.CreateSphere('sun', {
    diameter: rowsCount - 1,
    segments: 32,
  });
  const sunMaterial = new StandardMaterial('sunMaterial', scene);
  sunMaterial.diffuseColor = new Color3(0.5, 0.5, 0.5);
  sunMaterial.specularColor = new Color3(0.0, 0.0, 0.0);
  sunMaterial.emissiveColor = new Color3(0.1, 0.1, 0.1);
  sunMaterial.freeze();
  sun.material = sunMaterial;

  const segmentStep = 0.01;

  const tubePathFunction = (rowRadius) => {
    const path = [];
    const maxLength = Math.PI * 2;
    const randomStart = Math.random() * maxLength;
    const randomLength = maxLength / 4 + (Math.random() * maxLength) / 4;
    for (let i = randomStart; i < randomStart + randomLength; i += segmentStep) {
      path.push(new Vector3(Math.cos(i) * rowRadius, 0, Math.sin(i) * rowRadius));
    }
    return path;
  };

  const getRadiusFunction = (total) => (i, distance, d) => {
    if (i === 0) {
      return 0.0;
    }
    if (i === total - 1) {
      return 0.0;
    }

    return 0.5;
  };

  const rowsCountHalf = rowsCount / 2;
  const meshes = [];
  for (let i = -rowsCountHalf; i <= rowsCountHalf; i += 1) {
    const R = rowsCountHalf;

    const rowRadius = Math.sqrt(Math.abs(R * R - i * i));

    if (rowRadius) {
      const path = tubePathFunction(rowRadius);
      const mesh = MeshBuilder.CreateTube(
        'tube',
        {
          path,
          radiusFunction: getRadiusFunction(path.length),
          tessellation: tubeTessellation,
          updatable: false,
        },
        scene,
      );
      mesh.doNotSyncBoundingInfo = true;
      mesh.material = tubeMaterial;

      mesh.position.y = i;

      const data = new Float32Array(1);
      data[0] = i;

      const buffer = new VertexBuffer(engine, data, 'factor', false, false, 1, true);
      mesh.setVerticesBuffer(buffer);

      meshes.push(mesh);
    }
  }

  //
  // Shaders
  //

  tubeMaterial.AddAttribute('factor');

  tubeMaterial.Vertex_Definitions(tube_vertexDefinitions);
  tubeMaterial.Vertex_Before_PositionUpdated(tube_vertexBeforePositionUpdated);
  tubeMaterial.Fragment_Definitions(tube_fragmentDefinitions);
  tubeMaterial.Fragment_Custom_Diffuse(tube_fragmentCustomDiffuse);

  tubeMaterial.AddUniform('iTime', 'float');
  tubeMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    tubeMaterial.getEffect().setFloat('iTime', time);
  };

  //
  // GodRays
  //

  const vls = new VolumetricLightScatteringPostProcess(
    'godrays',
    { postProcessRatio: 1.0, passRatio: 0.5 },
    camera,
    sun,
    100,
    Texture.BILINEAR_SAMPLINGMODE,
    engine,
    false,
  );
  vls.useDiffuseColor = true;

  // Postprocess

  const pipeline = new DefaultRenderingPipeline(
    'defaultPipeline', // The name of the pipeline
    true,
    scene,
    [camera],
  );

  pipeline.imageProcessingEnabled = false;

  pipeline.samples = 4;
  pipeline.fxaaEnabled = true;

  // Chromatic Aberration
  pipeline.chromaticAberrationEnabled = true;
  pipeline.chromaticAberration.aberrationAmount = 10;

  // pipeline.bloomEnabled = true;
  pipeline.bloomThreshold = 0;
  pipeline.bloomWeight = 0.1;
  pipeline.bloomKernel = 1;
  pipeline.bloomScale = 0.25;

  // Grain
  pipeline.grainEnabled = true;
  pipeline.grain.intensity = 32;
  pipeline.grain.animated = true;

  // =======================

  scene.freezeActiveMeshes();

  const rotationAxis = new Vector3(0, 1, 0);
  let prevTime = 0;
  return {
    render({ time, width, height }) {
      const timeDiff = time - prevTime;
      if (timeDiff) {
        prevTime = time;

        meshes.forEach((mesh, idx) => {
          const direction = idx % 2 ? 1 : -1;
          mesh.rotate(rotationAxis, timeDiff * direction * 1.5);
        });
      }

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
