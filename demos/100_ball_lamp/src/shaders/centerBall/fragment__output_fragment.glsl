#include <output_fragment>

float nn = dot(vNormal, vec3(0.,0.,1.));

float atmosFactor = .5/pow(nn, 0.5);
vec3 atmosColor = vec3(.4) * pow(nn, 1.25);
diffuseColor.rgb = diffuseColor.rgb * atmosFactor - atmosColor;

gl_FragColor = vec4( diffuseColor.rgb, 1. );
