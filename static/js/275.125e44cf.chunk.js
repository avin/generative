(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[275],{390:function(v,n,e){"use strict";e.r(n),n.default=`#define GLSLIFY 1
uniform float iTime;
varying vec2 vUV;

#define SIZE 2.5
#define PI 3.1415926

float distortFunc(vec2 uv) {
  float t = iTime * .1;
  float angle = abs(cos(fract(t * 2.) / 2. * PI * 2.) + 1.) * PI*2.;

  uv *= mat2(cos(angle + vec4(0, 33, 11, 0)));

  uv.x *= SIZE;
  vec2 id = floor(uv);

  uv.x = fract(uv.x) - 0.5;
  uv.y *= SIZE;

  float l = length(uv);

  if (id.x <= 0. && id.x > -2.) {
    return smoothstep(.5, .10, l);
  }

  return 0.;
}

void main(void) {
  vec2 uv = vUV - vec2(.5);

  float v = distortFunc(uv);

  // gl_FragColor = vec4(vec3(1.), 1.);
  gl_FragColor = vec4(vec3(1.), 1. - v*.9);
}
`}}]);
