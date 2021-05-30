(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[206],{328:function(o,n,e){"use strict";e.r(n),n.default=`#define GLSLIFY 1
vec3 col;

if (vR2Factor < .5) {
  col = COL1;
} else if (vR2Factor < .85) {
  col = COL2;
} else {
  col = COL3;
}

diffuseColor = col * (.85 + vR1Factor * .7);
`}}]);
