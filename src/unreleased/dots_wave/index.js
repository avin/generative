import { getWebGLContext } from '@/utils/webgl';
import fragmentShader from './shaders/frag.glsl';
import vertexShader from './shaders/vert.glsl';

const THREE = require('three113');

global.THREE = THREE;

require('three113/examples/js/controls/OrbitControls');

const settings = {
  animate: true,
  context: getWebGLContext(),
};

const sketch = ({ context, viewportWidth, viewportHeight }) => {
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas,
  });
  renderer.setClearColor('hsl(0, 0%, 98%)', 1);

  const camera = new THREE.OrthographicCamera(-1, 1, -1, 1, 1, 1000);

  // Setup your scene
  const scene = new THREE.Scene();

  const particles = new THREE.PlaneGeometry(2.5, 2.5, 25, 25);
  particles.translate(0, 0, -1);

  const shaderPoint = THREE.ShaderLib.points;
  const uniforms = {
    ...shaderPoint.uniforms,
    iTime: { value: 0 },
    pSize: { value: 10 },
    iResolution: { value: [viewportWidth, viewportHeight] },
    // iResolution: THREE.Uniform(new THREE.Vector2([viewportWidth, viewportHeight])),
  };

  const pMaterial = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,

    blending: THREE.NormalBlending,
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
      pMaterial.uniforms.iTime.value = time;
      renderer.render(scene, camera);
    },
    // Dispose of events & renderer for cleaner hot-reloading
    unload() {
      renderer.dispose();
    },
  };
};

export default { sketch, settings };
