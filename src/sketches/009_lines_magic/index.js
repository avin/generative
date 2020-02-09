import { vec3, mat4 } from 'gl-matrix';
import { drawLine } from '@/utils/ctx';
import { rope } from '@/utils/shape';

const settings = {
  dimensions: [1024, 1024],
  animate: true,
};

const sketch = async ({ width, height }) => {
  const cubeVertices = [
    [-1, -1, +1],
    [-1, -1, -1],
    [+1, -1, -1],
    [+1, -1, +1],
    [+1, +1, +1],
    [+1, +1, -1],
    [-1, +1, -1],
    [-1, +1, +1],
  ];

  const initView = mat4.create();

  const sections = [];

  const maxSectionLength = 100;

  return ({ context, time }) => {
    context.fillStyle = 'hsla(0, 0%, 98%, .2)';
    context.fillRect(0, 0, width, height);

    const totalCubes = 5;
    for (let i = 0; i < totalCubes; i += 1) {
      const modelView = mat4.clone(initView);

      mat4.rotateX(modelView, modelView, Math.cos(time) + time / 10);
      mat4.rotateY(modelView, modelView, Math.sin(time));
      mat4.rotateZ(modelView, modelView, Math.sin(time * i));
      const sF = Math.cos(time) / 2 + 1.5;
      mat4.scale(modelView, modelView, [sF, sF, sF]);

      context.fillStyle = `hsl(${time}, 80%, 50%)`;

      const cubeVerticesMorphed = cubeVertices.map(p => {
        const pT = [];
        vec3.transformMat4(pT, p, modelView);

        return pT;
      });

      cubeVerticesMorphed.forEach((p, idx) => {
        const kId = cubeVertices.length * i + idx;
        sections[kId] = sections[kId] || [];

        sections[kId].push([p[0] * 100 + width / 2, p[1] * 100 + height / 2]);

        if (sections[kId].length > maxSectionLength) {
          sections[kId] = sections[kId].slice(1);
        }
      });
    }

    if (sections[0].length > 1) {
      const sectionRopes = sections.map(section =>
        rope(section.map((p, idx) => [p[0], p[1], Math.sqrt(section.length - idx) / 2])),
      );

      sectionRopes.forEach((section, idx) => {
        context.lineWidth = (Math.cos(idx + time / 2) / 2 + 0.6) * 2;
        context.strokeStyle = `hsl(${idx * 6 + 150}, 80%, 60%)`;
        drawLine(context, section);
      });
    }
  };
};

export default { sketch, settings };
