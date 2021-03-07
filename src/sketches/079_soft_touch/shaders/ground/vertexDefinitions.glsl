uniform float planeSize;
uniform float penSize;
uniform sampler2D heightTexture;

vec3 distortFunct(vec3 transformed) {
  vec2 uv = vec2(transformed.x, transformed.z) / planeSize + vec2(.5);
  float rv = texture2D(heightTexture, uv).x;
  float s = penSize * 1.25;
  rv = min((-(s - (rv * rv))) * exp2(-s * (rv * rv)), 0.);
  return transformed - vec3(0., rv + s, 0.);
}

vec3 orthogonal(vec3 v) { return cross(v, vec3(1., 1., 1.)); }

vec3 distortNormal(vec3 position, vec3 distortedPosition, vec3 normal) {
  vec3 tangent1 = normalize(orthogonal(normal));
  vec3 tangent2 = normalize(cross(normal, tangent1));
  vec3 nearby1 = position + tangent1;
  vec3 nearby2 = position + tangent2;
  vec3 distorted1 = distortFunct(nearby1);
  vec3 distorted2 = distortFunct(nearby2);
  return normalize(cross(distorted1 - distortedPosition, distorted2 - distortedPosition));
}
