import * as THREE from 'three';

export const createCamera = (ctx) => {
  const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
  // camera.position.set(0, 0, 20);

  camera.position.set(-8.64, -12.4, 13.09);

  camera.lookAt(new THREE.Vector3());

  ctx.camera = camera;
};
