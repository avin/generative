(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[279],{393:function(o,t,n){"use strict";n.r(t),t.default=`#define GLSLIFY 1
float updateTime = iTime * .1;

float rv = getRv(positionUpdated);

vRv = rv;

positionUpdated = distortFunct(positionUpdated);
vec3 distortedNormal = distortNormal(position, positionUpdated, normalUpdated);
// normalUpdated = normalize(normalUpdated + distortedNormal);
normalUpdated = distortedNormal;

`}}]);
