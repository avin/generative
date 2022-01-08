#include <packing>
#include <common>

varying vec2 vUv;
uniform sampler2D tDiffuse;
uniform sampler2D tDepth;
uniform float cameraNear;
uniform float cameraFar;


float readDepth( sampler2D depthSampler, vec2 coord ) {

  float fragCoordZ = texture2D( depthSampler, coord ).x;

  //  float fragCoordZ = 0.;
  //  for(int i=0;i<3;i+=1){
  //    float v = texture2D( depthSampler, coord + vec2(rand(coord + vec2(323. * float(i)))*.025, rand(coord + vec2(100. * float(i)))*.025) ).x;
  //    fragCoordZ+=v;
  //  }
  //  fragCoordZ /= 3.;

  float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
  return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
}

void main() {
  //vec3 diffuse = texture2D( tDiffuse, vUv ).rgb;
  float depth = readDepth( tDepth, vUv );

  gl_FragColor.rgb = 1.0 - vec3( depth );
  // gl_FragColor.rgb = vec3(.5, .1, .9);
  gl_FragColor.a = 1.0;
}
