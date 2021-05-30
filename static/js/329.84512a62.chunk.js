(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[329],{224:function(i,e,n){"use strict";n.r(e),e.default=`#define GLSLIFY 1
uniform sampler2D normal;
uniform float iTime;
uniform float size;
varying vec2 vUV;

vec2 wavedx(vec2 position, vec2 direction, float speed, float frequency, float timeshift) {
  float x = dot(direction, position) * frequency + timeshift * speed;
  float wave = exp(sin(x) - 1.0);
  float dx = wave * cos(x);
  return vec2(wave, -dx);
}

float getwaves(vec2 position, int iterations) {
  float iter = 0.0;
  float phase = 6.0;
  float speed = 2.0;
  float weight = 1.0;
  float w = 0.0;
  float ws = 0.0;
  for (int i = 0; i < iterations; i++) {
    vec2 p = vec2(sin(iter), cos(iter));
    vec2 res = wavedx(position, p, speed, phase, iTime * 1.5);
    position += normalize(p) * res.y * weight * 0.0148;
    w += res.x * weight;
    iter += 12.0;
    ws += weight;
    weight = mix(weight, 0.0, 0.2);
    phase *= 1.18;
    speed *= 1.07;
  }
  return w / ws;
}

vec4 encodeUnitFloat32(float f) {
  vec4 rgba = vec4(1., 255., 65025., 16581375.) * f;
  rgba = fract(rgba);
  rgba -= rgba.yzww * vec2(1. / 255., 0.).xxxy;
  return rgba;
}

void main(void) {
  vec2 uv = vUV * size * .1 + vec2(10.);

  float b = getwaves(uv, 11) * 1.0;

  gl_FragColor = encodeUnitFloat32(b);
}
`}}]);
