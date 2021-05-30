(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[133],{255:function(o,n,i){"use strict";i.r(n),n.default=`#define GLSLIFY 1
varying vec2 vUv;
varying vec3 vpos;

uniform float iTime;
uniform float pSize;
uniform vec3 camPosition;

void main() {
  vUv = uv;

  vpos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( vpos, 1.0 );
}
`}}]);
