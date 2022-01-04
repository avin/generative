import * as THREE from 'three';

export const createCamera = (ctx) => {
  const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
  // camera.position.set(0, 0, 20);

  camera.position.set(-2.280968652836788, -4.647185366677116, 7.114836566608782);

  camera.lookAt(new THREE.Vector3());

  ctx.camera = camera;
};
