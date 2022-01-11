#include <color_fragment>

vec2 uv = vUv;
uv.x = abs(uv.x*PI);
uv.x = abs(uv.y*PI + vUv.x/1.9);
// uv.y = abs(uv.y - 1.);
// uv.y = abs(uv.y - .5);
vec2 st = vec2(atan(uv.x, uv.y), length(uv));
uv = vec2(st.x / PI2 - st.y * 2.0, st.y);
float smf = 1.5*fwidth(uv.x);
float m = fract(uv.x);
float mask = smoothstep(0., smf, abs(m-.5)-.25);

float d = mask;

diffuseColor = vec4(vec3(d), 1.);
