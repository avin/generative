const PrettyShader = {
  uniforms: {
    tDiffuse: { value: null },
  },

  vertexShader: /* glsl */ `
		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

  fragmentShader: /* glsl */ `

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tDiffuse;

		void main() {

			vec3 color = texture2D(tDiffuse, vUv).rgb;

			// tone mapping
      color = vec3(1.7, 1.8, 1.9) * color / (1.0 + color);

      //-----------------------------------------------------
      // postprocessing
      //-----------------------------------------------------

      // Color control
      color = 0.5 * color + 0.5 * color * color * (3.0 - 2.0 * color);

      // Border dark
      color *= 0.2 + 0.8 * pow(32.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.3);

      // Fade in
      // color *= smoothstep(0.0, 1.0, iTime);

			gl_FragColor = vec4(color, 1.);

		}`,
};

export { PrettyShader };
