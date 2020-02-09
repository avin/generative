varying vec3 vpos;
varying float size;

uniform vec2 iResolution;
uniform float iTime;

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

void mainImage( out vec4 fragColor, in vec2 fragCoord){
  vec2 uv = (vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;

  float alpha = .01/smoothstep(.0, 5., length(uv)*5.);

  float g = length(uv);
  float gcl = 1. - length(uv)/size;

  float t = iTime*.2;
  fragColor = vec4(hue(fract(length(vpos)*size*.25 + t)).rgb, alpha);
}

varying vec2 vUv;

void main() {
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
