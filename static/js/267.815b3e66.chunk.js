(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[267],{386:function(t,e,n){"use strict";n.r(e),e.default=`#define GLSLIFY 1
float l = (length(vPos) - 1.) / tubeLength;

diffuseColor = hsv2rgb_smooth(vec3(l * .5 + .5, .75, 1.)).rgb;

diffuseColor *= sqrt(l);
`}}]);
