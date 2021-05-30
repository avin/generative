(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[340],{234:function(n,t,e){"use strict";e.r(t),t.default=`#define GLSLIFY 1
// ----------

//float ts = iTime * .5;
//float t = iTime * .1;
//float tScale = 1. + iTime * .5;

float ts = .15;
float t = .1 + iTime;
// float tScale = 1.5;

float mx = noise(mPos * 2. + vec3(10.) + vec3(t, 0, 0)) * ts;
float my = noise(mPos * 2. + vec3(1000.) + vec3(t, 0, 0)) * ts;
float mz = noise(mPos * 2. + vec3(2000.) + vec3(t, 0, 0)) * ts;

float tScale = noise(mPos * 2. + vec3(500.) + vec3(0, 0, 0))*.5 + .5;

positionUpdated += vec3(mx, my, mz);

positionUpdated *= smoothstep(.8, .5, tScale);
`}}]);
