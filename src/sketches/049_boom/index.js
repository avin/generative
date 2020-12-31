import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { Vector3, Matrix } from '@babylonjs/core/Maths/math';
import { Effect } from '@babylonjs/core/Materials/effect';
import '@babylonjs/core/Rendering/depthRendererSceneComponent';
import { ShaderMaterial } from '@babylonjs/core/Materials/shaderMaterial';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import customVertexShader from './shaders/vert.glsl';
import customFragmentShader from './shaders/frag.glsl';

const settings = {
  animate: true,
  context: 'webgl',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  const scene = new Scene(engine);
  scene.clearColor = new Color3(16 / 255, 22 / 255, 26 / 255);

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.7, Math.PI / 3.5, 20, new Vector3(0, 0, 0), scene);
  camera.attachControl(canvas, true);
  camera.fov = 1.4; // field of view
  camera.minZ = 0.1; // near plane

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  Effect.ShadersStore.customVertexShader = customVertexShader;
  Effect.ShadersStore.customFragmentShader = customFragmentShader;

  // Material

  const meshesCount = 1000;

  const material = new ShaderMaterial(
    'material',
    scene,
    {
      vertex: 'custom',
      fragment: 'custom',
    },
    {
      attributes: ['position', 'normal', 'uv', 'idx', 'iTime'],
      uniforms: [
        'world',
        'worldView',
        'worldViewProjection',
        'view',
        'projection',
        'viewProjection',
        'iTime',
        'maxSegments',
        'meshesCount'
      ],
      needAlphaBlending: true,
    },
  );
  // material.wireframe = true;

  // Tubes here

  const sideOrientation = Mesh.DOUBLESIDE;
  const radius = 0.1;

  const path = [];
  const maxSegments = 100;
  for (let i = 0; i < maxSegments; i += 1) {
    const x = i;
    const y = 0;
    const z = 0;
    path.push(new Vector3(x, y, z));
  }
  const mesh = Mesh.CreateTube('tube', path, radius, 3, null, 0, scene, true, sideOrientation);
  mesh.material = material;

  mesh.thinInstanceRegisterAttribute('idx', 1);

  for (let n = 0; n <= meshesCount; n += 1) {
    const matrix = Matrix.Translation(0, 0, 0);

    const idx = mesh.thinInstanceAdd(matrix);
    mesh.thinInstanceSetAttributeAt('idx', idx, [n]);
  }

  material.setFloat('maxSegments', maxSegments);
  material.setFloat('meshesCount', meshesCount);

  // Finally create the motion blur effect :)


  return {
    render({ time, width, height }) {
      material.setFloat('iTime', time);

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
