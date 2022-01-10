#include <color_fragment>

vec3 col = mix(COL1, COL2, vGroup);
col *= (vPosition.y / vScaleHeight)*.75 + .25;

diffuseColor = vec4(col, 1.);
