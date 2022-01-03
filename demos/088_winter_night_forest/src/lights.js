import * as THREE from 'three';

export const createLights = (ctx) => {
  const { scene } = ctx;

  const whiteColor = 0xffffff;
  const lightMain = new THREE.HemisphereLight(whiteColor, 0x6666ff, 0.1);
  scene.add(lightMain);

  const lightDir1 = new THREE.DirectionalLight(whiteColor, 0.9251);
  lightDir1.position.set(3, 10, -10);
  lightDir1.castShadow = true;
  scene.add(lightDir1);

  const lightDir2 = new THREE.DirectionalLight(whiteColor, 0.1251);
  lightDir2.position.set(3, 20, -10);
  lightDir2.castShadow = true;
  scene.add(lightDir2);

  [lightDir1, lightDir2].forEach((light) => {
    // Set up shadow properties for the light
    light.shadow.mapSize.width = 512; // default
    light.shadow.mapSize.height = 512; // default
    light.shadow.camera.near = 0.5; // default
    light.shadow.camera.far = 500; // default

    const side = 25;
    light.shadow.camera.top = side;
    light.shadow.camera.bottom = -side;
    light.shadow.camera.left = side;
    light.shadow.camera.right = -side;

    // scene.add(new THREE.CameraHelper(light.shadow.camera));
  });
};
