import * as THREE from 'three';

export const createScene = (ctx) => {
  const scene = new THREE.Scene();

  ctx.scene = scene;
};
