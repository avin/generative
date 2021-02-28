uniform sampler2D sameTexture;
uniform float iTime;
uniform vec2 penPosition;
uniform vec2 prevPenPosition;
uniform float penSize;
uniform float fadeFactor;
uniform int isDrawing;
uniform vec2 iResolution;
uniform int iFrame;
varying vec2 vUV;

//-------------------------------------

float drawLine(vec2 p1, vec2 p2, vec2 uv, float w, float a) {
  float r = 0.;
  float one_px = w / iResolution.x;
  float d = distance(p1, p2);
  float duv = distance(p1, uv);
  r = 1. - floor(1. - (a * one_px) + distance(mix(p1, p2, clamp(duv / d, 0., 1.)), uv));

  return r;
}

#define S(d,r,pix) smoothstep( .75, -.75, (d)/(pix*2.))
float line(vec2 p, vec2 a,vec2 b) {
    p -= a, b -= a;
    float h = clamp(dot(p, b) / dot(b, b), 0., 1.);   // proj coord on line
    return length(p - b * h);                         // dist to segment
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = (fragCoord - .5 * iResolution.xy) / iResolution.y;
  vec2 ouv = fragCoord / iResolution.xy;

  vec2 pos1 = penPosition;
  vec2 pos2 = prevPenPosition;

  vec3 backCol = texture(sameTexture, ouv).rgb;

  float d = 0.;

  if (isDrawing == 1) {
    // d = clamp(drawLine(pos2, pos1, uv, penSize * iResolution.x, 1.), 0., 1.);
    d = S( line( uv,pos2, pos1), 3., penSize);
  }

  vec3 col = max(backCol * .99, vec3(d));

  fragColor = vec4(max(col * (1. - fadeFactor), vec3(fadeFactor)) - vec3(fadeFactor), 1.0);
}

//-------------------------------------

void main() { mainImage(gl_FragColor, vUV * iResolution); }
