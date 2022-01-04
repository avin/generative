import * as THREE from 'three';

export const createLights = (ctx) => {
  const { scene } = ctx;

  const whiteColor = 0xf5f8fa;
  const blackColor = 0x182026;
  const lightMain = new THREE.HemisphereLight(whiteColor, blackColor, 0.75);
  scene.add(lightMain);

  const pLight = new THREE.PointLight(whiteColor, 0.5);
  pLight.position.x = 5;
  pLight.position.y = 5;
  pLight.position.z = -5;
  scene.add(pLight);

  const pLight2 = new THREE.PointLight(whiteColor, 0.75);
  pLight.position.x = 9;
  pLight.position.y = 12;
  pLight.position.z = 7;
  scene.add(pLight2);
};
