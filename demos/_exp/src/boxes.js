import * as THREE from 'three';

export const createBoxes = (ctx) => {
  const {
    scene,
    options: { totalBoxes, circleRadius },
  } = ctx;

  const geometry = new THREE.BoxGeometry(2, 2, 0.1);

  const material = new THREE.MeshStandardMaterial({
    roughness: 0.0,
    metalness: 0.0,
    color: 0xdb2c6f,
  });

  const boxes = [];
  for (let i = 0; i < totalBoxes; i += 1) {
    const mesh = new THREE.Mesh(geometry, material);

    const pivot2 = new THREE.Group();
    pivot2.add(mesh);

    const pivot1 = new THREE.Group();
    pivot1.add(pivot2);

    const pivot0 = new THREE.Group();
    pivot0.add(pivot1);
    scene.add(pivot0);

    const box = {
      mesh,
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
    frame,
    boxes,

    options: { totalBoxes, bigCircleRadius },
  } = ctx;

  for (let i = 0; i < totalBoxes; i += 1) {
    const { pivot0, pivot1, pivot2, mesh } = boxes[i];

    const f = i / totalBoxes;

    const mf1 = f * Math.PI * 2;
    pivot0.position.set(Math.cos(mf1) * bigCircleRadius, Math.sin(mf1) * bigCircleRadius, 0);
    pivot0.rotation.z = mf1;

    // const mf2 = Math.PI * 2 + time;
    // pivot1.position.set(
    //   Math.cos(mf2) * smallCircleRadius + smallCircleRadius / 2,
    //   0,
    //   Math.sin(mf2) * smallCircleRadius + smallCircleRadius / 2,
    // );

    pivot1.rotation.y = -time * 2 + f * Math.PI * 2;

    pivot2.position.x = bigCircleRadius;

    // boxDummyPivot.remove(boxMesh)

    // boxMesh.rotation.x = time;

    // boxDummy.updateMatrix();
    // boxDummy.updateWorldMatrix();

    // boxMesh.setMatrixAt(i, boxDummy.matrix);
  }
};
