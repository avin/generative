import vertexShader from './shaders/vert.glsl';
import fragmentShader from './shaders/frag.glsl';

const THREE = require('three');
const random = require('canvas-sketch-util').random;

global.THREE = THREE;

require('three/examples/js/controls/OrbitControls');

const font = require('./font.json');

const randomInstance = random.createRandom();
randomInstance.setSeed('996048');

const settings = {
  animate: true,
  context: 'webgl',
  dimensions: [2048, 2048],
};

function createGreenMaterial() {
  const material = new THREE.MeshLambertMaterial({
    side: THREE.DoubleSide,
  });

  // material.wireframe = true;

  const hue = 0.4;
  const saturation = 1;
  const luminance = 0.5;
  material.color.setHSL(hue, saturation, luminance);

  return material;
}

function createGroundSnowMaterial() {
  const material = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
  });

  material.emissive.setHex(0xeeeeee);
  material.emissiveIntensity = 0.125;

  material.color.setHex(0xffffff);

  return material;
}

function createTreeSnowMaterial() {
  const material = new THREE.MeshPhongMaterial({});
  material.emissive.setHex(0xffffff);
  material.emissiveIntensity = 0.5;

  material.color.setHex(0xffffff);

  return material;
}

function createTextMaterial() {
  const material = new THREE.MeshPhongMaterial({
    opacity: 0.75,
    transparent: true,
    shininess: 100,
  });
  material.emissive.setHSL(0.5, 0.5, 0.2);
  material.emissiveIntensity = 0.5;

  material.color.setHex(0xffffff);

  return material;
}

function createTreeGeometry() {
  const height = 1;
  const levels = 10;

  const treeGeometry = new THREE.CylinderGeometry(0.4, 0.0, height, 20, levels);
  treeGeometry.vertices.forEach(vertex => {
    vertex.y += height * 0.5;
    const randomFactor = vertex.y * 0.1;

    vertex.level = Math.round(vertex.y * 10);

    vertex.x += randomInstance.value() * randomFactor;
    vertex.z += randomInstance.value() * randomFactor;
  });

  treeGeometry.vertices.forEach(vertex => {
    if (vertex.level % 2 === 0) {
      vertex.x *= 0.1;
      vertex.z *= 0.1;
      vertex.y -= 0.2;
    } else {
      if (vertex.level) {
        vertex.y += (randomInstance.value() - 0.5) * 0.1;
      }
    }

    // Пилим верхушки
    if (vertex.level <= 2) {
      vertex.x *= 0.0;
      vertex.z *= 0.0;
    }
  });
  treeGeometry.rotateZ(Math.PI);

  treeGeometry.computeVertexNormals();

  return treeGeometry;
}

