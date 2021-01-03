import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { Vector3, Matrix, Quaternion } from '@babylonjs/core/Maths/math';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { GlowLayer } from '@babylonjs/core/Layers/glowLayer';
import '@babylonjs/core/Rendering';
import { SSAORenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline';
import { LensRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline';
// import { RenderTargetTexture } from '@babylonjs/core';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';

import bridgeSphere_vertexDefinitions from './shaders/bridgeSphere/vertexDefinitions.glsl';
import bridgeSphere_vertexBeforePositionUpdated from './shaders/bridgeSphere/vertexBeforePositionUpdated.glsl';
import bridgeSphere_fragmentDefinitions from './shaders/bridgeSphere/fragmentDefinitions.glsl';
import bridgeSphere_fragmentCustomDiffuse from './shaders/bridgeSphere/fragmentCustomDiffuse.glsl';

import capSphere_vertexDefinitions from './shaders/capSphere/vertexDefinitions.glsl';
import capSphere_vertexBeforePositionUpdated from './shaders/capSphere/vertexBeforePositionUpdated.glsl';
import capSphere_fragmentDefinitions from './shaders/capSphere/fragmentDefinitions.glsl';
import capSphere_fragmentCustomDiffuse from './shaders/capSphere/fragmentCustomDiffuse.glsl';

// import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
// import { DepthOfFieldEffectBlurLevel } from '@babylonjs/core/PostProcesses/depthOfFieldEffect';

import { RenderTargetTexture } from '@babylonjs/core/Materials/Textures/renderTargetTexture';
import { EffectWrapper, EffectRenderer } from '@babylonjs/core/Materials/effectRenderer';
import { Layer } from '@babylonjs/core/Layers/layer';

const settings = {
  animate: true,
  context: 'webgl',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true);

  //
  // Settings
  //

  const bridgeSphereDiameter = 0.5;
  const bridgeSphereOverlapFactor = 0.75;
  const bridgesDistance = 3;
  const capSphereDiameter = 0.5;
  const rowSize = 24;
  const rowsCount = 32;
  const rowRotationFactor = 0.3;
  const baseSphereRadius = 1.125;
  const baseSphereSubdivisions = 2.0;

  //
  // Main
  //

  const scene = new Scene(engine);
  // scene.clearColor = new Color3(16 / 255, 22 / 255, 26 / 255);
  scene.clearColor = new Color3(245 / 255, 248 / 255, 250 / 255);

  const camera = new ArcRotateCamera('camera', Math.PI / 1.5, Math.PI / 2, 60.0, new Vector3(0, 0, 0), scene);
  camera.lowerBetaLimit = null;
  camera.upperBetaLimit = null;
  camera.lowerAlphaLimit = null;
  camera.upperAlphaLimit = null;
  camera.allowUpsideDown = true;
  camera.attachControl(canvas, true);
  camera.fov = 1.0;
  camera.minZ = 0.1;
  // camera.wheelPrecision = 150.0;
  // camera.useAutoRotationBehavior = true;
  // camera.autoRotationBehavior.idleRotationSpeed = 0.19;

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.intensity = 1;
  baseLight.diffuse = new Color3(1, 1, 1);
  baseLight.specular = new Color3(0.25, 0.25, 0.25);
  baseLight.groundColor = new Color3(0.5, 0.5, 0.5);
  // baseLight.groundColor = new Color3(1, 1, 1);

  const bridgeSphereMaterial = new CustomMaterial('bridgeSphereMaterial', scene);
  bridgeSphereMaterial.diffuseColor = new Color3(138 / 255, 155 / 255, 168 / 255);
  bridgeSphereMaterial.specularColor = new Color3(0.125, 0.125, 0.125);
  bridgeSphereMaterial.freeze();

  const capSphereMaterial = new CustomMaterial('capSphereMaterial', scene);
  capSphereMaterial.diffuseColor = new Color3(72 / 255, 175 / 255, 240 / 255);
  capSphereMaterial.specularColor = new Color3(0.125, 0.125, 0.125);
  capSphereMaterial.freeze();

  //
  // Meshes
  //

  const baseSphere = MeshBuilder.CreateIcoSphere('baseSphere', {
    radius: baseSphereRadius,
    subdivisions: baseSphereSubdivisions,
    updatable: false,
    flat: false,
  });
  baseSphere.visibility = 0.25;
  const baseSpherePositions = baseSphere.geometry.getVerticesData(VertexBuffer.PositionKind);
  const baseSpherePositionsCount = baseSpherePositions.length / 3;
  baseSphere.dispose();

  const bridgeSphere = MeshBuilder.CreateSphere(
    'bridgeSphere',
    { diameter: bridgeSphereDiameter, segments: 6, updatable: false },
    scene,
  );
  bridgeSphere.material = bridgeSphereMaterial;
  bridgeSphere.freezeWorldMatrix();
  bridgeSphere.doNotSyncBoundingInfo = true;

  const capSphere = MeshBuilder.CreateSphere(
    'capSphere',
    { diameter: capSphereDiameter, segments: 6, updatable: false },
    scene,
  );
  capSphere.material = capSphereMaterial;
  capSphere.freezeWorldMatrix();
  capSphere.doNotSyncBoundingInfo = true;

  //
  // Instances
  //

  const totalBridgeSpheres = (rowSize - 1) * rowsCount;

  const bridgeSphereBufferMatrices = new Float32Array(16 * totalBridgeSpheres);
  const bridgeSphereBufferIdxes = new Float32Array(totalBridgeSpheres);
  const bridgeSphereBufferR1Factors = new Float32Array(totalBridgeSpheres);
  const bridgeSphereBufferR2Factors = new Float32Array(totalBridgeSpheres);

  const totalCapSpheres =
    rowsCount *
    2 * // both sides
    2 * // double layer
    baseSpherePositionsCount;

  const capSphereBufferMatrices = new Float32Array(16 * totalCapSpheres);
  const capSphereBufferIdxes = new Float32Array(totalCapSpheres);
  const capSphereBufferR1Factors = new Float32Array(totalCapSpheres);
  const capSphereBufferR2Factors = new Float32Array(totalCapSpheres);
  const capSphereBufferPFactors = new Float32Array(totalCapSpheres);

  const rowRotation = Quaternion.RotationAxis(new Vector3(0, 0, 1), Math.PI / 2);
  const baseRotation = new Quaternion();
  const scaling = new Vector3(1, 1, 1);

  let bridgeSphereIdx = 0;
  let capSphereIdx = 0;
  for (let rowIdx = 0; rowIdx < rowsCount; rowIdx += 1) {
    Quaternion.RotationAxisToRef(new Vector3(0, 1, 0), rowIdx * rowRotationFactor, rowRotation);

    for (let inRowIdx = 1; inRowIdx < rowSize; inRowIdx += 1) {
      const transition = new Vector3();
      transition.y = (rowIdx - rowsCount / 2) * bridgesDistance;
      transition.x = (inRowIdx - rowSize / 2) * bridgeSphereDiameter * bridgeSphereOverlapFactor;
      transition.rotateByQuaternionToRef(rowRotation, transition);

      // const rx = (Math.random() * 0.5 - 0.5) * 0.5;
      // const ry = (Math.random() * 0.5 - 0.5) * 0.5;
      // const rz = (Math.random() * 0.5 - 0.5) * 0.5;

      const resultMatrix = Matrix.Compose(scaling, baseRotation, transition);
      resultMatrix.copyToArray(bridgeSphereBufferMatrices, 16 * bridgeSphereIdx);

      bridgeSphereBufferIdxes[bridgeSphereIdx] = bridgeSphereIdx;
      bridgeSphereBufferR1Factors[bridgeSphereIdx] = Math.random();
      bridgeSphereBufferR2Factors[bridgeSphereIdx] = Math.random();
      bridgeSphereIdx += 1;
    }

    // Caps
    for (let side = -1; side <= 1; side += 2) {
      const baseTransition = new Vector3();
      baseTransition.y = (rowIdx - rowsCount / 2) * bridgesDistance;
      baseTransition.x = ((rowSize / 2) * bridgeSphereDiameter * bridgeSphereOverlapFactor + baseSphereRadius) * side;
      baseTransition.rotateByQuaternionToRef(rowRotation, baseTransition);

      for (let layer = 0; layer <= 1; layer += 1) {
        const f = 1 - layer * 0.35;
        const layerFactor = new Vector3(f, f, f);

        for (let i = 0; i < baseSpherePositionsCount; i += 1) {
          let scaling = new Vector3(1, 1, 1);
          let p = 1;

          const inTransition = new Vector3();
          inTransition.x = baseSpherePositions[i * 3 + 0];
          inTransition.y = baseSpherePositions[i * 3 + 1];
          inTransition.z = baseSpherePositions[i * 3 + 2];

          inTransition.multiplyToRef(layerFactor, inTransition);

          inTransition.x += (Math.random() - 0.5) * 0.751;
          inTransition.y += (Math.random() - 0.5) * 0.751;
          inTransition.z += (Math.random() - 0.5) * 0.751;

          if (capSphereIdx % 20 < 3) {
            const pieceFactorX = (Math.random() - 0.5) * 1.0;
            const pieceFactorY = (Math.random() - 0.5) * 1.0;
            const pieceFactorZ = (Math.random() - 0.5) * 1.0;

            inTransition.x += pieceFactorX;
            inTransition.y += pieceFactorY;
            inTransition.z += pieceFactorZ;

            const scaleFactor = (Math.random() * 0.5 + 0.5) * 0.5;
            scaling = new Vector3(scaleFactor, scaleFactor, scaleFactor);
            p = 20;
          }

          const transition = new Vector3();
          baseTransition.addToRef(inTransition, transition);

          const resultMatrix = Matrix.Compose(scaling, baseRotation, transition);
          resultMatrix.copyToArray(capSphereBufferMatrices, 16 * capSphereIdx);

          capSphereBufferIdxes[capSphereIdx] = capSphereIdx;
          capSphereBufferR1Factors[capSphereIdx] = Math.random();
          capSphereBufferR2Factors[capSphereIdx] = Math.random();
          capSphereBufferPFactors[capSphereIdx] = p;
          capSphereIdx += 1;
        }
      }
    }
  }

  bridgeSphere.thinInstanceSetBuffer('matrix', bridgeSphereBufferMatrices, 16, true);
  bridgeSphere.thinInstanceSetBuffer('idx', bridgeSphereBufferIdxes, 1, true);
  bridgeSphere.thinInstanceSetBuffer('r1Factor', bridgeSphereBufferR1Factors, 1, true);
  bridgeSphere.thinInstanceSetBuffer('r2Factor', bridgeSphereBufferR2Factors, 1, true);

  capSphere.thinInstanceSetBuffer('matrix', capSphereBufferMatrices, 16, true);
  capSphere.thinInstanceSetBuffer('idx', capSphereBufferIdxes, 1, true);
  capSphere.thinInstanceSetBuffer('r1Factor', capSphereBufferR1Factors, 1, true);
  capSphere.thinInstanceSetBuffer('r2Factor', capSphereBufferR2Factors, 1, true);
  capSphere.thinInstanceSetBuffer('pFactor', capSphereBufferPFactors, 1, true);

  //
  // Shaders
  //

  // ==== bridgeSphere ====
  bridgeSphereMaterial.AddAttribute('idx');
  bridgeSphereMaterial.AddAttribute('r1Factor');
  bridgeSphereMaterial.AddAttribute('r2Factor');

  bridgeSphereMaterial.Vertex_Definitions(bridgeSphere_vertexDefinitions);
  bridgeSphereMaterial.Vertex_Before_PositionUpdated(bridgeSphere_vertexBeforePositionUpdated);
  bridgeSphereMaterial.Fragment_Definitions(bridgeSphere_fragmentDefinitions);
  bridgeSphereMaterial.Fragment_Custom_Diffuse(bridgeSphere_fragmentCustomDiffuse);

  // ==== capSphere ====
  capSphereMaterial.AddAttribute('idx');
  capSphereMaterial.AddAttribute('r1Factor');
  capSphereMaterial.AddAttribute('r2Factor');
  capSphereMaterial.AddAttribute('pFactor');

  capSphereMaterial.Vertex_Definitions(capSphere_vertexDefinitions);
  capSphereMaterial.Vertex_Before_PositionUpdated(capSphere_vertexBeforePositionUpdated);
  capSphereMaterial.Fragment_Definitions(capSphere_fragmentDefinitions);
  capSphereMaterial.Fragment_Custom_Diffuse(capSphere_fragmentCustomDiffuse);

  //
  // Attributes
  //

  const initTime = +new Date();

  bridgeSphereMaterial.AddUniform('iTime', 'float');
  bridgeSphereMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    bridgeSphereMaterial.getEffect().setFloat('iTime', time);
  };

  capSphereMaterial.AddUniform('iTime', 'float');
  capSphereMaterial.onBind = () => {
    const time = (+new Date() - initTime) * 0.001;
    capSphereMaterial.getEffect().setFloat('iTime', time);
  };

  //
  // Postprocess
  //

  // var lensEffect = new LensRenderingPipeline('lens', {
  //   edge_blur: 1.0,
  //   chromatic_aberration: 1.0,
  //   distortion: 1.0,
  //   dof_focus_distance: 50,
  //   dof_aperture: 3.0,			// set this very high for tilt-shift effect
  //   grain_amount: 1.0,
  //   dof_pentagon: true,
  //   dof_gain: 1.0,
  //   dof_threshold: 1.0,
  //   dof_darken: 0.25
  // }, scene, 1.0, camera);

  // var pipeline = new DefaultRenderingPipeline(
  //   "defaultPipeline", // The name of the pipeline
  //   true, // Do you want the pipeline to use HDR texture?
  //   scene, // The scene instance
  //   [camera] // The list of cameras to be attached to
  // );
  //
  // // DOF
  // pipeline.samples = 4;
  // pipeline.depthOfFieldEnabled = true;
  // pipeline.depthOfFieldBlurLevel = DepthOfFieldEffectBlurLevel.Low;
  // pipeline.depthOfField.focusDistance = 900; // distance of the current focus point from the camera in millimeters considering 1 scene unit is 1 meter
  // pipeline.depthOfField.focalLength = 25; // focal length of the camera in millimeters
  // pipeline.depthOfField.fStop = 0.08; // aka F number of the camera defined in stops as it would be on a physical device
  //
  // // Chromatic Aberration
  // pipeline.chromaticAberrationEnabled = true;
  // pipeline.chromaticAberration.aberrationAmount = 15; // 30 by default
  //
  // /* sharpen */
  // pipeline.sharpenEnabled = true;
  // pipeline.sharpen.adaptScaleToCurrentViewport = false; // false by default
  // pipeline.sharpen.edgeAmount = 1.10; // 0.3 by default
  // pipeline.sharpen.colorAmount = 1; // 1 by default
  //
  // // Grain
  // pipeline.grainEnabled = true;
  // pipeline.grain.intensity = 12;
  // pipeline.grain.animated = true;

  // let pipeline = new DefaultRenderingPipeline(
  //   "defaultPipeline", // The name of the pipeline
  //   false, // Do you want the pipeline to use HDR texture?
  //   scene, // The game.scene instance
  //   [camera] // The list of cameras to be attached to
  // );
  //
  // pipeline.bloomEnabled = true;
  // pipeline.bloomThreshold = 0.25;
  // pipeline.bloomWeight = 1.0;
  // pipeline.bloomKernel = 32;
  // pipeline.bloomScale = 0.5;
  //
  // pipeline.samples = 4;

  // var gl = new GlowLayer("glow", scene);

  //
  // Background
  //
  var rtt = new RenderTargetTexture('', 200, scene);

  const background = new Layer('back', null, scene);
  background.isBackground = true;
  background.texture = rtt;

  // Create the background effect.
  const renderImage = new EffectWrapper({
    engine,
    fragmentShader: `
            varying vec2 vUV;

            void main(void) {
                gl_FragColor = vec4(1.,1., 0., 1.0);
            }
        `,
  });

  // When the effect has been ready,
  // Create the effect render and change which effects will be renderered
  renderImage.effect.executeWhenCompiled(() => {
    // Render the effect in the RTT.
    const renderer = new EffectRenderer(engine);
    renderer.render(renderImage, rtt);
  });

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

export default { sketch, settings };
