(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[189],{311:function(e,n,a){"use strict";a.r(n),n.default=`#define GLSLIFY 1
varying float vIdx;
varying float vR;

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

float hash11(float p)
{
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}
`}}]);
