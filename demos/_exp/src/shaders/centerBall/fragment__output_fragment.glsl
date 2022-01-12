#include <output_fragment>

//
//vec3 col = hue(vScale*.3 - .4).rgb;
//diffuseColor *= vec4(col, 1.);

float nn = dot(vNormal, vec3(0.,0.,1.));

float atmosFactor = .5/pow(nn, 0.5);
vec3 atmosColor = vec3(.4) * pow(nn, 5.25);
diffuseColor.rgb = diffuseColor.rgb * atmosFactor - atmosColor;

gl_FragColor = vec4( diffuseColor.rgb, 1. );
