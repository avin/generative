import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';

export const createGround = (ctx) => {
  const {
    scene,
    options: { countPerRow, size },
  } = ctx;

  const geometry = new RoundedBoxGeometry(countPerRow * size + 0.5, 2.25, countPerRow * size + 0.5, 3, 0.4);
  const material = new THREE.MeshStandardMaterial({
    roughness: 0.15,
    metalness: 0.7,
    color: 0xffffff,
    envMapIntensity: 1.0,
  });
  material.transparent = true;
  material.opacity = 1.75;

  const mesh1 = new THREE.Mesh(geometry, material);
  scene.add(mesh1);

  const mesh2 = new THREE.Mesh(geometry, material);
  mesh2.position.y = countPerRow * size;
  scene.add(mesh2);

  ctx.groundMaterial = material;
};
