#version 300 es

precision highp float;

in vec2 v_uv;
in float v_depth;

uniform vec2 u_resolution;

out vec4 outColor;

void main() {
  vec2 ouv = (v_uv - .5);
  vec2 uv = ouv;

  float smoothing = .75 - sqrt(v_depth * 2.5);
  smoothing = clamp(smoothing, 0., .49);

  float d = smoothstep(.5, smoothing, length(uv));

  d -= smoothstep(.5, .0, length(uv)) * .25;
  d -= smoothstep(.5, .4, length(uv)) * .2;
  d *= .5 * (1. - v_depth);
  d = clamp(d, 0., 1.);
  d *= d * 2.5;
  d *= clamp(sqrt(u_resolution.x / u_resolution.y), 0., 1.);

  outColor = vec4(vec3(uv, uv.x+uv.y), d);
}
