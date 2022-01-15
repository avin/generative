import canvasSketch from 'canvas-sketch';
import GUI from 'lil-gui';
import * as THREE from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass';
import { SepiaShader } from 'three/examples/jsm/shaders/SepiaShader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DofPass } from './DofPass';
import { PrettyShader } from '../../../common/shaders/PrettyShader/PrettyShader';

const settings = {
  canvas: document.querySelector('#canvas'),
  context: 'webgl2',
  animate: true,
};

const sketch = ({ canvas, width, height }) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x999999, 1);
  renderer.autoClear = false;

  const { scene, camera } = (() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(5, 3, 3);
    camera.lookAt(0, 0, 0);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(0, 0, 0);
    controls.update();

    const lightHem = new THREE.HemisphereLight(0xffffff, 0x333333, 0.75);
    scene.add(lightHem);

    const lightDir = new THREE.DirectionalLight(0xffffff, 0.75);
    lightDir.position.set(5, 5, -7);
    scene.add(lightDir);

    const geometry = new THREE.BoxGeometry(0.75, 0.75, 2);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6600 });
    const count = 300;
    const mesh = new THREE.InstancedMesh(geometry, material, count);

    const matrix = new THREE.Matrix4();
    for (let i = 0; i < count; i++) {
      matrix.compose(
        new THREE.Vector3(i - count / 2, 0, 0),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), (Math.random() * Math.PI) / 2),
        new THREE.Vector3(1, 1, 1),
      );
      mesh.setMatrixAt(i, matrix);
      mesh.setColorAt(
        i,
        new THREE.Color(Math.random() * 0.75 + 0.25, Math.random() * 0.75 + 0.25, Math.random() * 0.75 + 0.25),
      );
    }

    mesh.position.set(0, 0, 0);
    scene.add(mesh);

    return { scene, camera };
  })();

  // ---------------------------------

  const renderPass = new RenderPass(scene, camera);

  const dofPass = new DofPass(scene, camera, {
    uFar: 50.0,
    radScale: 0.1,
    focusPoint: 48,
    focusScale: 200,
    depthFactor: 10,

    width,
    height,
  });

  const postPass1 = new ShaderPass(PrettyShader);
  const postPass2 = new ShaderPass(SepiaShader);

  const smaaPass = new SMAAPass();

  const composer = new EffectComposer(renderer);

  composer.addPass(renderPass);
  composer.addPass(dofPass);
  composer.addPass(postPass1);
  composer.addPass(smaaPass);
  // composer.addPass(postPass2);


  // ---------------------------------

  const effectController = {
    // uFar: 10.,
    // radScale: .5,
    // focusPoint: 88.,
    // focusScale: 10.,

    uFar: 68.5,
    radScale: 0.5,
    focusPoint: 9.5,
    focusScale: 7.8,
    depthFactor: 10,
  };

  const matChanger = () => {
    dofPass.uniforms.uFar.value = effectController.uFar;
    dofPass.uniforms.radScale.value = effectController.radScale;
    dofPass.uniforms.focusPoint.value = effectController.focusPoint;
    dofPass.uniforms.focusScale.value = effectController.focusScale;
    dofPass.uniforms.depthFactor.value = effectController.depthFactor;
  };

  const gui = new GUI();
  gui.add(effectController, 'uFar', 1.0, 100.0, 0.5).onChange(matChanger);
  gui.add(effectController, 'radScale', 0.1, 5, 0.1).onChange(matChanger);
  gui.add(effectController, 'focusPoint', 1, 500, 0.5).onChange(matChanger);
  gui.add(effectController, 'focusScale', 0, 100, 0.05).onChange(matChanger);
  gui.add(effectController, 'depthFactor', 1, 100, 0.5).onChange(matChanger);
  matChanger();
  // gui.close();

  // ---------------------------------

  return {
    resize({ viewportWidth, viewportHeight }) {
      camera.aspect = viewportWidth / viewportHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(viewportWidth, viewportHeight);
      composer.setSize(viewportWidth, viewportHeight);
    },
    render({ time }) {
      postPass1.uniforms.iTime.value = time;

      // renderer.render(scene, camera);
      composer.render();
    },
    unload() {
      renderer.dispose();
    },
  };
};

canvasSketch(sketch, settings);
