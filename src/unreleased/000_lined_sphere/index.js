import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';

const settings = {
  animate: true,
  context: 'webgl',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true);

  //
  // Settings ===============================
  //

  const rowsCount = 100;
  const tubeTessellation = 10;
  const sphereRadius = 20;

  const initTime = +new Date();

  //
  // Helpers ===============================
  //

  function hslToRgb(h, s, l) {
    var r, g, b;

    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      }

      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;

      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return [r, g, b];
  }

  //
  // Main scene ===============================
  //

  const scene = new Scene(engine);
  scene.clearColor = new Color3(16 / 255, 22 / 255, 26 / 255);
  // scene.autoClear = false;

  const camera = new ArcRotateCamera('camera', Math.PI / 1.5, Math.PI / 3, 160.0, new Vector3(0, 0, 0), scene);
  camera.attachControl(canvas, true);

  // camera.lowerBetaLimit = Math.PI / 8;
  // camera.upperBetaLimit = Math.PI - Math.PI / 8;
  // camera.lowerRadiusLimit = 30;
  // camera.upperRadiusLimit = 100;
  // camera.lowerAlphaLimit = null;
  // camera.upperAlphaLimit = null;
  // camera.allowUpsideDown = true;
  //
  // camera.fov = 1.0;
  // camera.minZ = 0.1;
  // camera.useAutoRotationBehavior = true;
  // camera.autoRotationBehavior.idleRotationSpeed = 0.02;

  const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
  baseLight.intensity = 1.0;
  baseLight.diffuse = new Color3(1, 1, 1);
  // baseLight.specular = new Color3(0.25, 1.25, 1.25);
  baseLight.groundColor = new Color3(0.5, 0.5, 0.5);

  const tubeMaterial = new CustomMaterial('tubeMaterial', scene);
  // tubeMaterial.diffuseTexture = new Texture('NONE', scene); // to appear UV attributes
  tubeMaterial.diffuseColor = new Color3(19 / 255, 124 / 255, 189 / 255);
  tubeMaterial.specularColor = new Color3(0.0, 0.0, 0.0);
  tubeMaterial.freeze();

  //
  // Meshes
  //

  const segmentStep = 0.01;

  const tubePathFunction = (rowRadius) => {
    const path = [];
    const maxLength = Math.PI * 2;
    const randomStart = Math.random() * maxLength;
    const randomLength = maxLength / 4 + (Math.random() * maxLength) / 4;
    for (let i = randomStart; i < randomStart + randomLength; i += segmentStep) {
      path.push(new Vector3(Math.cos(i) * rowRadius, 0, Math.sin(i) * rowRadius));
    }
    return path;
  };

  const getRadiusFunction = (total) => (i, distance, d) => {
    if (i === 0) {
      return 0.0;
    }
    if (i === total - 1) {
      return 0.0;
    }

    return 0.5;
  };

  const rowsCountHalf = rowsCount / 2;
  const meshes = [];
  for (let i = -rowsCountHalf; i <= rowsCountHalf; i += 1) {
    const R = rowsCountHalf;

    const rowRadius = Math.sqrt(Math.abs(R * R - i * i));

    if (rowRadius) {
      const path = tubePathFunction(rowRadius);
      const mesh = MeshBuilder.CreateTube('tube', {
        path,
        radiusFunction: getRadiusFunction(path.length),
        tessellation: tubeTessellation,
        updatable: false,
      });

      mesh.position.y = i;
      mesh.material = tubeMaterial;

      const data = new Float32Array(1);
      data[0] = Math.random();

      const buffer = new VertexBuffer(engine, data, 'factor', false, false, 1, true);
      mesh.setVerticesBuffer(buffer);

      meshes.push(mesh);
    }
  }

  //
  // Shaders
  //

  tubeMaterial.AddAttribute('factor');

  tubeMaterial.Vertex_Definitions(`
    attribute float factor;
    varying float vFactor;
  `);
  
  tubeMaterial.Vertex_Before_PositionUpdated(`
    vFactor = factor;
  `);

  tubeMaterial.Fragment_Definitions(`
    varying float vFactor;
    #define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)
  `);

  tubeMaterial.Fragment_Custom_Diffuse(`
    vec3 hueCol = hue(vFactor).rgb;
    diffuseColor = hueCol;
  `);

  //
  // Attributes
  //

  // tubeMaterial.AddUniform('iTime', 'float');
  // tubeMaterial.onBind = () => {
  //   const time = (+new Date() - initTime) * 0.001;
  //   tubeMaterial.getEffect().setFloat('iTime', time);
  // };

  const rotationAxis = new Vector3(0, 1, 0);
  let prevTime = 0;
  return {
    render({ time, width, height }) {
      const timeDiff = time - prevTime;
      if (timeDiff) {
        prevTime = time;

        meshes.forEach((mesh, idx) => {
          const direction = idx % 2 ? 1 : -1;
          mesh.rotate(rotationAxis, timeDiff * direction * 0.1);
        });
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
