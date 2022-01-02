import canvasSketch from 'canvas-sketch';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Effect } from '@babylonjs/core/Materials/effect';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { PointsCloudSystem } from '@babylonjs/core/Particles/pointsCloudSystem';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
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

  const scene = new Scene(engine);
  scene.clearColor = Color3.FromHexString('#182026');

  const camera = new ArcRotateCamera('camera1', -1.09, 1.49, 50, new Vector3(0, 10, 0), scene);
  camera.attachControl(canvas, true);

  const pcs = new PointsCloudSystem('pcs', 10, scene);

  const totalParticles = 250000;
  const rowSize = Math.sqrt(totalParticles);
  const spaceBetweenFactor = 1;

  pcs.addPoints(totalParticles, (particle, idx) => {
    const y = (idx / rowSize) | 0;
    const x = idx % rowSize;

    particle.position.x = (x - rowSize / 2) * spaceBetweenFactor;
    particle.position.z = (y - rowSize / 2) * spaceBetweenFactor;
  });
  const mesh = await pcs.buildMeshAsync();

  // --------------------------------

  const mat = new StandardMaterial('s', scene);
  mesh.material = mat;
  mat.disableLighting = true;
  mat.pointsCloud = true;
  mat.pointSize = 25;
  mat.alphaMode = Engine.ALPHA_ADD;
  mat.alpha = 0.5;

  mat.customShaderNameResolve = (shaderName, uniforms, uniformBuffers, samplers, defines, attributes, options) => {
    Effect.ShadersStore.particlesVertexShader = Effect.ShadersStore.defaultVertexShader;
    Effect.ShadersStore.particlesPixelShader = Effect.ShadersStore.defaultPixelShader;

    uniforms.push('iTime');
    uniforms.push('cameraPosition');
    uniforms.push('rowSize');
    uniforms.push('renderHeight');

    [
      ['CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR', require('./shaders/particles/CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR.glsl')],
      ['CUSTOM_FRAGMENT_DEFINITIONS', require('./shaders/particles/CUSTOM_FRAGMENT_DEFINITIONS.glsl')],
      ['CUSTOM_VERTEX_DEFINITIONS', require('./shaders/particles/CUSTOM_VERTEX_DEFINITIONS.glsl')],
      ['CUSTOM_VERTEX_UPDATE_POSITION', require('./shaders/particles/CUSTOM_VERTEX_UPDATE_POSITION.glsl')],
    ].forEach(([name, shader]) => {
      if (name.startsWith('CUSTOM_VERTEX')) {
        Effect.ShadersStore.particlesVertexShader = Effect.ShadersStore.particlesVertexShader.replace(
          `#define ${name}`,
          shader.default,
        );
      }
      if (name.startsWith('CUSTOM_FRAGMENT')) {
        Effect.ShadersStore.particlesPixelShader = Effect.ShadersStore.particlesPixelShader.replace(
          `#define ${name}`,
          shader.default,
        );
      }
    });

    return 'particles';
  };

  const initTime = +new Date();
  mat.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;

    mat.getEffect().setVector3('cameraPosition', camera.position);
    mat.getEffect().setFloat('iTime', time);
    mat.getEffect().setFloat('rowSize', rowSize);
    mat.getEffect().setFloat('renderHeight', scene.getEngine().getRenderHeight());
  };

  return {
    render({ time }) {
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
