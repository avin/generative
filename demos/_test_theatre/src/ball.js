import * as THREE from 'three';

export const createBall = (ctx) => {
  const geometry = new THREE.SphereGeometry(2);

  const material = new THREE.MeshStandardMaterial({
    color: 0x0066ff,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.visible = false;
  ctx.ballMesh = mesh;

  ctx.scene.add(mesh);
};
