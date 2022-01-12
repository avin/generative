import * as THREE from 'three';

export const createCamera = (ctx) => {
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(9.29916714947667, 6.66871799323922, 9.220503129464513);

  camera.lookAt(new THREE.Vector3());

  ctx.camera = camera;
};
