(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[222],{344:function(e,t,d){"use strict";d.r(t),t.default=`#define GLSLIFY 1
float updateTime = iTime * .1;
positionUpdated = distortFunct(positionUpdated);
vec3 distortedNormal = distortNormal(position, positionUpdated, normalUpdated);
// normalUpdated = normalize(normalUpdated + distortedNormal);
normalUpdated = distortedNormal;

`}}]);
