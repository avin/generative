import '@babylonjs/core/Meshes/thinInstanceMesh';

import { getWebGLContext } from '@/utils/webgl';
import { PointLight, PostProcess, ProceduralTexture } from '@babylonjs/core';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Effect } from '@babylonjs/core/Materials/effect';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { Scene } from '@babylonjs/core/scene';
import { PBRCustomMaterial } from '@babylonjs/materials/custom/pbrCustomMaterial';

import main_fragmentCustomAlbedo from './shaders/main/fragmentCustomAlbedo.glsl';
import main_vertexBeforePositionUpdated from './shaders/main/vertexBeforePositionUpdated.glsl';
import main_vertexDefinitions from './shaders/main/vertexDefinitions.glsl';
import metallicPixelShader from './shaders/metallic/pixel.glsl';
import postprocessFragment from './shaders/postprocess/fragment.glsl';

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
  // Settings ===============================
  //

  const groundColor = new Color3.FromHexString('#5C255C').toLinearSpace();

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);

  scene.clearColor = Color3.FromHexString('#000000');
  scene.fogMode = Scene.FOGMODE_EXP2;
  scene.fogDensity = 0.015;
  scene.fogColor = Color3.FromHexString('#000000');

  scene.environmentTexture = CubeTexture.CreateFromPrefilteredData('static/assets/env/e1.dds', scene);
  scene.freezeActiveMeshes(true);

  const camera = new ArcRotateCamera('camera', Math.PI / 2, Math.PI / 2, 5, new Vector3(0, 0, 0), scene);
  camera.fov = 1.5;
  camera.minZ = 0.1;

  camera.attachControl(canvas, true);

  [new Vector3(-3, -2, 5), new Vector3(2, 2, 5), new Vector3(3, 3, 5), new Vector3(1, 0, 3)].forEach((pos) => {
    const light = new PointLight('dir01', pos, scene);
    light.intensity = Math.random() * 30.75 + 10;
  });

  // ---------------------------------------

  const size = 10;

  const ground = MeshBuilder.CreateGround('box', { width: size, height: size, subdivisions: 1000 }, scene);
  ground.renderingGroupId = 1;
  ground.isPickable = false;
  ground.rotate(new Vector3(1, 0, 0), Math.PI / 2);

  const pbr = new PBRCustomMaterial('pbr', scene);
  ground.material = pbr;

  Effect.ShadersStore.metallicPixelShader = metallicPixelShader;
  const metallicTexture = new ProceduralTexture('flowNrm', 512, 'metallic', scene, null, false, false);

  pbr.albedoColor = groundColor;
  pbr.metallic = 0.9;
  pbr.roughness = 0.91;
  pbr.useRoughnessFromMetallicTextureAlpha = true;
  pbr.metallicTexture = metallicTexture;

  pbr.Vertex_Before_PositionUpdated(main_vertexBeforePositionUpdated);
  pbr.Vertex_Definitions(main_vertexDefinitions);
  pbr.Fragment_Custom_Albedo(main_fragmentCustomAlbedo);

  pbr.AddUniform('iTime', 'float');
  pbr.AddUniform('size', 'float');

  // --------------------------------

  const baseGround = MeshBuilder.CreateGround('ground', {
    width: 2000,
    height: 2000,
    subdivisions: 1,
  });
  baseGround.rotate(new Vector3(1, 0, 0), Math.PI / 2);

  const baseGroundMaterial = new PBRMaterial('mat', scene);
  baseGroundMaterial.albedoColor = groundColor;
  baseGroundMaterial.metallic = 0.9;
  baseGroundMaterial.roughness = 0.91;

  baseGround.material = baseGroundMaterial;

  // --------------------------------

  const initTime = +new Date();
  pbr.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    pbr.getEffect().setFloat('iTime', time);
    pbr.getEffect().setFloat('size', size);
  };

  // ----------------------------

  Effect.ShadersStore.customFragmentShader = postprocessFragment;
  new PostProcess('shade-sides', 'custom', null, null, 1.0, camera);

  return {
    render({ deltaTime }) {
      const time = (+new Date() - initTime) * 0.001;
      metallicTexture.setFloat('iTime', time);

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
