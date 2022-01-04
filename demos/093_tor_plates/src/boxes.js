import * as THREE from 'three';

export const createBoxes = (ctx) => {
  const {
    scene,
    options: { totalBoxes },
  } = ctx;

  const geometry = new THREE.BoxGeometry(2, 2, 0.2);

  const material = new THREE.MeshStandardMaterial({
    roughness: 0.1,
    metalness: 0.0,
    color: 0xdb2c6f,
  });

  const mesh = new THREE.InstancedMesh(geometry, material, totalBoxes);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  scene.add(mesh);

  ctx.boxMesh = mesh;

  const boxes = [];
  for (let i = 0; i < totalBoxes; i += 1) {
    const dummy = new THREE.Object3D();

    const pivot2 = new THREE.Group();
    pivot2.add(dummy);

    const pivot1 = new THREE.Group();
    pivot1.add(pivot2);

    const pivot0 = new THREE.Group();
    pivot0.add(pivot1);
    scene.add(pivot0);

    const box = {
      dummy,
      pivot0,
      pivot1,
      pivot2,
    };
    boxes.push(box);
  }
  ctx.boxes = boxes;
};

export const createBoxesPositions = (ctx) => {
  const {
    time,
    boxes,
    boxMesh,

    options: { totalBoxes, bigCircleRadius },
  } = ctx;

  for (let i = 0; i < totalBoxes; i += 1) {
    const { pivot0, pivot1, pivot2, dummy } = boxes[i];

    const f = i / totalBoxes;

    const moveFactor = f * Math.PI * 2;

    pivot0.position.set(Math.cos(moveFactor) * bigCircleRadius, Math.sin(moveFactor) * bigCircleRadius, 0);
    pivot0.rotation.z = moveFactor;

    pivot1.rotation.y = -time * 2 + f * Math.PI * 2;

    pivot2.position.x = bigCircleRadius;

    boxMesh.setMatrixAt(i, dummy.matrixWorld);
  }

  boxMesh.instanceMatrix.needsUpdate = true;
};
