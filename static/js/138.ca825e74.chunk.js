(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[138],{258:function(e,n,o){"use strict";o.r(n),n.default=`#define GLSLIFY 1
attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;
varying vec3 oPos;
varying vec3 pPos;
varying float mFactor;

uniform float iTime;
uniform float pSize;

uniform mat4 worldViewProjection;
uniform mat4 world;

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

void main()
{
  vUv = uv;

  oPos = position;
  pPos = position;

  float t = fract(iTime/5.)*5.;
  float f = noise(oPos*.5);

  float moveFactor = (oPos.z*.02-(t*.5 + f*.3))*(10. + (pPos.y - oPos.y +50.)*1.)*t*step(pPos.z*.02, t*.5 + f*.3);
  pPos.y += moveFactor;

  mFactor = moveFactor;

  gl_PointSize = pSize;

  gl_Position = worldViewProjection * vec4( pPos, 1.0 );
}
`}}]);
