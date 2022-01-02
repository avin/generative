#define SIZE 2.5
#define PI 3.1415926

vec3 distortFunc(vec3 pos) {
  vec2 uv = (pos / size).xz;

  float t = iTime * .1;
  float angle = abs(cos(fract(t * 2.) / 2. * PI * 2.) + 1.) * PI * 2.;

  uv *= mat2(cos(angle + vec4(0, 33, 11, 0)));

  uv.x *= SIZE;
  vec2 id = floor(uv);
  uv.x = fract(uv.x) - 0.5;
  uv.y *= SIZE;

  float l = length(uv);

  float convexSize = size * .05;

  if (id.x <= 0. && id.x > -2.) {
    pos.y += smoothstep(.4, .0, l) * convexSize;
  }

  return pos;
}

vec3 orthogonal(vec3 v) { return cross(v, vec3(1., 1., 1.)); }

vec3 distortNormal(vec3 position, vec3 distortedPosition, vec3 normal) {
  vec3 tangent1 = normalize(orthogonal(normal));
  vec3 tangent2 = normalize(cross(normal, tangent1));
  vec3 nearby1 = position + tangent1 * 0.013;
  vec3 nearby2 = position + tangent2 * 0.013;
  vec3 distorted1 = distortFunc(nearby1);
  vec3 distorted2 = distortFunc(nearby2);
  return normalize(cross(distorted1 - distortedPosition, distorted2 - distortedPosition));
}
