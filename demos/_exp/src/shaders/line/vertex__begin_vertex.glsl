#include <begin_vertex>

vec2 oPos = transformed.xz;
float sizeFactor = .005;
float depth = readDepth( tDepth, (oPos*0.1 + vec2(.5)) );
// float depth = .1;

float t = iTime * 20.;
transformed.x += sin(rand(oPos + vec2(133.))*PI*2. + t)*sizeFactor;
transformed.y += sin(rand(oPos)*PI*2. + t)*sizeFactor;
transformed.z += sin(rand(oPos + vec2(352.))*PI*2. + t)*sizeFactor;

transformed.y -= sqrt(depth)*5. - 5. - sin(rand(oPos)*PI*2. + t)*sizeFactor;

transformed.x += (snoise(vec3(oPos*1.5 + vec2(iTime*.5), 0.)))*.125;
transformed.z += (snoise(vec3((oPos*1.5 + vec2(100.))*.25 + vec2(iTime*.5), 0.)))*.125;

vPosition = transformed;
