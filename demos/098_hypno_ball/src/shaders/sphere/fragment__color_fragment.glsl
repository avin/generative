#include <color_fragment>

vec2 uv = vUv;
uv.x = abs(uv.y*PI + vUv.x/1.9);

vec2 st = vec2(atan(uv.x, uv.y), length(uv));
uv = vec2(st.x / PI2 - st.y * 2.0 - iTime, st.y);
float smf = 1.5*fwidth(uv.x);
float m = fract(uv.x);
float mask = smoothstep(0., smf, abs(m-.5)-.25);

float w = .05;
float d = smoothstep(w, w + smf, fract(abs(m*2. + .5))) - smoothstep(1.-w - smf, 1. - w, fract(abs(m*2. + .5))) ;

vec3 hueCol = hue(vUv.y + iTime*.125).rgb;

vec3 col = mix(hueCol, COL2, 1. - d);

diffuseColor = vec4(col, mask);
