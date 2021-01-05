varying float vFactor;

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

float nRand(vec2 n) { return fract(sin(dot(n.xy, vec2(12.9898, 78.233))) * 43758.5453); }
