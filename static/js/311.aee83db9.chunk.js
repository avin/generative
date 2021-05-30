(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[311],{207:function(o,n,i){"use strict";i.r(n),n.default=`#define GLSLIFY 1
uniform float iTime;
uniform vec2 iResolution;

varying vec2 vUV;

#define SIZE 500.
#define LAYERS 10.

#define SF SIZE/min(iResolution.x,iResolution.y)*1.5
#define SS(l,s) smoothstep(SF,-SF,l-s)

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)
#define rand1(p) fract(sin(p* 78.233)* 43758.5453)

mat2 rot (float a){
  float ca = cos(a);
  float sa = sin(a);
  return mat2(ca,-sa,sa,ca);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 uv = (fragCoord - .5*iResolution.xy)/iResolution.y;
  vec2 ouv = fragCoord/iResolution.xy;

  vec3 col = vec3(0.);
  for(float i=0.;i<LAYERS;i++){
    vec2 iuv = uv;
    iuv *= rot(iTime*(.5 + i*.1) );
    // iuv *= rot(1.*(.5 + i*.1) );

    vec2 guv = iuv*SIZE;
    vec2 gid = floor(guv);

    float iF = rand1(i);

    vec2 offSet = vec2(rand1(gid.x*iF + gid.y*2000.*iF), rand1(gid.y*iF + gid.x*1000.*iF))*.5 -.25;

guv = fract(guv) - .5 - offSet;

float l = length(guv);

float pSize = rand1(gid.x*iF + gid.y*7000.*iF)*.2;
float showWeight = sqrt(length(uv))*.5;
float showFactor = rand1(gid.x*100.*iF+gid.y*200.*iF) > showWeight ? 1. : 0.;
float im = smoothstep(pSize, pSize-iF, l) * showFactor;

col += fract(rand1(gid.x*iF + gid.y*200.*iF)) * im;
}

fragColor = vec4(col,1.);
}

void main()
{
  mainImage(gl_FragColor, vUV * iResolution.xy);
}
`}}]);
