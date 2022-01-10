import * as THREE from 'three';

export const createBoxes = (ctx) => {
  const { scene } = ctx;

  const geometry = new THREE.BoxGeometry();

  const material1 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  const material2 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

  const mesh1 = new THREE.Mesh(geometry, material1);
  mesh1.position.set(-1.25, 0, 0);
  scene.add(mesh1);

  const mesh2 = new THREE.Mesh(geometry, material2);
  mesh2.position.set(1.25, 0, 0);
  scene.add(mesh2);

  console.log(THREE.ShaderLib['depth']);
};
