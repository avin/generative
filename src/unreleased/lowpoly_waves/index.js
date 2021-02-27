import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { ImageProcessingConfiguration, PostProcess, ProceduralTexture } from '@babylonjs/core';
import { Effect } from '@babylonjs/core/Materials/effect';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData';
import { getWebGLContext } from '@/utils/webgl';
import noisePixelShader from './shaders/noise/pixelShader.glsl';
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

  function optimizeMesh(mesh) {
    mesh.convertToFlatShadedMesh();
    mesh.isPickable = false;
    mesh.doNotSyncBoundingInfo = false;
    mesh.freezeWorldMatrix();

    return mesh;
  }

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = Color3.FromHexString('#182026');

  scene.imageProcessingConfiguration.toneMappingEnabled = true;
  scene.imageProcessingConfiguration.toneMappingType = ImageProcessingConfiguration.TONEMAPPING_ACES;
  scene.imageProcessingConfiguration.exposure = 2;

  const camera = new ArcRotateCamera('camera', 2.44, 1.06, 20, new Vector3(0, 0, 0), scene);
  // camera.wheelPrecision = 50;
  camera.minZ = 0.125;
  camera.fov = 1.1;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.5, 0.5, 0.5);
  baseLight.intensity = 0.25;

  const dirLight = new DirectionalLight('dirLight', new Vector3(-1, -1, 1), scene);
  dirLight.intensity = 1.25;
  dirLight.position = new Vector3(10, 10, -20);

  const subdivisions = 50;

  const ground = MeshBuilder.CreateGround('sphere', {
    width: subdivisions,
    height: subdivisions,
    subdivisions,
    updatable: true,
  });
  optimizeMesh(ground);

  const mainMaterial = new PBRMaterial('bloodMaterial', scene);

  // mainMaterial.wireframe = true;
  mainMaterial.metallic = 0.05;
  mainMaterial.roughness = 0.5;
  mainMaterial.albedoColor = new Color3.FromHexString('#48AFF0').toLinearSpace();

  ground.material = mainMaterial;

  Effect.ShadersStore.noisePixelShader = noisePixelShader;
  const noiseTexture = new ProceduralTexture('flowNrm', subdivisions, 'noise', scene, null, false, false);

  function decodeUInt32(rgba) {
    return rgba[0] + rgba[1] / 255.0 + rgba[2] / 65025.0 + rgba[3] / 16581375.0;
  }

  function updateBoxesScale(time) {
    noiseTexture.readPixels(0, 0, null, true).then((data) => {
      const result = [];
      for (let x = 0; x <= subdivisions; x += 1) {
        for (let y = 0; y <= subdivisions; y += 1) {
          const sf = decodeUInt32([
            data[x * subdivisions * 4 + y * 4 + 0] / 255,
            data[x * subdivisions * 4 + y * 4 + 1] / 255,
            data[x * subdivisions * 4 + y * 4 + 2] / 255,
            data[x * subdivisions * 4 + y * 4 + 3] / 255,
          ]);
          result[x] = result[x] || [];
          result[x][y] = sf;
        }
      }

      const groundPositions = ground.getVerticesData(VertexBuffer.PositionKind);

      for (let i = 0; i < groundPositions.length / 3; i += 1) {
        const x = groundPositions[i * 3 + 0] + subdivisions / 2;
        const y = groundPositions[i * 3 + 2] + subdivisions / 2;

        groundPositions[i * 3 + 1] = result[x][y] * 3;
      }

      ground.updateVerticesData(VertexBuffer.PositionKind, groundPositions);

      const indices = ground.getIndices();

      const normals = ground.getFacetLocalNormals();
      VertexData.ComputeNormals(groundPositions, indices, normals);

      ground.updateVerticesData(VertexBuffer.NormalKind, normals);
    });
  }

  // ------------------------------

  Effect.ShadersStore.customFragmentShader = postprocessFragment;
  new PostProcess('shade-sides', 'custom', null, null, 1.0, camera);

  // ------------------------------

  return {
    render({ time, width, height }) {
      noiseTexture.setFloat('iTime', time);
      noiseTexture.setFloat('size', subdivisions);

      updateBoxesScale(time * 0.25);

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
