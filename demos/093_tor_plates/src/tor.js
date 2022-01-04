import * as THREE from 'three';

export const createTor = (ctx) => {
  const { scene } = ctx;

  const geometry = new THREE.TorusGeometry(2.5, 0.55, 12, 64);

  const material = new THREE.MeshStandardMaterial({
    roughness: 0.0,
    metalness: 0.0,
    color: 0x2965cc,
    emissive: 0x2965cc,
    emissiveIntensity: 0.25,
  });

  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);
};
