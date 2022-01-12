import * as THREE from 'three';

export const createRenderer = (ctx) => {
  const { canvas } = ctx;

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  ctx.renderer = renderer;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.setClearColor(0x182026, 1);
  renderer.setClearColor(0x999999, 1);
  // renderer.setClearColor(0x999999, 1);
};
