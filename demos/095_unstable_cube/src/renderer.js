import * as THREE from 'three';

export const createRenderer = (ctx) => {
  const { canvas } = ctx;

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  ctx.renderer = renderer;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.autoClear = false;
};
