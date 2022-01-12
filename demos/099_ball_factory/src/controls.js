import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

export const createControls = (ctx) => {
  const {
    camera,
    renderer,
    options: { countPerRow, size },
  } = ctx;

  const controls = new OrbitControls(camera, renderer.domElement);
  ctx.controls = controls;
  controls.target = ctx.center;
  controls.update();
};
