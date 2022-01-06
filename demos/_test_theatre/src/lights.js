import * as THREE from 'three';

export const createLights = (ctx) => {
  const { scene } = ctx;

  const whiteColor = 0xf5f8fa;
  const blackColor = 0x394b59;
  const lightMain = new THREE.HemisphereLight(whiteColor, blackColor, 1.);
  scene.add(lightMain);

  const pLight = new THREE.PointLight(whiteColor, 0.5);
  pLight.position.set(5, 5, -5);
  scene.add(pLight);
};
