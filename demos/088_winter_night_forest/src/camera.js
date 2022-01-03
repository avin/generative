import * as THREE from 'three';

export const createCamera = (ctx) => {
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(21, 3, 0.5);
  camera.lookAt(new THREE.Vector3());

  ctx.camera = camera;
};
