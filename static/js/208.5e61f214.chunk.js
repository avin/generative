(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[208],{326:function(o,t,n){"use strict";n.r(t),t.default=`#define GLSLIFY 1
float t = 100. + iTime * .5;

vIdx = idx;
vR1Factor = r1Factor;
vR2Factor = r2Factor;

float pfX = noise(vec3(-t, idx, pFactor)) * pFactor;
float pfY = noise(vec3(-t, idx + 333., pFactor)) * pFactor;
float pfZ = noise(vec3(-t, idx + 666., pFactor)) * pFactor;

positionUpdated += vec3(pfX, pfY, pfZ)*.25;
`}}]);
