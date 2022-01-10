uniform float time;

varying vec2 vUv;
varying vec3 v_position;

void main () {
  vec3 newPosition = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

  v_position = newPosition.xyz;
  vUv = uv;
}
