uniform sampler2D tDiffuse;
uniform sampler2D tDepth;
uniform float iTime;

#include <common>
#include <packing>

float readDepth( sampler2D depthSampler, vec2 coord ) {
  float fragCoordZ = texture2D( depthSampler, coord ).x;
  float cameraNear = 5.;
  float cameraFar = 10.;

    //  float fragCoordZ = 0.;
    //  for(int i=0;i<3;i+=1){
    //    float v = texture2D( depthSampler, coord + vec2(rand(coord + vec2(323. * float(i)))*.025, rand(coord + vec2(100. * float(i)))*.025) ).x;
    //    fragCoordZ+=v;
    //  }
    //  fragCoordZ /= 3.;

  float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
  return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
}
