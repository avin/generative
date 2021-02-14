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
import { getWebGLContext } from '@/utils/webgl';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import tube_vertexDefinitions from './shaders/tube/vertexDefinitions.glsl';
import tube_vertexBeforePositionUpdated from './shaders/tube/vertexBeforePositionUpdated.glsl';
import tube_vertexAfterWorldPosComputed from './shaders/tube/vertexAfterWorldPosComputed.glsl';
import tube_fragmentDefinitions from './shaders/tube/fragmentDefinitions.glsl';
import tube_fragmentCustomDiffuse from './shaders/tube/fragmentCustomDiffuse.glsl';

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
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = Color3.FromHexString('#10161A');

  const cAlpha = -Math.PI / 2;
  const cBeta = Math.PI / 2;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 20, new Vector3(0, 0.0, 0), scene);
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
        return Math.sqrt(1 - iS) ** 1.25;
      },
      tessellation: 12,
    },
    scene,
  );

  for (let i = 0; i < facetPositions.length; i += 1) {
    const tube = baseTube.clone();
    // tube.position = facetPositions[i];

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

  let rotmatrixBlock = '';
  for (let i = 0; i < segments; i += 1) {
    rotmatrixBlock += `if(l == ${i}) rotMatrix = rotMatrix${i};\n`;
  }
  const vertexBeforePositionUpdated = tube_vertexBeforePositionUpdated.replace(
    '// -- rotmatrix-here --',
    rotmatrixBlock,
  );

  mat.Vertex_Definitions(tube_vertexDefinitions);
  mat.Vertex_Before_PositionUpdated(vertexBeforePositionUpdated);
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

  // const rotArr = [];
  //
  // for (let i = 0; i < rotationMatrices.length; i += 1) {
  //   const m = Matrix.Identity()._m;
  //
  //   for (let j = 0; j < m.length; j += 1) {
  //     rotArr.push(m[j]);
  //   }
  // }

  function rotationBehaviour(speed = 0.005) {
    let isDragging = false;

    let prevX;
    let prevY;

    function rotateAroundWorldAxis(axis, radians) {
      const rotationMatrix = Matrix.RotationAxis(axis.normalize(), radians);
      rMatrix.multiplyToRef(rotationMatrix, rMatrix);

      rotationMatrices[0] = rMatrix;

      // const m = rMatrix._m;
      //
      // for (let i = 0; i < m.length; i += 1) {
      //   rotArr[i] = m[i];
      // }
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

  const rb = rotationBehaviour(0.003);

  // ----------------------------

  mat.AddUniform('tubeLength', 'float');
  mat.AddUniform('segments', 'float');

  for (let i = 0; i < segments; i += 1) {
    mat.AddUniform(`rotMatrix${i}`, 'mat4');
  }

  // mat._customUniform.push(`uniform  vec4 rotMatrixArr[${rotationMatrices.length * 4}];`);
  // mat._newUniforms.push('rotMatrixArr');

  mat.onBind = () => {
    mat.getEffect().setFloat('tubeLength', tubeLength);
    mat.getEffect().setFloat('segments', segments);

    for (let i = 0; i < segments; i += 1) {
      mat.AddUniform(`rotMatrix${i}`, 'float');
      mat.getEffect().setMatrix(`rotMatrix${i}`, rotationMatrices[i]);
    }

    // mat.getEffect().setArray4('rotMatrixArr', rotArr);
  };

  // ----------------------------

  const iID = setInterval(() => {
    for (let i = rotationMatrices.length; i > 0; i -= 1) {
      rotationMatrices[i] = rotationMatrices[i - 1].clone();

      // const m = rotationMatrices[i - 1]._m;
      // for (let j = 0; j < 4; j += 1) {
      //   for (let k = 0; k < 4; k += 1) {
      //     rotArr[i * 4 * 4 + j * 4 + k] = m[j * 4 + k];
      //   }
      // }
    }
  }, 20);

  return {
    render({ time, width, height, deltaTime }) {
      scene.render();
    },
    resize({ pixelRatio, width, height }) {
      engine.resize();
    },
    unload() {
      clearInterval(iID);
      rb.dispose();
      engine.dispose();
    },
  };
};

export default { sketch, settings };
