uniform float iTime;
uniform float radius;
uniform float radiusVariationAmplitude;
uniform float radiusNoiseFrequency;

varying float vRv;

#define MOD3 vec3(.1031, .11369, .13787)

vec3 hash33(vec3 p3) {
  p3 = fract(p3 * MOD3);
  p3 += dot(p3, p3.yxz + 19.19);
  return -1.0 + 2.0 * fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));
}

float noise(vec3 p) {
  const float K1 = 0.333333333;
  const float K2 = 0.166666667;

  vec3 i = floor(p + (p.x + p.y + p.z) * K1);
  vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);

  vec3 e = step(vec3(0.0), d0 - d0.yzx);
  vec3 i1 = e * (1.0 - e.zxy);
  vec3 i2 = 1.0 - e.zxy * (1.0 - e);

  vec3 d1 = d0 - (i1 - 1.0 * K2);
  vec3 d2 = d0 - (i2 - 2.0 * K2);
  vec3 d3 = d0 - (1.0 - 3.0 * K2);

  vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
  vec4 n = h * h * h * h *
           vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));

  return dot(vec4(31.316), n);
}

float getRv(vec3 transformed) {
  float n = noise(transformed * radiusNoiseFrequency + iTime + 100.);

  if(n > .5){
    n = smoothstep(.0, 1., n);
  }

  n = smoothstep(.0, 1., abs(n - .5));
  n = smoothstep(.0, 1., abs(n - .5));

  float rv = -n * radiusVariationAmplitude;

  rv = abs(rv);

  return rv;
}

vec3 distortFunct(vec3 transformed) {
  float rv = getRv(transformed);

  return normalize(transformed) * (rv + radius);
}

vec3 orthogonal(vec3 v) { return cross(v, vec3(1., 1., 1.)); }

vec3 distortNormal(vec3 position, vec3 distortedPosition, vec3 normal) {
  vec3 tangent1 = normalize(orthogonal(normal));
  vec3 tangent2 = normalize(cross(normal, tangent1));
  vec3 nearby1 = position + tangent1 * 0.013;
  vec3 nearby2 = position + tangent2 * 0.013;
  vec3 distorted1 = distortFunct(nearby1);
  vec3 distorted2 = distortFunct(nearby2);
  return normalize(cross(distorted1 - distortedPosition, distorted2 - distortedPosition));
}
