#version 300 es

in vec4 a_position;
in vec2 a_offset;
in vec2 a_uv;

uniform float u_time;
uniform vec2 u_resolution;

out vec2 v_uv;
out float v_depth;

float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

void main() {
  vec4 pos = a_position;

  float depth = hash11(float(gl_InstanceID) * .01);
  float size = hash11(float(gl_InstanceID + 147) * .053);
  float speed = hash11(float(gl_InstanceID + 254) * .0425);
  float timeOffset = hash11(float(gl_InstanceID + 557) * .0149);

  pos.xy *= .5 + sqrt(depth) * (size*.75 + .25) * 5.;

  pos.x *= u_resolution.y / u_resolution.x;

  pos = pos + vec4(a_offset, 0., 0.);

  float t = u_time * .25 * (1. - depth + speed * .5) * .8 + 100.;

  float mFactor = t / (1. + sqrt(depth * 2.)) + timeOffset;
  float mFx = hash11(floor(mFactor)*.1)*2. - 1.;
  float yOffset = (fract(mFactor) * 2. - 1.) * 2.;
  pos.y += yOffset;
  pos.x += mFx;

  pos.x += sin(yOffset * 5. * speed) * .02;

  gl_Position = pos;
  v_uv = a_uv;
  v_depth = depth;
}
