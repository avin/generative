uniform float time;
uniform sampler2D cat;
uniform samplerCube cube;

varying vec3 v_position;
varying vec3 v_normal;
varying vec2 v_uv;

vec3 addLight(vec3 lightColor, vec3 lightPosition) {
  // ambient color
  float ambientStrength = 0.3;
  vec3 ambientColor = ambientStrength * lightColor;

  // diffuse color – matte color
  vec3 lightDirection = normalize(lightPosition - v_position);
  float diffuseStrength = 1.0;
  float diffuseScore = max(dot(lightDirection, v_normal), 0.0);
  vec3 diffuseColor = diffuseStrength * diffuseScore * lightColor;

  // specular color - gloss
  vec3 cameraDirection = normalize(cameraPosition - v_position);
  vec3 reflectionDirection = normalize(lightDirection + cameraDirection);
  float specularStrength = 5.5;
  float shininess = 12.0;
  float specularScore = pow(max(dot(reflectionDirection, v_normal), 0.0), shininess);
  vec3 specularColor = specularStrength * specularScore * lightColor;

  return (ambientColor + diffuseColor + specularColor);
}

void main () {
  vec3 dir = reflect(v_normal, vec3(0.0, 1.0, 0.0));
  dir = reflect(dir, vec3(1.0, 0.0, 0.0));

  vec3 cameraDirection = normalize(cameraPosition - v_position);

  vec3 wind = vec3(
    mix(-2.5, 2.5, fbm(0.1 * v_position + 0.1 * time)),
    mix(-2.5, 2.5, fbm(0.2 * v_position - 0.2 * time)),
    mix(-2.5, 2.5, fbm(0.3 * v_position + 0.3 * time))
  );

  float thickness = mix(-0.5, 0.5, fbm(0.1 * v_position + wind));

  vec3 rr = refract(cameraDirection, v_normal, 0.6 + thickness);
  vec3 rg = refract(cameraDirection, v_normal, 0.7 + thickness);
  vec3 rb = refract(cameraDirection, v_normal, 0.8 + thickness);

  vec4 rSample = textureCube(cube, rr);
  vec4 gSample = textureCube(cube, rg);
  vec4 bSample = textureCube(cube, rb);

  vec4 objectColor = vec4(rSample.r, gSample.g, bSample.b, 1.0);

  vec3 light1 = addLight(
    vec3(0.1, 0.1, 1.0),
    vec3(60.0 * cos(time), 60.0 * sin(time), 60.0)
  );

  vec3 light2 = addLight(
    vec3(0.5, 0.1, 0.5),
    vec3(100.0 * cos(time), 100.0 * sin(time), 0.0)
  );

  // final color
  vec4 color = vec4(
    (light1 + light2) * objectColor.rgb
  , 1.0);

  gl_FragColor = color;
}
