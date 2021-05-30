(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[177],{296:function(e,n,i){"use strict";i.r(n),n.default=`#version 300 es

#ifdef GL_ES
precision highp float;
precision highp int;
precision mediump sampler3D;
#define GLSLIFY 1
#endif

#define HW_PERFORMANCE 1

uniform vec3 iResolution;
uniform float iTime;
uniform float iChannelTime[4];
uniform vec4 iMouse;
uniform vec4 iDate;
uniform float iSampleRate;
uniform vec3 iChannelResolution[4];
uniform int iFrame;
uniform float iTimeDelta;
uniform float iFrameRate;
struct Channel {
    vec3 resolution;
    float time;
};
uniform Channel iChannel[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;
void mainImage(out vec4 c, in vec2 f);

// --------- START-SHADER-TOY-CODE-HERE ------------

#pragma includeScene

// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main(void)
{
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage(color, gl_FragCoord.xy);
    color.w = 1.0;
    outColor = color;
}
`}}]);
