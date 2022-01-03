precision highp float;

varying vec3 vpos;
varying float hp;
varying float hp2;
varying float hp3;

uniform vec2 iResolution;
uniform float iTime;
uniform float pSize;

uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;

uniform mat3 uvTransform;

void mainImage( out vec4 fragColor, in vec2 fragCoord){
  vec2 uv = (uvTransform * vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;

  float t = iTime*.5 + hp; // Делаем время для точки такое же как в vertexShader

  float g = length(uv);
  // float gx = clamp(.005 / smoothstep(.0, pSize, g), 0., 1.);

  // float gx = smoothstep(.5, .0, g);
  float gx = clamp(.025 / smoothstep(.0, .9, g), 0., 2.);

  // Прозрачность считаем от hp3 чтоб все точки были с разной яркостью
  fragColor = vec4(vec3(.9, .9, 1.), gx * hp3/(pSize*.2));
}

varying vec2 vUv;

void main() {
  mainImage(gl_FragColor, vUv * iResolution.xy);

  #ifdef USE_FOG
      #ifdef USE_LOGDEPTHBUF_EXT
          float depth = gl_FragDepthEXT / gl_FragCoord.w;
      #else
          float depth = gl_FragCoord.z / gl_FragCoord.w;
      #endif
      float fogFactor = smoothstep( fogNear, fogFar, depth );
      gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
  #endif
}
