import * as THREE from 'three';

export const createLights = (ctx) => {
  const { scene } = ctx;

  const light1 = new THREE.HemisphereLight(0xffffff, 0x000000, .75);
  scene.add(light1);
  const light2 = new THREE.AmbientLight(0xffffff, .25);
  scene.add(light2);

  const pLight = new THREE.DirectionalLight(0xffffff, 0.2);
  pLight.position.set(5, 5, -7);
  scene.add(pLight);

  const pLight2 = new THREE.PointLight(0xffffff, 0.25);
  pLight.position.set(-2.28, 1.647, 7.114);
  scene.add(pLight2);
};
