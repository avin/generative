precision highp float;

uniform vec2 iResolution;
uniform float iTime;
uniform float pSize;

uniform mat3 uvTransform;

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
  vec2 uv = (fragCoord - 0.5 * iResolution.xy) / iResolution.y;
  vec2 st = vec2(atan(uv.x, uv.y), length(uv));
  uv = vec2(st.x / 6.2831 + iTime * 2.0 - st.y * 5.0, st.y);
  float smf = .1;
  float m = fract(uv.x);
  float mask = smoothstep(0., smf, abs(m-.5)-.25);
  vec3 col = vec3(0.88, 0, 0.52) * mask;
  fragColor = vec4(col, 1.0);
}

varying vec2 vUv;

void main() {
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
