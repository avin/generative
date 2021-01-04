float size = 110.;

vec2 fUV = vec2(vDiffuseUV.x, 0.);

vec2 coord = fract(fUV * size);

vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord) / 2.0;
float line = min(grid.x, grid.y);

line = smoothstep(.90, .10, line);

diffuseColor = vec3(1.);

baseColor.rgb = mix(COL1, COL2, 1. - line);

// diffuseColor = vDiffuseColor.rgb;
