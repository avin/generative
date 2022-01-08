#include <output_fragment>

float l = length(vPosition.xz);

float st = l*.15;

gl_FragColor = vec4( vec3(st - vPosition.y), diffuseColor.a );
