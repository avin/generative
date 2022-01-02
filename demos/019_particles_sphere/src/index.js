import canvasSketch from 'canvas-sketch';
import fragmentShader from './shaders/frag.glsl';
import vertexShader from './shaders/vert.glsl';

const THREE = require('three');

global.THREE = THREE;

require('three/examples/js/controls/OrbitControls');

const settings = {
  canvas: document.querySelector('#canvas'),
  context: 'webgl',
  animate: true,
};

const sketch = ({ context }) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas,
  });

  // WebGL background color
  renderer.setClearColor('hsl(100, 10%, 10%)', 1);

  // Setup a camera
  const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 100);
  camera.position.set(2, -1.5, -1);

  camera.lookAt(new THREE.Vector3());

  // Setup camera controller
  const controls = new THREE.OrbitControls(camera, context.canvas);

  // Setup your scene
  const scene = new THREE.Scene();

  // create the particle variables
  const particles = new THREE.OctahedronGeometry(1, 7);

  const shaderPoint = THREE.ShaderLib.points;
  const uniforms = {
    ...shaderPoint.uniforms,
    iTime: { value: 0 },
    pSize: { value: 4 },
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
  particleSystem.sortParticles = true;

  scene.add(particleSystem);

  // draw each frame
  return {
    // Handle resize events here
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight, false);
      camera.aspect = viewportWidth / viewportHeight;
      camera.updateProjectionMatrix();
    },
    // Update & render your scene here
    render({ time, dimensions }) {
      pMaterial.uniforms.iTime.value = time * 0.75;

      controls.update();
      renderer.render(scene, camera);
    },
    // Dispose of events & renderer for cleaner hot-reloading
    unload() {
      controls.dispose();
      renderer.dispose();
    },
  };
};

canvasSketch(sketch, settings);
