attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;
varying vec3 opos;
varying vec3 vpos;
varying float size;

uniform float iTime;
uniform float pSize;

uniform mat4 worldViewProjection;
uniform mat4 world;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)
#pragma glslify: pnoise3 = require(glsl-noise/periodic/3d)

void main() {
  vUv = uv;
  float t = iTime*.1;

  opos = position;
  vpos = position;

  vec3 chTime = vec3(t);
  vpos.xyz *= 1. + snoise3(position*1.5 + chTime)*.15;
  vpos.xyz *= 1. + snoise3(position*5.5 + chTime)*.075;
  vpos.xyz *= 1. + snoise3(position*10.5 + chTime*5.)*.025;

  float rFactor = fract(snoise3(opos*100.)) > .5 ? 1.1 : 1.;

  size = pSize;
  gl_PointSize = pSize + (length(vpos)-.75)*10.;

  gl_Position = worldViewProjection * vec4( vpos*rFactor, 1.0 );
}
