(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[313],{209:function(i,n,e){"use strict";e.r(n),n.default=`#define GLSLIFY 1
uniform sampler2D normal;
uniform float iTime;
uniform float phaseFactor;
varying vec2 vUV;

#define PI 3.141592653589
#define E 2.718281828459
#define EPSILON 0.0000001

void main(void) {
  vec2 uv = vUV * vec2(4.0, 2.0);

  float f = vUV.y - .025 + phaseFactor  + (sin(uv.x * PI * 3. + iTime) * .5 + .5) * .1;

  float b = step(f, .5);

  gl_FragColor = vec4(b);
}
`}}]);
