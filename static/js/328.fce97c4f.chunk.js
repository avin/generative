(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[328],{222:function(i,n,e){"use strict";e.r(n),n.default=`#define GLSLIFY 1
attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;
varying vec3 oPos;
varying vec3 pPos;
varying float rSize;

uniform float iTime;
uniform float pSize;
uniform vec3 camPos;

uniform mat4 worldViewProjection;
uniform mat4 world;

#define PI 3.1415926
#define PI2 6.28318530

#define mirror(v) abs(2. * fract(v / 2.) - 1.)

float circ(vec2 v)
{
    v = fract(v)-.5;
    return max(     smoothstep(.4, .5, length(v)),
    (1.-smoothstep(.0, .1, abs(v.y)))  );
}

void main()
{
    vUv = uv;

    vec3 vpos = position;

    vec2 R = vec2(1., 1.);

    vec2 I = position.xz;

    I = .5* (I+I-R)/R.y;

    I = vec2(0, length(I)) + fract( atan(I.y, I.x) / 6.283 );
    I.x = ceil(I.y) - I.x;

    I.x *= I.x * 2.4;

    vec2 pp = fract(I)-.5;

    vpos.y += sin(max(sin(pp.x*PI2)*.1 + cos(pp.y*PI2)*.1, -.0) * PI2)*.5;

    gl_PointSize = pSize;

    gl_Position = worldViewProjection * vec4(vpos, 1.0);
}
`}}]);
