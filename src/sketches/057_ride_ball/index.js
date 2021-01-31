import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';
import { DynamicTexture } from '@babylonjs/core';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { colorPalette } from './colorPalette';
import { Brush } from './Brush';

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
  // Settings
  //

  const earthTextureSize = 2048;

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = Color3.FromHexString('#394B59');

  const cAlpha = Math.PI / 4;
  const cBeta = Math.PI / 3;
  const camera = new ArcRotateCamera('camera', cAlpha, cBeta, 15.0, new Vector3(0, 0, 0), scene);
  camera.wheelPrecision = 20;
  camera.minZ = 0.2;
  camera.attachControl(canvas, true);

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.groundColor = new Color3(0.5, 0.5, 0.5);
  baseLight.groundColor = new Color3(1, 1, 1);
  baseLight.specular = new Color3(0.125, 0.125, 0.125);

  // ----------------------------------

  const [earthMesh, earthMeshPicking] = (() => {
    const result = [];
    for (let i = 0; i < 2; i += 1) {
      const earthMesh = MeshBuilder.CreateIcoSphere(
        'sphere',
        {
          radius: 5,
          subdivisions: 12,
          flat: false,
        },
        scene,
      );
      earthMesh.alwaysSelectAsActiveMesh = true;
      earthMesh.convertToUnIndexedMesh();

      result.push(earthMesh);
    }

    return result;
  })();
  earthMeshPicking.setEnabled(false);

  const earthMaterial = new StandardMaterial('earthMaterial', scene);
  // earthMaterial.emissiveColor = new Color3(0.35, 0.4, 0.4);
  // earthMaterial.specularPower = 1000.0;
  earthMaterial.specularColor = new Color3(0.25, 0.25, 0.25);
  earthMesh.material = earthMaterial;

  const earthTexture = new DynamicTexture(
    'paint-texture',
    { width: earthTextureSize, height: earthTextureSize },
    scene,
  );
  earthMaterial.diffuseTexture = earthTexture;

  // Заливаем текстуру почти белым цветом
  const earthTextureContext = earthTexture.getContext();
  earthTextureContext.fillStyle = '#F5F8FA';
  earthTextureContext.fillRect(0, 0, earthTextureSize, earthTextureSize);

  earthTexture.update(false);

  /**
   * Нарисовать точку в месте прикосновения кисти
   * @param pickInfo
   * @param color
   */
  function drawPoint(pickInfo, color) {
    const x = pickInfo.getTextureCoordinates().x * earthTextureSize;
    const y = pickInfo.getTextureCoordinates().y * earthTextureSize;

    if (!color.colorString) {
      color.colorString = `rgb(${~~(color.r * 255)},${~~(color.g * 255)},${~~(color.b * 255)})`;
    }

    // Радиус (подгоняется под размер кисти)
    const radius = earthTextureSize / 300;

    const earthTextureContext = earthTexture.getContext();
    earthTextureContext.fillStyle = color.colorString;
    earthTextureContext.beginPath();
    earthTextureContext.arc(x, y, radius, 0, 2 * Math.PI);
    earthTextureContext.fill();
  }

  // -------------------------------

  const brushes = [];

  // Заготовка для кисти
  const brushMesh = MeshBuilder.CreateSphere('brush', { diameter: 0.25 }, scene);
  brushMesh.setEnabled(false);
  const brushMeshMaterial = new StandardMaterial('brushMeshMaterial', scene);
  brushMesh.material = brushMeshMaterial;

  const colors = [
    ...colorPalette,
    ...colorPalette,
    ...colorPalette,
    // ...colorPalette,
    // ...colorPalette,
    // ...colorPalette,
    // ...colorPalette,
    // ...colorPalette,
    // ...colorPalette,
    // ...colorPalette,
    // ...colorPalette,
    // ...colorPalette,
    // ...colorPalette,
    // ...colorPalette,
  ];

  const colorData = new Float32Array(4 * colors.length);

  colors.forEach((colorHex, idx) => {
    const id = `brush-${idx}`;
    const instance = brushMesh.createInstance(id);
    instance.alwaysSelectAsActiveMesh = true;

    const color = Color3.FromHexString(colorHex);
    colorData[idx * 4] = color.r;
    colorData[idx * 4 + 1] = color.g;
    colorData[idx * 4 + 2] = color.b;
    colorData[idx * 4 + 3] = 1.0;

    const brush = new Brush({
      id,
      idx,
      instance,
      scene,
      color,
      drawPoint,
      earthMeshPicking,
      angle: Math.random() * Math.PI * 2,
    });

    brushes.push(brush);
  });

  const colorBuffer = new VertexBuffer(engine, colorData, VertexBuffer.ColorKind, false, false, 4, true);
  brushMesh.setVerticesBuffer(colorBuffer);
  brushMesh.isPickable = false;

  // SSAO -------------------------------

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    const ssao = new SSAO2RenderingPipeline('ssao', scene, {
      ssaoRatio: 1.0, // Ratio of the SSAO post-process, in a lower resolution
      blurRatio: 1.0, // Ratio of the combine post-process (combines the SSAO and the scene)
    });
    ssao.radius = 0.5;
    ssao.totalStrength = 1.3;
    ssao.expensiveBlur = false;
    ssao.samples = 16;
    ssao.maxZ = 100;

    scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline('ssao', camera);
  }

  // Оптимизация --------------------------

  // Делаем дерево для ускорения просчета рейкаста
  earthMeshPicking.subdivide(80);
  earthMeshPicking.createOrUpdateSubmeshesOctree(64, 2);
  earthMeshPicking.useOctreeForPicking = true;

  earthMeshPicking.freezeWorldMatrix();
  earthMeshPicking.doNotSyncBoundingInfo = true;

  // scene.freezeActiveMeshes(true);

  // -----------------------------

  const defaultPipeline = new DefaultRenderingPipeline('default', true, scene, [camera]);
  defaultPipeline.fxaaEnabled = true;
  defaultPipeline.samples = 8;

  defaultPipeline.bloomEnabled = true;
  defaultPipeline.bloomThreshold = 0.17;
  defaultPipeline.bloomWeight = 0.2;
  defaultPipeline.bloomKernel = 50;
  defaultPipeline.bloomScale = 0.9;

  defaultPipeline.imageProcessing.vignetteEnabled = true;
  defaultPipeline.imageProcessing.vignetteColor = new Color3(24 / 255, 32 / 255, 38 / 255);
  defaultPipeline.imageProcessing.vignetteCameraFov = 0.13;
  defaultPipeline.imageProcessing.vignetteWeight = 100.0;

  return {
    render(props) {
      const { time, deltaTime } = props;

      scene.time = time;
      scene.deltaTime = deltaTime;

      for (let i = 0; i < brushes.length; i += 1) {
        brushes[i].update();
      }

      earthTextureContext.fillStyle = `hsla(0, 0%, 98%, ${deltaTime * 5})`;
      earthTextureContext.fillRect(0, 0, earthTextureSize, earthTextureSize);

      // Грузим обновления по текстурке в видяху
      earthTexture.update(false);

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
