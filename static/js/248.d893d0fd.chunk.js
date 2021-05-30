(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[248],{370:function(n,t,d){"use strict";d.r(t),t.default=`#define GLSLIFY 1
float updateTime = iTime * .1;

if (positionUpdated.y > -.01) {
  positionUpdated = distortFunct(positionUpdated);

  vec3 distortedNormal = distortNormal(position, positionUpdated, normalUpdated);
  // normalUpdated = normalize(normalUpdated + distortedNormal);
  normalUpdated = distortedNormal;
}
`}}]);
