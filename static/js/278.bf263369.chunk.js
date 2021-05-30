(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[278],{394:function(e,n,i){"use strict";i.r(n),n.default=`#define GLSLIFY 1
uniform float iTime;
uniform float radius;
uniform float radiusVariationAmplitude;
uniform float radiusNoiseFrequency;

varying float vRv;

vec3 hsv2rgb_smooth(in vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);

  rgb = rgb * rgb * (3.0 - 2.0 * rgb);  // cubic smoothing

  return c.z * mix(vec3(1.0), rgb, c.y);
}
`}}]);
