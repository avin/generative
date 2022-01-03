import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

export const createControls = (ctx) => {
  const { camera, renderer } = ctx;

  const controls = new OrbitControls(camera, renderer.domElement);
  ctx.controls = controls;
  controls.target = new THREE.Vector3(0, 0, 0);
  controls.minDistance = 5;
  controls.maxDistance = 20;
  controls.maxPolarAngle = Math.PI / 2 - 0.1;
  controls.update();
};
