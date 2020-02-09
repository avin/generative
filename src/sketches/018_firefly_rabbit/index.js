import fragmentShader from './shaders/frag.glsl';
import vertexShader from './shaders/vert.glsl';

const THREE = require('three');

global.THREE = THREE;

require('three/examples/js/controls/OrbitControls');

const bunny = require('bunny');

const settings = {
  animate: true,
  context: 'webgl',
};

const sketch = ({ context }) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas,
  });

  // WebGL background color
  renderer.setClearColor('hsl(200, 40%, 10%)', 1);

  // Setup a camera
  const camera = new THREE.PerspectiveCamera(40, 10, 0.91, 1000);
  camera.position.set(100, 100, 100);
  camera.lookAt(new THREE.Vector3(110, 110, 110));

  // Setup camera controller
  const controls = new THREE.OrbitControls(camera, context.canvas);
  controls.target = new THREE.Vector3(0, 25, 0);

  const scene = new THREE.Scene();

  const gridHelper = new THREE.GridHelper(100, 20);
  scene.add(gridHelper);

  const light = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
  scene.add(light);

  bunny.positions.forEach(i => {
    i[0] *= 5;
    i[1] *= 5;
    i[2] *= 5;
  });

  const starsGeometry = new THREE.Geometry();

  bunny.positions.forEach(i => {
    starsGeometry.vertices.push(new THREE.Vector3(i[0], i[1], i[2]));
  });
  bunny.cells.forEach(i => {
    starsGeometry.vertices.push(
      new THREE.Vector3(
        (bunny.positions[i[0]][0] + bunny.positions[i[1]][0] + bunny.positions[i[2]][0]) / 3,
        (bunny.positions[i[0]][1] + bunny.positions[i[1]][1] + bunny.positions[i[2]][1]) / 3,
        (bunny.positions[i[0]][2] + bunny.positions[i[1]][2] + bunny.positions[i[2]][2]) / 3,
      ),
    );
  });

  const shaderPoint = THREE.ShaderLib.points;
  const uniforms = THREE.UniformsUtils.clone(shaderPoint.uniforms);
  uniforms.time = {
    value: 0,
  };

  const pMaterial = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,

    blending: THREE.AdditiveBlending,

    vertexShader,
    fragmentShader,
  });

  const particles = new THREE.Points(starsGeometry, pMaterial);
  scene.add(particles);

  return {
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight, false);
      camera.aspect = viewportWidth / viewportHeight;
      camera.updateProjectionMatrix();
    },

    render({ time }) {
      pMaterial.uniforms.time.value = time * 10;

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
