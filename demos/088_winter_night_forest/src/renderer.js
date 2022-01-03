import * as THREE from 'three';

export const createRenderer = (ctx) => {
  const { canvas, options } = ctx;

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  ctx.renderer = renderer;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

  renderer.setClearColor(options.atmosphereColor, 1);
};
