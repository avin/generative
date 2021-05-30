(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[214],{332:function(t,n,i){"use strict";i.r(n),n.default=`#define GLSLIFY 1
float t = 100. + iTime * 0.125;
// float t = 10.;

vUv = uv;
vR = position.y;

// float l = length(position.xz)*5.;

//float pfX = sin(noise(vec3(vR*.025 + t, position.x*.05, 10.))) * 20.0;
//float pfY = 0.;
//float pfZ = sin(noise(vec3(vR*.025 + t-pfX*.1, position.z*.05+pfX*.1, 80.))) * 20.0;
//
//positionUpdated.x += pfX;
//positionUpdated.y += pfY;
//positionUpdated.z += pfZ;
//
//positionUpdated.xz *= (noise(vec3(vR*.05 + t, 0, 100.))*.5 + 1.0) * 1.0;

float lf = (sin(positionUpdated.y)*.5+.5)*.5 + .5;
positionUpdated.xz *= lf;

float l = length(position.xy + t*10.);
float nf1 = noise(vec3(vR*.5 + t, 0, 100.)) * 1.0;
float yf = sin(l + lf*5.)*nf1;
positionUpdated.y += yf;

positionUpdated.x += sin(vR*0.1 + idx*PI)*8.;
positionUpdated.z += cos(vR*0.1 + idx*PI)*8.;

positionUpdated.y -= idx*3.0;
`}}]);
