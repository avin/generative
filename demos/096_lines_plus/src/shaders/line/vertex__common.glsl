uniform sampler2D tDiffuse;
uniform sampler2D tDepth;
uniform float iTime;
varying vec3 vPosition;

#include <common>
#include <packing>

#pragma glslify: noise = require('glsl-noise/simplex/3d')

float readDepth(sampler2D depthSampler, vec2 coord) {
  float cameraNear = 5.;
  float cameraFar = 10.;

  float fragCoordZ = 0.;
  for (int i = 0; i < 40; i += 1) {
    float v = texture2D(depthSampler, coord + vec2(rand(coord + vec2(323. * float(i))) * .05,
                                                   rand(coord + vec2(100. * float(i))) * .025))
                  .x;
    fragCoordZ += v;
  }
  fragCoordZ /= 40.;

  float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar);
  return viewZToOrthographicDepth(viewZ, cameraNear, cameraFar);
}
