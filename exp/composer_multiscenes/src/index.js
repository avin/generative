import canvasSketch from 'canvas-sketch';
import * as THREE from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass';
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: 'webgl2',
  animate: true,
};

const sketch = ({ canvas }) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x999999, 1);
  renderer.autoClear = false;

  const { scene: firstScene, camera: firstCamera } = (() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(5, 3, 3);
    camera.lookAt(0, 0, 0);

    const light1 = new THREE.HemisphereLight(0xffffff, 0x000000, 0.75);
    scene.add(light1);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    scene.add(mesh);

    return { scene, camera };
  })();

  const { scene: secondScene, camera: secondCamera } = (() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(5, 3, 3);
    camera.lookAt(0, 0, 0);

    const light1 = new THREE.HemisphereLight(0xffffff, 0x000000, 0.75);
    scene.add(light1);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(2, 2, 0);
    scene.add(mesh);

    return { scene, camera };
  })();

  // ---------------------------------

  const renderFirstScene = new RenderPass(firstScene, firstCamera);
  // renderFirstScene.clear = false;

  const renderSecondScene = new RenderPass(secondScene, secondCamera);
  renderSecondScene.clear = false;

  const outputPass = new ShaderPass(CopyShader);
  outputPass.renderToScreen = true;

  const smaaPass = new SMAAPass();

  const composer = new EffectComposer(renderer);

  composer.addPass(renderFirstScene);
  composer.addPass(renderSecondScene);
  // composer.addPass(outputPass);
  composer.addPass(smaaPass);

  // ---------------------------------

  return {
    resize({ viewportWidth, viewportHeight }) {
      const aspect = viewportWidth / viewportHeight;

      firstCamera.aspect = aspect;
      firstCamera.updateProjectionMatrix();

      secondCamera.aspect = aspect;
      secondCamera.updateProjectionMatrix();

      renderer.setSize(viewportWidth, viewportHeight);
      composer.setSize(viewportWidth, viewportHeight);
    },
    render({ time }) {
      // renderer.render(scene, camera);
      composer.render();
    },
    unload() {
      renderer.dispose();
    },
  };
};

canvasSketch(sketch, settings);
