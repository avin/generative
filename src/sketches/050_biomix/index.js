import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import '@babylonjs/core/Rendering/prePassRendererSceneComponent';
import { Vector3, Matrix } from '@babylonjs/core/Maths/math';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { MotionBlurPostProcess } from '@babylonjs/core/PostProcesses/motionBlurPostProcess';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import vertexDefinitions from './shaders/vertexDefinitions.glsl';
import vertexBeforePositionUpdated from './shaders/vertexBeforePositionUpdated.glsl';
import fragmentDefinitions from './shaders/fragmentDefinitions.glsl';
import fragmentCustomDiffuse from './shaders/fragmentCustomDiffuse.glsl';

const settings = {
  animate: true,
  context: 'webgl2',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true);

  const scene = new Scene(engine);
  scene.clearColor = new Color3(16 / 255, 22 / 255, 26 / 255);

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.7, Math.PI / 3.5, 0.7, new Vector3(0, 0, 0), scene);
  camera.lowerBetaLimit = null;
  camera.upperBetaLimit = null;
  camera.lowerAlphaLimit = null;
  camera.upperAlphaLimit = null;
  camera.allowUpsideDown = true;
  camera.attachControl(canvas, true);
  camera.fov = 1.0;
  camera.minZ = 0.1;
  camera.wheelPrecision = 150.0;

  const light = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  light.diffuse = new Color3(1, 1, 1);
  light.specular = new Color3(0, 0, 0);
  light.groundColor = new Color3(0.5, 0.5, 0.5);

  const mat = new CustomMaterial('s', scene);
  mat.specularColor = new Color3(0, 0, 0);

  const meshesCount = 10000;

  const path = [];
  const maxSegments = 20;
  for (let i = 0; i < maxSegments; i += 1) {
    path.push(new Vector3(i, 0, 0));
  }
  const mesh = Mesh.CreateTube('tube', path, 0.5, 6, null, Mesh.CAP_END, scene, true, Mesh.DEFAULTSIDE);
  mesh.material = mat;

  const bufferMatrices = new Float32Array(16 * meshesCount);
  const bufferIdx = new Float32Array(meshesCount);

  const idxArr = [];
  for (let n = 0; n < meshesCount; n += 1) {
    const matrix = Matrix.Translation(0, 0, 0);
    matrix.copyToArray(bufferMatrices, n * 16);
    idxArr.push(n);
  }
  bufferIdx.set(idxArr);

  mesh.thinInstanceSetBuffer('matrix', bufferMatrices, 16);
  mesh.thinInstanceSetBuffer('idx', bufferIdx, 1);

  mat.AddUniform('iTime', 'float');
  mat.AddUniform('maxSegments', 'float');
  mat.AddUniform('meshesCount', 'float');
  mat.AddUniform('cameraPosition', 'vec3');
  mat.AddAttribute('idx');

  mat.Vertex_Definitions(vertexDefinitions);
  mat.Vertex_Before_PositionUpdated(vertexBeforePositionUpdated);
  mat.Fragment_Definitions(fragmentDefinitions);
  mat.Fragment_Custom_Diffuse(fragmentCustomDiffuse);

  const initTime = +new Date();
  let time = 0;
  mat.onBind = () => {
    mat.getEffect().setFloat('maxSegments', maxSegments);
    mat.getEffect().setFloat('meshesCount', meshesCount);
    mat.getEffect().setFloat('cameraPosition', Vector3.Zero());

    time = (+new Date() - initTime) * 0.001;
    mat.getEffect().setFloat('iTime', time);
  };

  const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 0.5775, segments: 16 }, scene);
  const sphereMaterial = new StandardMaterial('texture1', scene);
  sphere.sideOrientation = Mesh.DOUBLESIDE;
  sphereMaterial.diffuseColor = new Color3(72 / 255, 175 / 255, 240 / 255);
  sphereMaterial.specularColor = new Color3(0, 0, 0);
  sphere.material = sphereMaterial;
  sphere.visibility = 0.5;

  //
  // PostProcess
  //

  const pipeline = new DefaultRenderingPipeline(
    'defaultPipeline', // The name of the pipeline
    true,
    scene,
    [camera],
  );

  pipeline.imageProcessingEnabled = false;

  pipeline.chromaticAberrationEnabled = true;
  pipeline.chromaticAberration.aberrationAmount = 10;

  pipeline.grainEnabled = true;
  pipeline.grain.intensity = 25;
  pipeline.grain.animated = true;

  const motionBlur = new MotionBlurPostProcess('mb', scene, 2.0, camera);
  motionBlur.motionStrength = 1.5;
  motionBlur.isObjectBased = false;

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
