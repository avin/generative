import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { PBRCustomMaterial } from '@babylonjs/materials/custom/pbrCustomMaterial';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData';
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader';
import '@babylonjs/core/Loading/loadingScreen';
// import '@babylonjs/loaders/glTF';
import '@babylonjs/loaders/glTF/2.0/glTFLoader';
import '@babylonjs/loaders/glTF/2.0/Extensions/KHR_draco_mesh_compression';
import anime from 'animejs';

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
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 10.0, new Vector3(0, 0, 0), scene);
  camera.wheelPrecision = 50;
  camera.minZ = 0.9;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-2, 2, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);

  SceneLoader.ShowLoadingScreen = false;
  await SceneLoader.AppendAsync('./', 'static/assets/models/bevel-box.glb', scene);

  const mesh = scene.meshes[1];

  mesh.markVerticesDataAsUpdatable(VertexBuffer.PositionKind, true);
  mesh.markVerticesDataAsUpdatable(VertexBuffer.NormalKind, true);

  const mat = new PBRCustomMaterial('plastic', scene);
  // mat.wireframe = true;
  mat.metallic = 0.0;
  mat.roughness = 0.2;
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

  // animate({
  //   from: 1,
  //   // duration: 1000,
  //   to: 1.5,
  //   // repeat: Infinity,
  //   // repeatType: "mirror",
  //   type: 'spring',
  //   mass: 5.1,
  //   stiffness: 5000,
  //   damping: 20,
  //   // driver: driver.updateFunc,
  //
  //   onUpdate: (v) => {
  //     mesh.scaling = new Vector3(v, v, v);
  //   },
  // });

  const obj = {
    v: 1,
  };
  const animation = anime({
    targets: mesh.scaling,
    x: 1.5,
    y: 1.5,
    z: 1.5,
    // duration: 8000,
    // loop: true,
    // direction: 'alternate',
    // easing: 'spring(10, 100, 10, 5)',
    // easing: 'easeOutElastic(1, .3)',
    // easing: 'cubicBezier(0.585, -0.335, 0.600, 1.330)',
    easing: 'steps(5)',

    // easing: 'easeOutElastic',
    // update: () => {
    //   const v = obj.v;
    //   mesh.scaling = new Vector3(v, v, v);
    // },
    // autoplay: false
  });

  // ------------------------------

  return {
    render({ time, width, height, frame, deltaTime }) {
      // animation.tick(time*1000);

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
