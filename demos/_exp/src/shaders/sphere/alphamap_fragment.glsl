#include <alphamap_fragment>


float nn = dot(vNormal, vec3(0.,0.,1.));

float fillingZone = .175;

float filling = step(fillingZone, abs(vUv.y - .5));

float n = fract(snoise(vec3(vUv.x*20. - iTime, vUv.y*10., iTime*.3))*3.);

vec3 purple1 = vec3(0.360, 0.145, 0.360);
vec3 purple2 = vec3(0.760, 0.454, 0.760);
vec3 black = vec3(0.094, 0.125, 0.149);

vec3 noiseColor = mix(purple2, purple1, n);

noiseColor -= vec3(sin(vUv.y*80. + iTime*10.)*.1);

diffuseColor.rgb = mix(noiseColor, black, filling);

float atmosFactor = 0.5/pow(nn, 2.25);
vec3 atmosColor = vec3(.25) * pow(nn, 1.25);
diffuseColor.rgb += diffuseColor.rgb * atmosFactor - atmosColor;


float sf = .002;
float thickness = .004;
float contour = smoothstep(fillingZone-sf, fillingZone, abs(vUv.y - .5)) * smoothstep(fillingZone + thickness, fillingZone + thickness-sf, abs(vUv.y - .5));

totalEmissiveRadiance.rgb = mix(totalEmissiveRadiance.rgb, vec3(1.), contour);

