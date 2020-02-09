precision highp float;

varying vec3 vpos;
varying float hp;
varying float hp2;
varying float hp3;

uniform vec2 iResolution;
uniform float iTime;
uniform float pSize;

uniform mat3 uvTransform;

void mainImage( out vec4 fragColor, in vec2 fragCoord){
  vec2 uv = (uvTransform * vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;

  float t = iTime*.5 + hp; // Делаем время для точки такое же как в vertexShader

  float g = length(uv) * pSize;
  float gx = .05 / smoothstep(.0, pSize, g);

  float tr = step(.3, hp2);
  if(tr == 0.){
    // Для отрывающихся точке будем делать затухание
    tr = 1. - fract(t);
  }

  // Прозрачность считаем от hp3 чтоб все точки были с разной яркостью
  fragColor = vec4(vec3(gx) / g, hp3 * tr);
}


varying vec2 vUv;

void main() {
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
