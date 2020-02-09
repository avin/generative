precision highp float;

uniform vec2 iResolution;
uniform float iTime;
uniform float pSize;

uniform mat3 uvTransform;

#define BLACK_COL vec3(24,32,38)/255.
#define WHITE_COL vec3(245,248,250)/255.

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 uv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.y;

  vec2 st = vec2(atan(uv.x, uv.y), length(uv));

  st.x += iTime*.1 + floor(st.y * 5. - iTime*1.)*0.3925;

  float g = st.x * 3.82 * 2.;
  float b1 = fract(g);
  float b2 = sin(st.y*100. - iTime * 10.) * .25 + .5;

  float gf = floor(mod(g, 2.)) * .6;
  float m = step(.125 - st.y*.25 * gf, abs(b2 - b1) );

  m = (1.-m) * abs(1. - gf + .1);

  vec3 col = mix(BLACK_COL, WHITE_COL, m);

  fragColor = vec4(col, 1.0);
}


varying vec2 vUv;

void main() {
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
