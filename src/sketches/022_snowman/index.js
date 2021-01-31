import SoundCloudAudio from 'soundcloud-audio';

import floorFragmentShader from './shaders/floor/frag.glsl';
import glassFragmentShader from './shaders/glass/frag.glsl';
import generalVertexShader from './shaders/general/vert.glsl';
import snowFragmentShader from './shaders/snow/frag.glsl';
import snowVertexShader from './shaders/snow/vert.glsl';

const THREE = require('three');
const random = require('canvas-sketch-util').random;

global.THREE = THREE;

require('three/examples/js/controls/OrbitControls');

const randomInstance = random.createRandom();
randomInstance.setSeed('415761');

const settings = {
  animate: true,
  context: 'webgl',
};

function createSnowManMaterial() {
  const material = new THREE.MeshLambertMaterial({
    color: 0xd0e3f0,
  });

  material.emissive.setHex(0xffffff);
  material.emissiveIntensity = 0.2;

  return material;
}

function createFloorMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      iTime: { value: 0.0 },
      iResolution: new THREE.Uniform(new THREE.Vector2(2000, 2000)),
    },

    fragmentShader: floorFragmentShader,
    vertexShader: generalVertexShader,
  });
}

function createGlassMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      iTime: { value: 0.0 },
      iResolution: new THREE.Uniform(new THREE.Vector2(100, 100)),
    },

    fragmentShader: glassFragmentShader,
    vertexShader: generalVertexShader,
    side: THREE.DoubleSide,
  });
}

function createSnowMaterial() {
  const shaderPoint = THREE.ShaderLib.points;
  const uniforms = {
    ...shaderPoint.uniforms,
    iTime: { value: 0 },
    pSize: { value: 10 },
    camPosition: new THREE.Uniform(new THREE.Vector3()),
  };

  return new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,

    // blending: THREE.AdditiveBlending,
    blending: THREE.AdditiveBlending,

    fragmentShader: snowFragmentShader,
    vertexShader: snowVertexShader,
  });
}

function createBlackMaterial() {
  return new THREE.MeshLambertMaterial({
    color: 0x30404d,
  });
}

function createHatMaterial() {
  return new THREE.MeshPhongMaterial({
    color: 0xf5498b,
  });
}

function createMouthMaterial() {
  return new THREE.MeshLambertMaterial({
    color: 0xff6655,
  });
}

function createOrangeMaterial() {
  return new THREE.MeshLambertMaterial({
    color: 0xff6e4a,
  });
}

function createWoodMaterial() {
  return new THREE.MeshLambertMaterial({
    color: 0xcc6e4a,
  });
}

const shadowMaterial = new THREE.ShadowMaterial();
shadowMaterial.opacity = 0.9182;

const scPlayer = new SoundCloudAudio('b95f61a90da961736c03f659c03cb0cc');

