import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils';

export const createPlusScene = (ctx) => {
  const { renderer } = ctx;

  ctx.plusScene = {};

  // ***************
  // SCENE
  // ***************

  const scene = new THREE.Scene();
  ctx.plusScene.scene = scene;

  // ***************
  // CAMERA
  // ***************

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 20);
  ctx.plusScene.camera = camera;

  camera.position.set(0, 6, 0);

  camera.lookAt(new THREE.Vector3());

  // ***************
  // CONTROLS
  // ***************

  const controls = new OrbitControls(camera, renderer.domElement);
  ctx.plusScene.controls = controls;
  controls.target = new THREE.Vector3(0, 0, 0);
  controls.update();

  // ***************
  // MESH
  // ***************

  const geometry1 = new THREE.BoxGeometry(5, 1, 1);
  const geometry2 = new THREE.BoxGeometry(1, 1, 5);
  const geometry = mergeBufferGeometries([geometry1, geometry2]);
  const material = new THREE.MeshStandardMaterial({ color: 0xff00ee });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
};
