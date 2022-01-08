#include <common>

varying vec2 vUv;
uniform sampler2D tDiffuse;
uniform float iTime;


vec3 readCol( sampler2D sampler, vec2 uv ) {

  vec3 col = texture2D( sampler, uv ).rgb;

  float l = length(uv)*.0025;

  col.x = texture2D( sampler, uv - vec2(l, 0.) ).x;
  col.b = texture2D( sampler, uv + vec2(l, 0.) ).x;

  col.rgb += vec3(rand(uv + vec2(iTime))-.5)*l*25.;

  return col;
}

void main() {
  vec3 col = readCol( tDiffuse, vUv );

  gl_FragColor.rgb = col;
  gl_FragColor.a = 1.0;
}
