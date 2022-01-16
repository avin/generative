#include <common>

varying vec2 vUv;

uniform sampler2D tDiffuse;
uniform float iTime;

void main() {
  vec3 color = texture2D(tDiffuse, vUv).rgb;

  // tone mapping
  color = vec3(1.7, 1.8, 1.9) * color / (1.0 + color);

  // Color control
  color = 0.5 * color + 0.5 * color * color * (3.0 - 2.0 * color);

  // Border dark
  color *= 0.2 + 0.8 * pow(32.0 * vUv.x * vUv.y * (1.0 - vUv.x) * (1.0 - vUv.y), 0.3);

  // Fade in
  if (iTime >= 0.) {
    color *= smoothstep(0.0, 1.0, iTime);
  }

  gl_FragColor = vec4(color, 1.);
}
