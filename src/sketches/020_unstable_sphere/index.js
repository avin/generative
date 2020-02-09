import vertexShader from './shaders/vert.glsl';
import fragmentShader from './shaders/frag.glsl';

const THREE = require('three');

global.THREE = THREE;

require('three/examples/js/controls/OrbitControls');

const settings = {
  animate: true,
  context: 'webgl',
  dimensions: [2048, 2048],
};

const sketch = ({ context }) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas,
  });

  renderer.setClearColor('hsl(100, 10%, 10%)', 1);

  const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 100);
  camera.position.set(2, -1.5, -1);

  camera.lookAt(new THREE.Vector3());
  const controls = new THREE.OrbitControls(camera, context.canvas);

  const scene = new THREE.Scene();

  const particles = new THREE.OctahedronGeometry(1, 5);
  particles.vertices = particles.vertices.map(v => {
    v.x += (Math.random() - 0.5) * 0.05;
    v.y += (Math.random() - 0.5) * 0.05;
    v.z += (Math.random() - 0.5) * 0.05;
    return v;
  });

  const shaderPoint = THREE.ShaderLib.points;
  const uniforms = {
    ...shaderPoint.uniforms,
    iTime: { value: 0 },
    pSize: { value: 10 },
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

  return {
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight, false);
      camera.aspect = viewportWidth / viewportHeight;
      camera.updateProjectionMatrix();
    },

    render({ time, dimensions }) {
      pMaterial.uniforms.iTime.value = time * 0.175;

      camera.position.x = 5 * Math.cos(time * 0.125);
      camera.position.z = 5 * Math.sin(time * 0.125);

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
