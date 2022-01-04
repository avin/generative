import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

export const createControls = (ctx) => {
  const { camera, renderer } = ctx;

  const controls = new OrbitControls(camera, renderer.domElement);
  ctx.controls = controls;
  controls.target = new THREE.Vector3(0, 0, 0);
  controls.update();
};