const sketch = ({ context }) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas,
  });

  // renderer.setClearColor('hsl(200, 50%, 20%)', 1);
  renderer.setClearColor('#fafafa', 1);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

  const camera = new THREE.PerspectiveCamera(25, 1, 0.01, 100);
  camera.position.set(10, 5, -18);

  camera.lookAt(new THREE.Vector3());
  const controls = new THREE.OrbitControls(camera, context.canvas);
  controls.minDistance = 10;
  controls.maxDistance = 40;

  const scene = new THREE.Scene();

  scene.fog = new THREE.Fog(0xffffff, 20, 50);

  // ---------------------------------------------
  // Свет
  // ---------------------------------------------

  const whiteColor = 0xffffff;
  const lightMain = new THREE.HemisphereLight(whiteColor, 0xffffff, 0.2);
  scene.add(lightMain);

  const lightDir1 = new THREE.DirectionalLight(whiteColor, 0.251);
  lightDir1.position.set(3, 10, -10);
  lightDir1.castShadow = true;
  scene.add(lightDir1);

  const lightDir2 = new THREE.DirectionalLight(whiteColor, 0.51);
  lightDir2.position.set(3, 20, -10);
  lightDir2.castShadow = true;
  scene.add(lightDir2);

  [lightDir1, lightDir2].forEach(light => {
    // Set up shadow properties for the light
    light.shadow.mapSize.width = 512; // default
    light.shadow.mapSize.height = 512; // default
    light.shadow.camera.near = 0.5; // default
    light.shadow.camera.far = 500; // default

    const side = 15;
    light.shadow.camera.top = side;
    light.shadow.camera.bottom = -side;
    light.shadow.camera.left = side;
    light.shadow.camera.right = -side;

    // const shadowHelper = new THREE.CameraHelper(light.shadow.camera);
    // scene.add(shadowHelper);
  });

  // ---------------------------------------------
  // Земля
  // ---------------------------------------------
  {
    const geometry = new THREE.PlaneGeometry(60, 60, 100, 100);
    geometry.vertices.forEach(vertex => {
      vertex.z += randomInstance.noise2D(vertex.x * 0.1, vertex.y * 0.1) * 0.5;
    });
    const plane = new THREE.Mesh(geometry, createGroundSnowMaterial());
    plane.rotation.x = +Math.PI * 0.5;
    plane.position.y = +0.5;

    plane.receiveShadow = true;

    scene.add(plane);
  }

  // ---------------------------------------------
  // Деревья
  // ---------------------------------------------

  {
    const greenMaterial = createGreenMaterial();
    const snowMaterial = createTreeSnowMaterial();

    for (let i = 0; i < 500; i += 1) {
      const posX = random.range(-15, 15);
      const posY = random.range(-15, 15);

      const len = Math.sqrt(posX * posX + posY * posY);
      if (len > 15) {
        continue;
      }

      // Где буквы - там без ёлок
      if (posX < 6 && posX > -6 && posY < 2 && posY > -1) {
        continue;
      }

      const height = 1;
      const mesh = new THREE.Mesh(createTreeGeometry(), greenMaterial);
      mesh.position.y += height * 0.5;

      mesh.position.x = posX;
      mesh.position.z = posY;

      mesh.position.y -= randomInstance.noise2D(mesh.position.x * 0.1, mesh.position.z * 0.1) * 0.5;

      // Высота
      mesh.scale.y = 1 + randomInstance.value();
      mesh.position.y += mesh.scale.y;

      // Ширина
      const wideScale = 1 + randomInstance.value();
      mesh.scale.x = wideScale;
      mesh.scale.z = wideScale;

      mesh.castShadow = true;
      mesh.receiveShadow = true;

      const snowMesh = new THREE.Mesh(createTreeGeometry(), snowMaterial);
      snowMesh.position.x = mesh.position.x;
      snowMesh.position.y = mesh.position.y + 0.1;
      snowMesh.position.z = mesh.position.z;

      snowMesh.scale.x = mesh.scale.x;
      snowMesh.scale.y = mesh.scale.y;
      snowMesh.scale.z = mesh.scale.z;

      snowMesh.castShadow = true;
      snowMesh.receiveShadow = true;

      scene.add(mesh);
      scene.add(snowMesh);
    }
  }

  // -------------------------
  // Снежок
  // -------------------------

  // const particles = new THREE.PlaneGeometry(40, 40, 50, 50);
  const particles = new THREE.Geometry(40, 40, 50, 50);
  // particles.rotateX(Math.PI * 0.5);
  particles.vertices = particles.vertices.map(v => {
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

  const shaderPoint = THREE.ShaderLib.points;
  const uniforms = {
    ...shaderPoint.uniforms,
    iTime: { value: 0 },
    pSize: { value: 10 },
    camPosition: new THREE.Uniform(camera.position),
  };

  const pMaterial = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,

    blending: THREE.AdditiveBlending,

    fragmentShader,
    vertexShader,
  });

  const particleSystem = new THREE.Points(particles, pMaterial);
  particleSystem.position.y += 4;
  particleSystem.sortParticles = true;

  scene.add(particleSystem);

  // -------------------------
  // Надпись
  // -------------------------

  const textMaterial = createTextMaterial();
  const geometry = new THREE.TextGeometry('Happy New Year 2020!', {
    font: new THREE.Font(font),
    size: 0.75,
    height: 0.25,
    curveSegments: 3,
    bevelEnabled: true,
    bevelThickness: 0.175,
    bevelSize: 0.075,
    bevelOffset: 0,
    bevelSegments: 20,
  });
  geometry.vertices.forEach(v => {
    v.x += (randomInstance.value() - 0.5) * 0.05;
    v.y += (randomInstance.value() - 0.5) * 0.05;
    v.z += (randomInstance.value() - 0.5) * 0.05;
  });
  const textMesh = new THREE.Mesh(geometry, textMaterial);
  textMesh.rotateY(Math.PI);
  textMesh.rotateX(-Math.PI * 0.25);
  textMesh.position.x += 5;
  textMesh.position.y += 0.5;
  textMesh.position.z += 1.25;

  textMesh.castShadow = true;
  textMesh.receiveShadow = true;

  scene.add(textMesh);

  return {
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight, false);
      camera.aspect = viewportWidth / viewportHeight;
      camera.updateProjectionMatrix();
    },

    render({ time, dimensions }) {
      pMaterial.uniforms.iTime.value = time * 0.175;
      pMaterial.uniforms.camPosition = new THREE.Uniform(camera.position);

      camera.position.z = Math.min(camera.position.z, 0);
      camera.position.y = Math.max(camera.position.y, 5);
      camera.position.y = Math.min(camera.position.y, 15);

      controls.update();
      renderer.render(scene, camera);
    },

    unload() {
      controls.dispose();
      renderer.dispose();
    },
  };
};

export default { sketch, settings };
