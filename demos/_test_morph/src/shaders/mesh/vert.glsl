uniform float time;

varying vec3 v_position;
varying vec3 v_normal;
varying vec2 v_uv;

void main () {
  vec3 newPosition = position;

  mat3 r = rotation3dZ(0.1 * time);
  r *= rotation3dY(0.1 * sin(time * 0.25));
  r *= rotation3dX(sin(position.y * 0.1 + time * 0.5));

  newPosition *= r;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

  v_position = newPosition;
  v_normal = normal * r;
  v_uv = uv;
}
