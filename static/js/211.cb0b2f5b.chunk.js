(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[211],{336:function(t,n,i){"use strict";i.r(n),n.default=`#define GLSLIFY 1
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 worldViewProjection;
uniform float time;

varying vec3 vPosition;
varying vec2 vUV;

void main() {
    vec4 p = vec4( position, 1. );
    vPosition = p.xyz;
    vUV = uv;
	gl_Position = worldViewProjection * p;
}
`}}]);
