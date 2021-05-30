(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[164],{285:function(e,i,n){"use strict";n.r(i),i.default=`#version 300 es
#ifdef GL_ES
    precision highp float;
    precision highp int;
    precision mediump sampler3D;
#define GLSLIFY 1
#endif
layout(location = 0) in vec3 position;
void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
}
`}}]);
