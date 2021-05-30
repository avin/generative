(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[245],{365:function(n,e,o){"use strict";o.r(e),e.default=`#define GLSLIFY 1
vIdx = idx;
vUseColor = useColor;

float t = iTime * .5;

float moveFactor = noise(vec3(positionUpdated.z * 1.25 * sizeFactor, idx * .15 - t, 1.)) * .25;

moveFactor *= 1. - step(.5, positionUpdated.x);

positionUpdated.x += moveFactor;
`}}]);
