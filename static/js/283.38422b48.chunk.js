(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[283],{399:function(d,t,o){"use strict";o.r(t),t.default=`#define GLSLIFY 1
positionUpdated = distortFunct(positionUpdated);
vec3 distortedNormal = distortNormal(position, positionUpdated, normalUpdated);
normalUpdated = normalize(normalUpdated + distortedNormal);

`}}]);
