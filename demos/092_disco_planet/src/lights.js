import * as THREE from 'three';

export const createLights = (ctx) => {
  const { scene } = ctx;

  const whiteColor = 0xffffff;
  const lightMain = new THREE.HemisphereLight(whiteColor, whiteColor, 0.6);
  scene.add(lightMain);
};
