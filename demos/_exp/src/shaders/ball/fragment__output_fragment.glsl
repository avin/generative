#include <output_fragment>

// diffuseColor.rgb = sqrt(diffuseColor.rgb);

// gl_FragColor = vec4( diffuseColor.rgb, 1. );

outgoingLight = totalDiffuse*.5;
gl_FragColor = vec4( outgoingLight, diffuseColor.a );
