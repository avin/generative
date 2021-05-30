(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[196],{320:function(n,e,o){"use strict";o.r(e),e.default=`#define GLSLIFY 1
// vec3 col = vDiffuseColor.rgb * (vR*.75);

float rColFactor = hash11(vIdx * .001);

diffuseColor = vDiffuseColor.rgb * (vR * 1.5) * (.85 + rColFactor * .3);
`}}]);
