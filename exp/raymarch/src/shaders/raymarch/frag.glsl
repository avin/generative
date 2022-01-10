precision highp float;

uniform float iTime;

varying vec2 vUv;
varying vec3 v_position;

// --------- START-SHADER-TOY-CODE-HERE ------------

#define MAX_STEPS 100.
#define SURF_DIST .001
#define MAX_DIST 100.

float GetDist(vec3 p) {
  float d = length(vec2(length(p.xz) - .4, p.y)) - (sin((p.x)*10. + iTime * 5.)*.05 + .1);
  return d;
}

float Raymarch(vec3 ro, vec3 rd) {
  float dO = 0.;
  float dS;
  for (float i = 0.; i < MAX_STEPS; i++) {
    vec3 p = ro + rd * dO;
    dS = GetDist(p);
    dO += dS;
    if (dS < SURF_DIST || dO > MAX_DIST) break;
  }
  return dO;
}

vec3 GetNormal(vec3 p) {
  vec2 e = vec2(.01, 0.);

  vec3 n = GetDist(p) - vec3(GetDist(p - e.xyy), GetDist(p - e.yxy), GetDist(p - e.yyx));

  return normalize(n);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = vUv - vec2(.5);

  vec3 ro = cameraPosition;
  vec3 rd = normalize(v_position - ro);

  vec3 col = vec3(0.);

  float d = Raymarch(ro, rd);

  float alpha = 1.;
  if (d >= MAX_DIST) {
    // discard;
    alpha = 0.25;
  } else {
    vec3 p = ro + rd * d;
    vec3 n = GetNormal(p);
    col = n.rgb;
  }

  fragColor = vec4(col, alpha);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

void main() { mainImage(gl_FragColor, gl_FragCoord.xy); }
