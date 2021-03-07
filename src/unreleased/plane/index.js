import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Vector2, Vector3 } from '@babylonjs/core/Maths/math';
import { Effect } from '@babylonjs/core/Materials/effect';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { getWebGLContext } from '@/utils/webgl';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';

const settings = {
  animate: true,
  context: getWebGLContext(),
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  const scene = new Scene(engine);
  scene.clearColor = Color3.FromHexString('#182026');

  const camera = new ArcRotateCamera('camera1', -1.1, 0.76, 50, new Vector3(0, 0, 0), scene);
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  baseLight.intensity = 0.25;

  const dirLight = new DirectionalLight('dirLight', new Vector3(-1, -2, 1), scene);
  dirLight.position = new Vector3(20, 40, -20);
  dirLight.intensity = 3;

  const size = 100;
  const mesh = MeshBuilder.CreateGround('g', { width: size, height: size, subdivisions: size }, scene);

  // --------------------------------

  const mat = new StandardMaterial('s', scene);
  // mat.diffuseColor = new Color3(1,0,1);
  // mat.diffuseTexture = new Texture('NONE', scene);
  mat.specularColor = Color3.Black();
  mesh.material = mat;
  // mat.disableLighting = true;
  // mat.pointSize = 25;
  // mat.alphaMode = Engine.ALPHA_ADD;
  // mat.alpha = 0.5;
  // mat.wireframe = true;

  mat.customShaderNameResolve = (shaderName, uniforms, uniformBuffers, samplers, defines, attributes, options) => {
    Effect.ShadersStore.planeVertexShader = Effect.ShadersStore.defaultVertexShader;
    Effect.ShadersStore.planePixelShader = Effect.ShadersStore.defaultPixelShader;

    uniforms.push('iTime');
    uniforms.push('iResolution');

    attributes.push('uv');

    [
      ['CUSTOM_FRAGMENT_UPDATE_DIFFUSE', require('./shaders/plane/CUSTOM_FRAGMENT_UPDATE_DIFFUSE.glsl')],
      ['CUSTOM_FRAGMENT_DEFINITIONS', require('./shaders/plane/CUSTOM_FRAGMENT_DEFINITIONS.glsl')],
      ['CUSTOM_VERTEX_DEFINITIONS', require('./shaders/plane/CUSTOM_VERTEX_DEFINITIONS.glsl')],
      ['CUSTOM_VERTEX_UPDATE_POSITION', require('./shaders/plane/CUSTOM_VERTEX_UPDATE_POSITION.glsl')],
    ].forEach(([name, shader]) => {
      if (name.startsWith('CUSTOM_VERTEX')) {
        Effect.ShadersStore.planeVertexShader = Effect.ShadersStore.planeVertexShader.replace(
          `#define ${name}`,
          shader.default,
        );
      }
      if (name.startsWith('CUSTOM_FRAGMENT')) {
        Effect.ShadersStore.planePixelShader = Effect.ShadersStore.planePixelShader.replace(
          `#define ${name}`,
          shader.default,
        );
      }
    });

    return 'plane';
  };

  const initTime = +new Date();
  mat.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    mat.getEffect().setFloat('iTime', time);
    mat.getEffect().setVector2('iResolution', new Vector2(size, size));
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

export default { sketch, settings };
