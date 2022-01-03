#include <alphamap_fragment>

diffuseColor.rgb += vec3(abs(snoise(vec3(vUv*2000., 1))))*.1;
diffuseColor.rgb += smoothstep(.8,.9, abs(snoise(vec3(vUv*1000., 1. + iTime*3.)))) *.5;
