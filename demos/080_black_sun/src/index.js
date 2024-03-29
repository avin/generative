import canvasSketch from 'canvas-sketch';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { Matrix, Quaternion, Vector2, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { Effect } from '@babylonjs/core/Materials/effect';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { ShaderMaterial } from '@babylonjs/core/Materials/shaderMaterial';
import { getWebGLContext } from './webgl';
import ocean_vertexDefinitions from './shaders/ocean/vertexDefinitions.glsl';
import ocean_fragmentBeforeFragColor from './shaders/ocean/fragmentBeforeFragColor.glsl';
import ocean_vertexBeforePositionUpdated from './shaders/ocean/vertexBeforePositionUpdated.glsl';
import sun_fragment from './shaders/sun/fragment.glsl';
import sun_vertex from './shaders/sun/vertex.glsl';

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

  const initTime = +new Date();

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = new Color3(0, 0, 0);

  const camera = new ArcRotateCamera('camera', Math.PI / 4 + 0.3, 1.575, 10.0, new Vector3(0, 2, 0), scene);
  camera.wheelPrecision = 50;
  camera.minZ = 0.125;
  camera.fov = 1.0;
  // camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.5, 0.5, 0.5);
  baseLight.intensity = 0.25;

  const dirLight = new DirectionalLight('dirLight', new Vector3(1, -1.5, 1), scene);
  dirLight.intensity = 1.25;
  dirLight.position = new Vector3(-20, 5, -20);

  const subdivisions = 40;

  const plane = MeshBuilder.CreateGround('ocean', {
    width: 1,
    height: 1,
    subdivisions,
  });
  plane.isPickable = false;
  plane.doNotSyncBoundingInfo = false;
  plane.freezeWorldMatrix();

  const farPlane = MeshBuilder.CreateGround('oceanFar', {
    width: 1,
    height: 1,
    subdivisions: 20,
  });

  const oceanMaterial = new StandardMaterial('oceanMaterial', scene);

  plane.material = oceanMaterial;
  farPlane.material = oceanMaterial;

  // -------------------------

  for (let n = 0; n < 2; n += 1) {
    const matrixArr = [];
    const cellPosArr = [];

    for (let x = -40; x < 40; x += 1) {
      for (let y = -40; y < 40; y += 1) {
        if (n === 0) {
          if (Math.abs(x) < 10 || Math.abs(y) < 10) {
            matrixArr.push(Matrix.Translation(x, 0, y));
            cellPosArr.push([x, y]);
          }
        } else if (!(Math.abs(x) < 10 || Math.abs(y) < 10)) {
          matrixArr.push(Matrix.Translation(x, 0, y));
          cellPosArr.push([x, y]);
        }
      }
    }

    const matrixBuf = new Float32Array(16 * matrixArr.length);
    const cellPosBuf = new Float32Array(2 * cellPosArr.length);
    for (let i = 0; i < matrixArr.length; i += 1) {
      matrixArr[i].copyToArray(matrixBuf, i * 16);

      cellPosBuf[i * 2] = cellPosArr[i][0];
      cellPosBuf[i * 2 + 1] = cellPosArr[i][1];
    }
    if (n === 0) {
      plane.thinInstanceSetBuffer('matrix', matrixBuf, 16);
      plane.thinInstanceSetBuffer('cellPos', cellPosBuf, 2);
    } else {
      farPlane.thinInstanceSetBuffer('matrix', matrixBuf, 16);
      farPlane.thinInstanceSetBuffer('cellPos', cellPosBuf, 2);
    }
  }

  oceanMaterial.customShaderNameResolve = (
    shaderName,
    uniforms,
    uniformBuffers,
    samplers,
    defines,
    attributes,
    options,
  ) => {
    Effect.ShadersStore.oceanVertexShader = Effect.ShadersStore.defaultVertexShader;
    Effect.ShadersStore.oceanPixelShader = Effect.ShadersStore.defaultPixelShader;

    uniforms.push('iTime');
    attributes.push('cellPos');

    Effect.ShadersStore.oceanVertexShader = Effect.ShadersStore.oceanVertexShader
      .replace(`#define CUSTOM_VERTEX_DEFINITIONS`, ocean_vertexDefinitions)
      .replace(`#define CUSTOM_VERTEX_UPDATE_POSITION`, ocean_vertexBeforePositionUpdated);

    Effect.ShadersStore.oceanPixelShader = Effect.ShadersStore.oceanPixelShader.replace(
      `#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR`,
      ocean_fragmentBeforeFragColor,
    );

    return 'ocean';
  };

  oceanMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    oceanMaterial.getEffect().setFloat('iTime', time);
  };

  // SUN --------------------------

  const sun = MeshBuilder.CreatePlane('sun', { size: 60 }, scene);
  // const rotationQuaternion = new Quaternion();
  const q1 = Quaternion.RotationAxis(new Vector3(0, 1, 0), Math.PI);
  const q2 = Quaternion.RotationAxis(new Vector3(0, 1, 0), Math.PI / 4).multiply(q1);
  sun.rotationQuaternion = q2;
  sun.position = new Vector3(-40, 15.5, -40);

  // ----------------------

  Effect.ShadersStore.sunVertexShader = sun_vertex;
  Effect.ShadersStore.sunFragmentShader = sun_fragment;

  const shader = new ShaderMaterial(
    'shader',
    scene,
    {
      vertex: 'sun',
      fragment: 'sun',
    },
    {
      attributes: ['position', 'normal', 'uv'],
      defines: ['precision highp float;'],
      uniforms: ['world', 'worldView', 'worldViewProjection', 'view', 'iTime', 'iResolution'],
    },
  );

  shader.setVector2('iResolution', new Vector2(1, 1));

  sun.material = shader;
  sun.material.backFaceCulling = false;

  scene.registerBeforeRender(() => {
    const time = (+new Date() - initTime) * 0.001;
    shader.setFloat('iTime', time);
    shader.setVector2('iResolution', new Vector2(1, 1));
  });

  // ------------------------------

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

canvasSketch(sketch, settings);
