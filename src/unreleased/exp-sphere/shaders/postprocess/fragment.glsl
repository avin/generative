#ifdef GL_ES
precision highp float;
#endif

// Samplers
varying vec2 vUV;
uniform sampler2D textureSampler;

void main(void) {
  vec3 col = texture2D(textureSampler, vUV).rgb;

  vec2 uv = vUV.xy;

  col *= 0.5 + 0.5 * pow(16.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.1);

  col = clamp(col, 0.0, 1.0);
  col = col * 0.6 + 0.4 * col * col * (3.0 - 2.0 * col) + vec3(0.0, 0.0, 0.04);

  gl_FragColor = vec4(col, 1.);
}
