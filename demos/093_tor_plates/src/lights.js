import * as THREE from 'three';

export const createLights = (ctx) => {
  const { scene } = ctx;

  const whiteColor = 0xf5f8fa;
  const blackColor = 0x394b59;
  const lightMain = new THREE.HemisphereLight(whiteColor, blackColor, 0.75);
  scene.add(lightMain);

  const pLight = new THREE.PointLight(whiteColor, 0.5);
  pLight.position.set(5, 5, -5);

  scene.add(pLight);

  const pLight2 = new THREE.PointLight(whiteColor, 0.75);
  pLight.position.set(-2.28, 1.647, 7.114);

  scene.add(pLight2);
};
