varying vec3 oPos;
varying vec3 pPos;

varying vec2 vUv;
varying float mFactor;

uniform vec2 iResolution;
uniform float iTime;

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

void mainImage( out vec4 fragColor, in vec2 fragCoord)
{
  vec2 uv = (vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;

  vec3 col = hue(oPos.z*.01 + .1).rgb;

  fragColor = vec4(col, 1.- length(uv) + mFactor*.01);
}

void main()
{
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
