(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[187],{307:function(i,n,e){"use strict";e.r(n),n.default=`precision highp float;
#define GLSLIFY 1

// Attributes
attribute vec3 position;
attribute vec2 uv;
attribute float idx;

// Uniforms
uniform mat4 viewProjection;
uniform float iTime;
uniform float meshesCount;

// Varying
varying vec2 vUV;
varying float vIdx;
varying float vR;

#include<instancesDeclaration>

#define MOD3 vec3(.1031,.11369,.13787)

vec3 hash33(vec3 p3)
{
  p3 = fract(p3 * MOD3);
  p3 += dot(p3, p3.yxz+19.19);
  return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
}

float noise(vec3 p)
{
  const float K1 = 0.333333333;
  const float K2 = 0.166666667;

  vec3 i = floor(p + (p.x + p.y + p.z) * K1);
  vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);

  vec3 e = step(vec3(0.0), d0 - d0.yzx);
  vec3 i1 = e * (1.0 - e.zxy);
  vec3 i2 = 1.0 - e.zxy * (1.0 - e);

  vec3 d1 = d0 - (i1 - 1.0 * K2);
  vec3 d2 = d0 - (i2 - 2.0 * K2);
  vec3 d3 = d0 - (1.0 - 3.0 * K2);

  vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
  vec4 n = h * h * h * h * vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));

  return dot(vec4(31.316), n);
}

void main() {
    #include<instancesVertex>

    vIdx = idx;
    vUV = uv;

    vec3 vpos = position;

    float t = iTime/meshesCount * 20.;

    float r = idx/(meshesCount+1.) - t;

    vR = r;

    float fractR = fract(r);
    float floorR = floor(r);

    vpos.z = vpos.z + fractR*meshesCount*.2 - .01*meshesCount;
    vpos.y = vpos.y + noise(vec3(position.x*.25, 0. + iTime, idx*.1)) * 1.0;

    gl_Position = viewProjection * finalWorld * vec4(vpos, 1.0);
}
`}}]);
