import * as THREE from 'three';

export const createScene = (ctx) => {
  const { options } = ctx;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(options.atmosphereColor, 20, 50);

  ctx.scene = scene;
};
