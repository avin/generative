(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[233],{351:function(s,n,t){"use strict";t.r(n),n.default=`#define GLSLIFY 1
float t = iTime * speedFactor;

float s = (fract(t + rFactor1));

float ps = .1;

float ss = clamp(s, 0., ps);

float r = ss / ps;

vR = r;

positionUpdated.xz *= r;

positionUpdated.y *= (1. - r)*2.;
`}}]);
