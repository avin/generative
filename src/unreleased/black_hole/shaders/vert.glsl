attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 worldViewProjection;
uniform float time;

varying vec2 vUV;

void main() {
  vec4 p = vec4( position, 1. );
  float l = length(position.xz);

  p.y += sqrt(sqrt(sqrt(l*1000.)*50.)*5000.);
  p.y -= 750.;
  vUV = uv;
  gl_Position = worldViewProjection * p;
}
