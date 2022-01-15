#include <output_fragment>

outgoingLight = totalDiffuse*.5;
gl_FragColor = vec4( outgoingLight, diffuseColor.a );