const sketch = ({ context, canvas }) => {
  let ready = false;

  const el = document.createElement('div');
  el.innerHTML = 'Click to let it snow!';
  el.style.cssText = 'position: absolute; font-size: 100px; font-weight: bold; cursor:pointer; font-family: cursive;';
  canvas.parentNode.appendChild(el);

  canvas.parentNode.addEventListener('mousedown', () => {
    if (ready) {
      return;
    }

    canvas.parentNode.removeChild(el);
    ready = true;

    scPlayer.resolve('https://soundcloud.com/trap-seacrest/let-it-snow-trap-remix', (data) => {
      scPlayer.play();

      const audio = scPlayer.audio;
      audio.crossOrigin = 'Anonymous';
      audio.autoplay = true;
      audio.play();
    });
  });

  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas,
  });

  renderer.setClearColor('hsl(200, 90%, 10%)', 1);
  // renderer.setClearColor('#182026', 1);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

  const camera = new THREE.PerspectiveCamera(25, 2, 0.01, 100);
  camera.position.set(10, 5, 5);

  const controls = new THREE.OrbitControls(camera, context.canvas);
  controls.minDistance = 3;
  controls.maxDistance = 40;
  controls.target.set(0, 2, 0);

  const scene = new THREE.Scene();

  // ---------------------------------------------
  // Свет
  // ---------------------------------------------

  const whiteColor = 0xffffff;
  const lightMain = new THREE.HemisphereLight(whiteColor, 0xffffff, 0.42);
  scene.add(lightMain);

  const lightDir1 = new THREE.SpotLight(whiteColor, 0.98251, 30, Math.PI / 4, 2, 2);
  lightDir1.position.set(5, 7, 5);
  lightDir1.castShadow = true;
  scene.add(lightDir1);

  [lightDir1].forEach((light) => {
    // Set up shadow properties for the light
    light.shadow.mapSize.width = 1024; // default
    light.shadow.mapSize.height = 1024; // default
    light.shadow.camera.near = 0.15; // default
    light.shadow.camera.far = 500; // default
    light.shadow.bias = 0.0001; // default

    const side = 15;
    light.shadow.camera.top = side;
    light.shadow.camera.bottom = -side;
    light.shadow.camera.left = side;
    light.shadow.camera.right = -side;
  });

  const floorMaterial = createFloorMaterial();
  const glassMaterial = createGlassMaterial();
  const snowMaterial = createSnowMaterial();
  const blackMaterial = createBlackMaterial();
  const orangeMaterial = createOrangeMaterial();

  // ---------------------------------------------
  // Земля
  // ---------------------------------------------
  {
    const geometry = new THREE.PlaneGeometry(200, 200, 100, 100);
    const plane = new THREE.Mesh(geometry, floorMaterial);
    plane.rotation.x = -Math.PI * 0.5;
    scene.add(plane);

    const shadowPlane = new THREE.Mesh(geometry, new THREE.ShadowMaterial({ opacity: 0.5 }));
    shadowPlane.rotation.x = -Math.PI * 0.5;
    shadowPlane.rotation.y = 0.01;

    shadowPlane.receiveShadow = true;
    shadowPlane.castShadow = true;

    scene.add(shadowPlane);
  }

  // ---------------------------------------------
  // Снеговик
  // ---------------------------------------------

  const snowBalls = [];
  {
    const material = createSnowManMaterial();
    for (let i = 0; i < 3; i += 1) {
      const radius = 1 - i * 0.22;
      const geometry = new THREE.DodecahedronGeometry(radius, 3);
      geometry.vertices.forEach((v) => {
        v.x += randomInstance.range(-0.01, 0.01);
        v.y += randomInstance.range(-0.01, 0.01);
        v.z += randomInstance.range(-0.01, 0.01);
      });
      const mesh = new THREE.Mesh(geometry, material);

      mesh.castShadow = true;
      mesh.receiveShadow = true;

      mesh.radius = radius;
      mesh.position.y += 0.75 + i * 1.1;

      scene.add(mesh);

      snowBalls.push(mesh);
    }
  }

  // ---------------------------------------------
  // Пуговицы + глаза
  // ---------------------------------------------

  {
    // Пуговицы
    for (let i = 0; i < 3; i += 1) {
      const radius = 0.075;
      const geometry = new THREE.DodecahedronGeometry(radius, 1);
      geometry.vertices.forEach((v) => {
        const rStep = radius * 0.05;
        v.x += randomInstance.range(-rStep, rStep);
        v.y += randomInstance.range(-rStep, rStep);
        v.z += randomInstance.range(-rStep, rStep);
      });
      const mesh = new THREE.Mesh(geometry, blackMaterial);

      mesh.castShadow = true;

      const ballRadius = snowBalls[1].radius * 1.025;

      mesh.position.x = ballRadius * Math.cos(Math.PI / 4 - i * (Math.PI / 7) - 0.1);
      mesh.position.y = ballRadius * Math.sin(Math.PI / 4 - i * (Math.PI / 7) - 0.1) + snowBalls[1].position.y;
      // mesh.position.y = snowBalls[1].position.y + spaceBetween * (i - 1 + .85);
      scene.add(mesh);
    }

    // глаза
    const ballRadius = snowBalls[2].radius * 0.825;

    for (let i = -1; i <= 1; i += 2) {
      const radius = 0.075;
      const geometry = new THREE.DodecahedronGeometry(radius, 1);
      geometry.vertices.forEach((v) => {
        const rStep = radius * 0.05;
        v.x += randomInstance.range(-rStep, rStep);
        v.y += randomInstance.range(-rStep, rStep);
        v.z += randomInstance.range(-rStep, rStep);
      });

      const mesh = new THREE.Mesh(geometry, floorMaterial);

      mesh.castShadow = true;

      mesh.position.x = ballRadius * Math.cos(Math.PI / 4 - 0.25);
      mesh.position.y = ballRadius * Math.sin(Math.PI / 4 - 0.25) + snowBalls[2].position.y;

      mesh.position.x = ballRadius * Math.cos(i * 0.325);
      mesh.position.z = ballRadius * Math.sin(i * 0.325);

      scene.add(mesh);

      // Линзы
      const glassGeometry = new THREE.CircleGeometry(radius * 1.5, 20);
      const glassMesh = new THREE.Mesh(glassGeometry, glassMaterial);
      glassMesh.rotateY(Math.PI / 2);
      glassMesh.castShadow = true;

      glassMesh.position.copy(mesh.position);
      glassMesh.position.x += 0.09;
      glassMesh.rotateX(-Math.PI / 10);

      scene.add(glassMesh);
    }

    // переносица
    const perGeometry = new THREE.CylinderGeometry(0.01, 0.01, 0.1, 16, 10);

    const perMesh = new THREE.Mesh(perGeometry, blackMaterial);
    perMesh.castShadow = true;

    perMesh.position.x = ballRadius * Math.cos(Math.PI / 4 - 0.25) + 0.125;
    perMesh.position.y = ballRadius * Math.sin(Math.PI / 4 - 0.25) + snowBalls[2].position.y;
    perMesh.rotateX(Math.PI / 2);

    scene.add(perMesh);
  }

  // ---------------------------------------------
  // Морковка
  // ---------------------------------------------

  {
    const width = 0.51;
    const geometry = new THREE.CylinderGeometry(0, width * 0.125, width, 16, 10);
    geometry.vertices.forEach((v) => {
      const rStep = width * 0.015;
      v.x += randomInstance.range(-rStep, rStep);
      v.y += randomInstance.range(-rStep, rStep);
      v.z += randomInstance.range(-rStep, rStep);
    });
    const mesh = new THREE.Mesh(geometry, orangeMaterial);
    mesh.castShadow = true;

    mesh.position.y = snowBalls[2].position.y;
    mesh.position.x = snowBalls[2].radius * 0.95 + width / 2;
    mesh.rotateZ(-Math.PI / 2);

    scene.add(mesh);
  }

  // -------------------------
  // Рот
  // -------------------------

  {
    const material = createMouthMaterial();
    const smileWidth = 0.51;
    const geometry = new THREE.CylinderGeometry(smileWidth * 0.035, smileWidth * 0.035, smileWidth, 16, 10);
    geometry.vertices.forEach((v) => {
      v.x -= v.y * v.y * 1.5;
      v.z += v.y * v.y * 0.25 - v.x * v.x * 5.25;
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;

    mesh.position.y = snowBalls[2].position.y - snowBalls[2].radius * 0.35;
    mesh.position.x = snowBalls[2].radius * 0.95;
    mesh.rotateZ(-Math.PI / 2);
    mesh.rotateX(-Math.PI / 2);

    scene.add(mesh);

    for (let i = -1; i <= 1; i += 2) {
      const width = 0.125;
      const geometry = new THREE.CylinderGeometry(width * 0.1275, width * 0.1275, width, 16, 10);

      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;

      mesh.position.y = snowBalls[2].position.y - snowBalls[2].radius * 0.35 + smileWidth * 0.175;
      mesh.position.x = snowBalls[2].radius * 0.95 - smileWidth * 0.075;
      mesh.position.z = (smileWidth / 2) * i;
      mesh.rotateZ(-Math.PI / 12);
      mesh.rotateX((-Math.PI / 10) * i);

      scene.add(mesh);
    }
  }

  // ---------------------------------------------
  // Шляпа
  // ---------------------------------------------

  {
    const material = createHatMaterial();
    const width = snowBalls[2].radius;
    const geometry = new THREE.CylinderGeometry(width * 0.55, width * 0.5, width, 16, 10);
    geometry.vertices.forEach((v) => {
      const rStep = width * 0.025;
      if (v.y > -width / 2) {
        v.x += randomInstance.range(-rStep, rStep);
        v.y += randomInstance.range(-rStep, rStep);
        v.z += randomInstance.range(-rStep, rStep);
      } else {
        v.x *= 2;
        v.z *= 2;
        v.y += randomInstance.range(-rStep * 2, rStep * 2);
      }
    });
    geometry.center();
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;

    mesh.position.y = snowBalls[2].position.y + width / 2 + snowBalls[2].radius * 0.8;
    // mesh.position.x = snowBalls[2].radius * 0.95 + width / 2;
    // mesh.rotatex(-Math.PI / 2);
    mesh.rotateX(-Math.PI / 11);
    mesh.rotateZ(Math.PI / 15);
    mesh.position.z -= 0.15;
    mesh.position.x -= 0.1;

    scene.add(mesh);
  }

  // ---------------------------------------------
  // Палки
  // ---------------------------------------------

  const hands = [];
  {
    const material = createWoodMaterial();
    const width = 0.8;
    for (let i = -1; i <= 1; i += 2) {
      const geometry = new THREE.CylinderGeometry(0.02, 0.075, width, 16, 10);
      geometry.vertices.forEach((v) => {
        const rs = 0.1 * v.y;

        v.y += width / 2 + randomInstance.range(-rs, rs);

        v.x += Math.sin(v.y * 10) * 0.02 + randomInstance.range(-rs, rs);
        v.z += Math.cos(v.y * 10) * 0.02 + randomInstance.range(-rs, rs);
      });
      // geometry.center();
      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;

      mesh.position.y = snowBalls[1].position.y * 1.2;
      mesh.position.z = snowBalls[1].radius * 0.8 * i;

      mesh.rotateX(-Math.PI / 4 + (Math.PI / 3) * i);
      mesh.rotateX(Math.PI / 4);

      mesh.originalRotationX = mesh.rotation.x;

      mesh.idx = i;
      hands.push(mesh);

      scene.add(mesh);
    }
  }

  // -------------------------
  // Снежок
  // -------------------------

  const particles = new THREE.Geometry(40, 40, 50, 50);
  particles.vertices = particles.vertices.map((v) => {
    v.x += (randomInstance.value() - 0.5) * 0.05;
    v.y += (randomInstance.value() - 0.5) * 4 + 6;
    v.z += (randomInstance.value() - 0.5) * 0.05;
    return v;
  });

  for (let i = 0; i < 50000; i += 1) {
    particles.vertices.push(
      new THREE.Vector3(
        (randomInstance.value() - 0.5) * 40,
        (randomInstance.value() - 0.5) * 4 + 6,
        (randomInstance.value() - 0.5) * 40,
      ),
    );
  }

  const particleSystem = new THREE.Points(particles, snowMaterial);
  particleSystem.position.y += 4;
  particleSystem.sortParticles = true;

  scene.add(particleSystem);

  return {
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight, false);
      camera.aspect = viewportWidth / viewportHeight;
      camera.updateProjectionMatrix();
    },

    render({ time }) {
      if (!ready) {
        return;
      }

      hands.forEach((mesh) => {
        mesh.rotation.x = mesh.originalRotationX + Math.sin(time * 7) * 0.3;
      });

      floorMaterial.uniforms.iTime.value = time;
      glassMaterial.uniforms.iTime.value = time;

      snowMaterial.uniforms.iTime.value = time * 0.2;
      snowMaterial.uniforms.camPosition = new THREE.Uniform(camera.position);

      camera.position.y = Math.max(camera.position.y, 0.1);

      controls.update();
      renderer.render(scene, camera);
    },

    unload() {
      controls.dispose();
      renderer.dispose();

      scPlayer.stop();
    },
  };
};

export default { sketch, settings };
