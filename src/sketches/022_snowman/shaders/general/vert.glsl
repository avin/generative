varying vec2 vUv;
varying vec3 vpos;

uniform float iTime;
uniform float pSize;
uniform vec3 camPosition;

void main() {
  vUv = uv;

  vpos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( vpos, 1.0 );
}
