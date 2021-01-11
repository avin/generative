import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { PointerEventTypes, VertexData } from '@babylonjs/core';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';

import groundMaterial_vertexDefinitions from './shaders/groundMaterial/vertexDefinitions.glsl';
import groundMaterial_vertexBeforePositionUpdated from './shaders/groundMaterial/vertexBeforePositionUpdated.glsl';
import groundMaterial_fragmentDefinitions from './shaders/groundMaterial/fragmentDefinitions.glsl';
import groundMaterial_fragmentCustomDiffuse from './shaders/groundMaterial/fragmentCustomDiffuse.glsl';

const distance = (x1, y1, x2, y2) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

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
  scene.clearColor = Color3.FromHexString('#10161A');

  const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 4, 7.0, new Vector3(0, 0, 0), scene);
  camera.wheelPrecision = 50;
  camera.minZ = 0.2;
  // camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  // baseLight.specular = new Color3(0.25, 0.25, 0.25);
  baseLight.specular = new Color3(0.0, 0.0, 0.0);

  // -----------------------------

  const planeSize = 5;
  const subdivisions = 200;

  const pickGround = MeshBuilder.CreateGround('ground', {
    width: planeSize,
    height: planeSize,
    subdivisions,
    updatable: true,
  });
  pickGround.visibility = 0;

  const ground = MeshBuilder.CreateGround('ground', {
    width: planeSize,
    height: planeSize,
    subdivisions,
    updatable: true,
  });
  ground.isPickable = false;
  const groundMaterial = new CustomMaterial('groundMaterial', scene);
  groundMaterial.specularColor = new Color3(0, 0, 0);

  ground.material = groundMaterial;
  // groundMaterial.wireframe = true;

  function riseMesh(force) {
    const pickInfo = scene.pick(scene.pointerX, scene.pointerY, (mesh) => mesh === pickGround);
    if (pickInfo.hit) {
      const px = pickInfo.getTextureCoordinates().x - 0.5;
      const py = pickInfo.getTextureCoordinates().y - 0.5;

      const pickGroundPositions = pickGround.getVerticesData(VertexBuffer.PositionKind);
      const groundPositions = ground.getVerticesData(VertexBuffer.PositionKind);

      for (let i = 0; i < pickGroundPositions.length / 3; i += 1) {
        const x = pickGroundPositions[i * 3 + 0] / planeSize;
        const y = pickGroundPositions[i * 3 + 2] / planeSize;

        const d = distance(x, y, px, py);

        const size = 0.025;

        if (d < size) {
          groundPositions[i * 3 + 1] -= (size - d) * ((1 - Math.abs(groundPositions[i * 3 + 1])) * (force * 100));
        }
      }

      ground.updateVerticesData(VertexBuffer.PositionKind, groundPositions);

      const indices = ground.getIndices();

      const normals = [];
      VertexData.ComputeNormals(groundPositions, indices, normals);

      ground.updateVerticesData(VertexBuffer.NormalKind, normals);
    }
  }

  // --------------------------------------

  groundMaterial.Vertex_Definitions(groundMaterial_vertexDefinitions);
  groundMaterial.Vertex_Before_PositionUpdated(groundMaterial_vertexBeforePositionUpdated);
  groundMaterial.Fragment_Definitions(groundMaterial_fragmentDefinitions);
  groundMaterial.Fragment_Custom_Diffuse(groundMaterial_fragmentCustomDiffuse);

  // --------------------------------------

  let isDrawing = false;
  const handlePointerDown = () => {
    isDrawing = true;
  };

  const handlePointerUp = () => {
    isDrawing = false;
  };

  scene.onPointerObservable.add((pointerInfo) => {
    switch (pointerInfo.type) {
      case PointerEventTypes.POINTERDOWN:
        if (pointerInfo.pickInfo.hit && pointerInfo.pickInfo.pickedMesh === pickGround) {
          handlePointerDown(pointerInfo.pickInfo);
        }
        break;
      case PointerEventTypes.POINTERUP:
        handlePointerUp();
        break;
      default:
    }
  });

  return {
    render({ time, width, height, deltaTime }) {
      if (isDrawing) {
        riseMesh(deltaTime);
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
