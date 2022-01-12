import * as THREE from 'three';

export const createLights = (ctx) => {
  const {
    scene,
    options: { lightColor },
  } = ctx;

  const light1 = new THREE.HemisphereLight(lightColor, 0x000000, .0);
  scene.add(light1);
  const light2 = new THREE.AmbientLight(lightColor, 0.0);
  scene.add(light2);

  const pLight = new THREE.PointLight(lightColor);
  pLight.distance = 20;
  pLight.power = 120;
  pLight.decay = 2;
  pLight.position.set(0, 0, 0);
  scene.add(pLight);
  //
  // const pLight2 = new THREE.PointLight(whiteColor, 0.75);
  // pLight.position.set(-2.28, 1.647, 7.114);
  // scene.add(pLight2);
};
