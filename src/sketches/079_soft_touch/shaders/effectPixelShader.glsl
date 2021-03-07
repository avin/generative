uniform sampler2D sameTexture;
uniform float iTime;
uniform vec2 penPosition;
uniform vec2 prevPenPosition;
uniform float penSize;
uniform float fadeFactor;
uniform int isDrawing;
uniform vec2 iResolution;
varying vec2 vUV;

#define S(d, r, pix) smoothstep(.75, -.75, (d) / (pix * 2.))
float line(vec2 p, vec2 a, vec2 b) {
  p -= a, b -= a;
  float h = clamp(dot(p, b) / dot(b, b), 0., 1.);  // proj coord on line
  return length(p - b * h);                        // dist to segment
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = (fragCoord - .5 * iResolution.xy) / iResolution.y;
  vec2 ouv = fragCoord / iResolution.xy;

  vec2 pos1 = penPosition;
  vec2 pos2 = prevPenPosition;

  float backCol = texture2D(sameTexture, ouv).r;

  float d = 0.;

  if (isDrawing == 1) {
    d = S(line(uv, pos2, pos1), 3., penSize);
  }

  float f = max(sqrt(backCol * (backCol - fadeFactor)) * (1. - fadeFactor), d);

  vec3 col = vec3(f);

  fragColor = vec4(max(col * (1. - fadeFactor), vec3(fadeFactor)) - vec3(fadeFactor), 1.0);
}

//-------------------------------------

void main() { mainImage(gl_FragColor, vUV * iResolution); }
