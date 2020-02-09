#pragma glslify: noise = require('glsl-noise/simplex/3d')

varying vec2 vUv;
varying vec3 vpos;
varying float size;

uniform float iTime;
uniform float pSize;

void main() {
  vUv = uv;
  float t = iTime*.025;

  vpos = position;

  vpos.xyz *= 1. + noise(position*1.5 + vec3(iTime*.5))*.15;
  vpos.xyz *= 1. + noise(position*5.5 + vec3(iTime*.5))*.075;
  vpos.xyz *= 1. + noise(position*10.5 + vec3(iTime*.5))*.025;


  size = pSize;
  gl_PointSize = pSize + (length(vpos)-.75)*10.;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( vpos, 1.0 );
}
