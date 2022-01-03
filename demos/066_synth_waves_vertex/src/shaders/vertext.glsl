precision highp float;

attribute vec2 a_position;
attribute float a_idx;
attribute float a_useColor;
attribute float a_offset;

uniform float count;
uniform float iTime;
uniform vec2 iResolution;
uniform float sizeFactor;

varying float vIdx;
varying float vUseColor;

#define MOD3 vec3(.1031, .11369, .13787)

vec3 hash33(vec3 p3) {
  p3 = fract(p3 * MOD3);
  p3 += dot(p3, p3.yxz + 19.19);
  return -1.0 + 2.0 * fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));
}

float noise(vec3 p) {
  const float K1 = 0.333333333;
  const float K2 = 0.166666667;

  vec3 i = floor(p + (p.x + p.y + p.z) * K1);
  vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);

  vec3 e = step(vec3(0.0), d0 - d0.yzx);
  vec3 i1 = e * (1.0 - e.zxy);
  vec3 i2 = 1.0 - e.zxy * (1.0 - e);

  vec3 d1 = d0 - (i1 - 1.0 * K2);
  vec3 d2 = d0 - (i2 - 2.0 * K2);
  vec3 d3 = d0 - (1.0 - 3.0 * K2);

  vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
  vec4 n = h * h * h * h *
           vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));

  return dot(vec4(31.316), n);
}

void main(void) {
  vec3 positionUpdated = vec3(a_position, a_idx / (count * 3.));

  positionUpdated.x *= 2.;

  float idx = a_idx - count / 2.;

  vIdx = idx;
  vUseColor = a_useColor;

  float t = iTime * .5;

  float xFactor = positionUpdated.x;
  float moveFactor = noise(vec3(xFactor * sizeFactor, idx * .15 - t, 1.)) * .25;

  moveFactor *= step(.5, positionUpdated.y);

  positionUpdated.y += moveFactor;

  positionUpdated.y -= a_offset + .5;

  gl_Position = vec4(positionUpdated, 1.0);
}
