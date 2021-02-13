import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Rendering/prePassRendererSceneComponent';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { VertexData } from '@babylonjs/core';
import { PBRCustomMaterial } from '@babylonjs/materials/custom/pbrCustomMaterial';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';

import blob_vertexDefinitions from '@/sketches/061_night_rain/shaders/blob/vertexDefinitions.glsl';
import blob_vertexBeforePositionUpdated from '@/sketches/061_night_rain/shaders/blob/vertexBeforePositionUpdated.glsl';
import blob_vertexAfterWorldPosComputed from '@/sketches/061_night_rain/shaders/blob/vertexAfterWorldPosComputed.glsl';
import blob_fragmentDefinitions from '@/sketches/061_night_rain/shaders/blob/fragmentDefinitions.glsl';
import blob_fragmentCustomDiffuse from '@/sketches/061_night_rain/shaders/blob/fragmentCustomDiffuse.glsl';
import tube_vertexDefinitions from './shaders/tube/vertexDefinitions.glsl';
import tube_vertexBeforePositionUpdated from './shaders/tube/vertexBeforePositionUpdated.glsl';
import tube_vertexAfterWorldPosComputed from './shaders/tube/vertexAfterWorldPosComputed.glsl';
import tube_fragmentDefinitions from './shaders/tube/fragmentDefinitions.glsl';
import tube_fragmentCustomDiffuse from './shaders/tube/fragmentCustomDiffuse.glsl';

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

  const cAlpha = -Math.PI / 2;
  const cBeta = Math.PI / 2;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 30, new Vector3(0, 0.0, 0), scene);
  camera.minZ = 0.1;
  camera.fov = 1.2;

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-0.25, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.75, 0.75, 0.75);
  baseLight.specular = new Color3(0.25, 0.25, 0.25);

  // ----------------------------

  const baseMesh = MeshBuilder.CreateIcoSphere('m', { radius: 3.0, subdivisions: 3 }, scene);
  baseMesh.updateFacetData();
  const facetPositions = baseMesh.getFacetLocalPositions();
  const facetNormals = baseMesh.getFacetLocalNormals();
  baseMesh.dispose();

  const segments = 10;
  const tubeLength = 10;
  const tubes = [];
  const baseTube = MeshBuilder.CreateTube(
    'tube',
    {
      path: (() => {
        const path = [];
        for (let j = 0; j < segments; j += 1) {
          const iS = j / segments;
          const iSL = iS * tubeLength;
          path.push(new Vector3(0, 1 * iSL, 0));
        }
        return path;
      })(),
      radiusFunction: (i) => {
        const iS = (i + 1) / segments;
        return (1 - iS) * 1.0;
      },
      tessellation: 12,
    },
    scene,
  );

  for (let i = 0; i < facetPositions.length; i += 1) {
    const tube = baseTube.clone();
    tube.position = facetPositions[i];

    const q = new Quaternion();
    Quaternion.FromUnitVectorsToRef(Vector3.Up(), facetNormals[i], q);

    tube.rotationQuaternion = q;

    tubes.push(tube);
  }

  baseTube.dispose();
  const mesh = Mesh.MergeMeshes(tubes, true, true);
  // const mesh = baseMesh;

  const mat = new CustomMaterial('plastic', scene);
  mat.diffuseColor = new Color3.FromHexString('#48AFF0');
  mesh.material = mat;

  mat.Vertex_Definitions(tube_vertexDefinitions);
  mat.Vertex_Before_PositionUpdated(tube_vertexBeforePositionUpdated);
  mat.Vertex_After_WorldPosComputed(tube_vertexAfterWorldPosComputed);
  mat.Fragment_Definitions(tube_fragmentDefinitions);
  mat.Fragment_Custom_Diffuse(tube_fragmentCustomDiffuse);

  // ----------------------------

  const rotationMatrices = Array(segments)
    .fill(0)
    .map(() => {
      return Matrix.Identity();
    });

  const rMatrix = Matrix.Identity();

  function rotationBehaviour(speed = 0.005) {
    let isDragging = false;

    let prevX;
    let prevY;

    function rotateAroundWorldAxis(axis, radians) {
      const rotationMatrix = Matrix.RotationAxis(axis.normalize(), radians);
      rMatrix.multiplyToRef(rotationMatrix, rMatrix);
      // object.rotationQuaternion = Quaternion.FromRotationMatrix(object.rMatrix);

      // for (let i = rotationMatrices.length - 1; i > 0; i -= 1) {
      //   rotationMatrices[i] = rotationMatrices[i - 1];
      // }

      rotationMatrices[0] = rMatrix;
    }

    const handlePointerDown = (e) => {
      isDragging = true;

      prevX = e.clientX;
      prevY = e.clientY;
    };

    const handlePointerMove = (e) => {
      if (isDragging) {
        const dX = (prevX - e.clientX) * speed;
        const dY = (prevY - e.clientY) * speed;

        prevX = e.clientX;
        prevY = e.clientY;

        rotateAroundWorldAxis(new Vector3(0, 1, 0), dX);
        rotateAroundWorldAxis(new Vector3(1, 0, 0), dY);
      }
    };

    const handlePointerLeave = (e) => {
      isDragging = false;
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerLeave);
    canvas.addEventListener('pointerleave', handlePointerLeave);

    return {
      dispose: () => {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointermove', handlePointerMove);
        canvas.removeEventListener('pointerup', handlePointerLeave);
        canvas.removeEventListener('pointerleave', handlePointerLeave);
      },
    };
  }

  rotationBehaviour(0.0025);

  // ----------------------------

  mat.AddUniform('rotMatrixI', 'mat4');

  mat.AddUniform('rotMatrix0', 'mat4');
  mat.AddUniform('rotMatrix1', 'mat4');
  mat.AddUniform('rotMatrix2', 'mat4');
  mat.AddUniform('rotMatrix3', 'mat4');
  mat.AddUniform('rotMatrix4', 'mat4');
  mat.AddUniform('rotMatrix5', 'mat4');
  mat.AddUniform('rotMatrix6', 'mat4');
  mat.AddUniform('rotMatrix7', 'mat4');
  mat.AddUniform('rotMatrix8', 'mat4');
  mat.AddUniform('rotMatrix9', 'mat4');

  mat.onBind = () => {
    mat.getEffect().setMatrix('rotMatrixI', Matrix.Identity());

    mat.getEffect().setMatrix('rotMatrix0', rotationMatrices[0]);
    mat.getEffect().setMatrix('rotMatrix1', rotationMatrices[1]);
    mat.getEffect().setMatrix('rotMatrix2', rotationMatrices[2]);
    mat.getEffect().setMatrix('rotMatrix3', rotationMatrices[3]);
    mat.getEffect().setMatrix('rotMatrix4', rotationMatrices[4]);
    mat.getEffect().setMatrix('rotMatrix5', rotationMatrices[5]);
    mat.getEffect().setMatrix('rotMatrix6', rotationMatrices[6]);
    mat.getEffect().setMatrix('rotMatrix7', rotationMatrices[7]);
    mat.getEffect().setMatrix('rotMatrix8', rotationMatrices[8]);
    mat.getEffect().setMatrix('rotMatrix9', rotationMatrices[9]);
  };

  // setInterval(() => {
  //   for (let i = 1; i < rotationMatrices.length; i += 1) {
  //     setTimeout(() => {
  //       rotationMatrices[i] = rotationMatrices[i-1].clone()
  //     }, i*20)
  //   }
  // }, 10*20)

  // ----------------------------

  setInterval(() => {
    for (let i = rotationMatrices.length; i > 0; i -= 1) {
      rotationMatrices[i] = rotationMatrices[i - 1].clone();
    }
  }, 20);

  let frame = 0;
  return {
    render({ time, width, height, deltaTime }) {
      // updateVerticesRotation();

      frame += 1;

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
