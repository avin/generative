#include <begin_vertex>

vec2 oPos = transformed.xz;
float sizeFactor = .0125;
float depth = readDepth( tDepth, (oPos*0.1 + vec2(.5)) );
// float depth = .1;

float t = iTime * 10.;
transformed.x += sin(rand(oPos + vec2(133.))*PI*2. + t)*sizeFactor;
transformed.y += sin(rand(oPos)*PI*2. + t)*sizeFactor - sqrt(depth)*2.;
transformed.z += sin(rand(oPos + vec2(352.))*PI*2. + t)*sizeFactor;
