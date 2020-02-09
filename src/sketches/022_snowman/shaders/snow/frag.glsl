precision highp float;

varying vec3 vpos;
varying float hp;
varying float hp2;
varying float hp3;

uniform vec2 iResolution;
uniform float iTime;
uniform float pSize;

uniform mat3 uvTransform;

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

void mainImage( out vec4 fragColor, in vec2 fragCoord){
  vec2 uv = (uvTransform * vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;

  float t = iTime*.5 + hp; // Делаем время для точки такое же как в vertexShader

  float l = length(uv);
  float g = l * pSize/2.;
  float gx = clamp(.05 / smoothstep(.0, pSize, g), 0., 1.0);
  float lim = smoothstep(.5, .3, l);

  // Прозрачность считаем от hp3 чтоб все точки были с разной яркостью
  fragColor = vec4(hue(hp3*.75 + iTime*hp2).rgb, hp3/(pSize*.25)*gx / g * lim);
}

varying vec2 vUv;

void main() {
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
