import { getProject, types as t } from '@theatre/core';
import state from './state.json';
import studio from '@theatre/studio';

export const setupTheatre = (ctx) => {
  if (process.env.NODE_ENV === 'development') {
    studio.initialize();
  }

  const theatreProject = getProject('Animation', { state });
  ctx.theatre.project = theatreProject;

  const sheet = theatreProject.sheet('Scene1');

  const plusObj = sheet.object('Plus', {
    position: {
      x: t.number(0, { nudgeMultiplier: 0.1 }),
      y: t.number(0, { nudgeMultiplier: 0.1 }),
      z: t.number(0, { nudgeMultiplier: 0.1 }),
    },
    rotation: {
      x: t.number(0, { nudgeMultiplier: 0.1 }),
      y: t.number(0, { nudgeMultiplier: 0.1 }),
      z: t.number(0, { nudgeMultiplier: 0.1 }),
    },
  });

  plusObj.onValuesChange(function callback({ position, rotation }) {
    const {
      plusScene: { mesh: plusMesh },
    } = ctx;

    const pi = Math.PI;

    plusMesh.position.x = position.x;
    plusMesh.position.y = position.y;
    plusMesh.position.z = position.z;

    plusMesh.rotation.x = rotation.x * pi;
    plusMesh.rotation.y = rotation.y * pi;
    plusMesh.rotation.z = rotation.z * pi;
  });

  theatreProject.ready.then(() => {
    ctx.plusScene.mesh.visible = true;
    sheet.sequence.play({ iterationCount: Infinity });
  });
  window.theatreProject = theatreProject;
};
