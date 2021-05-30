(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[176],{299:function(s,n,e){"use strict";e.r(n),n.default=`#define GLSLIFY 1
#define PI 3.1415926
#define PI_2 1.5707963
#define PI_4 0.78539815

float roundedRect(vec2 p, float size ){
  float mask =
  smoothstep(size, size-.1, abs(p.x)) *
  smoothstep(size, size-.1, abs(p.y));

  return smoothstep(.45, .5, mask);
}

float roundedCross(vec2 p, float size ){
  vec2 rp = p;
  float result = 0.;

  for(float i= -1.; i<=1.; i+=2.){
    vec2 rp = p;
    rp *= mat2(cos( sin(PI_2 * i*sin(iTime)) + vec4(0,33,11,0)));

    float mask =
    smoothstep(size*2., size*2.0-.05, abs(rp.x))  *
    smoothstep(size, size-.05, abs(rp.y));

    result += smoothstep(.40, .5, mask);
  }

  return result;
}

float evilEye(vec2 p, float dir){
  float result = 0.;
  float l = length(p);
  result += smoothstep(.05, .045, l);

  result -= smoothstep(0.01, 0.02, p.x*dir+p.y*2.);

  return clamp(result, 0., 1.);
}

float mouth(vec2 p, float size){
  float l = length(p);
  float mask = smoothstep(.1*size,.1*size - .005, l);
  p.y -=0.05*size;
  p.x *= .6;
  l = length(p);
  mask -= smoothstep(.09, .085, l);

  return clamp(mask, 0., 1.);
}

float smile(vec2 p){
  float result = 0.;

  //Mouth
  vec2 mP = p;
  mP.y += .03;
  float mask = mouth(mP,1.15) - mouth(mP,1.0);

  result += clamp(mask, 0., 1.);

  //Teeth
  vec2 zP = p;
  zP.y += .1 + sin(zP.x*300.)*(.02 - abs(zP.x*.11)) - abs(zP.x*.3);
  result += smoothstep(0.01, 0.001, abs(zP.y)) * step(abs(zP.x), .09);

  return result;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 ouv = fragCoord/iResolution.xy;
  vec2 uv = (fragCoord - iResolution.xy*.5)/iResolution.y;

  uv *= (sin(iTime *0.33)*.5+.5)*.2 + 0.8;

  float mask = 0.;

  for(float i= -1.; i<=1.; i+=2.){
    vec2 ruv = uv + vec2(.30,0.) * i;

    ruv.y +=sin(iTime)*.02*i;
    ruv *= mat2(cos( (sin(iTime+i*1.5))*.1 + vec4(0,33,11,0)));

    mask += roundedRect(ruv, .25);
    mask -= roundedRect(ruv*1.25, .25);

    for(float i= -1.; i<=1.; i+=2.){
      vec2 euv = ruv;
      euv.x += .08*i;
      euv.y -= .05;
      mask += evilEye(euv, i);
    }

    mask += smile(ruv);
  }

  mask += roundedCross(uv, .05);

  vec3 back = texture(iChannel0, ouv).rgb + .8;
  vec3 col = mix(back, vec3(0.), mask);

  fragColor = vec4(col,1.0);
}
`}}]);
