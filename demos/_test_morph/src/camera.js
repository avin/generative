import * as THREE from 'three';

export const createCamera = (ctx) => {
  const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(-6.206, -11.522, 20.345);

  camera.lookAt(new THREE.Vector3());

  ctx.camera = camera;
};
