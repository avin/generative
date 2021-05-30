(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[273],{388:function(o,t,d){"use strict";d.r(t),t.default=`#define GLSLIFY 1
positionUpdated = distortFunc(positionUpdated);

vec3 distortedNormal = distortNormal(position, positionUpdated, normalUpdated);
normalUpdated = normalize(normalUpdated + distortedNormal);
// normalUpdated = distortedNormal;
`}}]);
