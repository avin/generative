(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[204],{322:function(e,n,t){"use strict";t.r(n),n.default=`#define GLSLIFY 1
float t = 100. + iTime * 1.75;

vIdx = idx;
vR1Factor = r1Factor;
vR2Factor = r2Factor;

float nFactor = noise(vec3(-t, idx, 0));

positionUpdated *= .75 + (sin(nFactor) * .5 + .5) * .75;

float pfX = noise(vec3(-t, idx, 0)) * .1;
float pfY = noise(vec3(-t, idx + 333., 0)) * .1;
float pfZ = noise(vec3(-t, idx + 666., 0)) * .1;

positionUpdated += vec3(pfX, pfY, pfZ);
`}}]);
