(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[194],{314:function(e,n,o){"use strict";o.r(n),n.default=`#define GLSLIFY 1
vIdx = idx;

vec3 vpos = position;

// float t = mod(iTime*.5, 1.)*2.;
float t = iTime*.5;

t+=t;

float k = .05 + noise(vec3(idx,idx+iTime*.1,0.))*.025;
float offset = 7.5;

// float lr = max(vpos.x-(maxSegments-2.) + t*1000., 1.)*.01;
float l = vpos.x*k + offset;
// l = max(5.5, l);

float maxL = maxSegments * k;

float lm = (l - offset)/maxL;
float lmn = 1.-lm;

vR = lm;

vpos.x = l;

vpos.x = l*.75 + (sin(noise(vec3(-l + 100.,idx,l)))*.5 + .5)*.125;
vpos.y = vpos.y*lmn + noise(vec3(-l + iTime,idx,l))*.125;
vpos.z = vpos.z*lmn + noise(vec3(-l + iTime,idx+meshesCount,l))*.125;

float raX = hash11((idx/meshesCount + 1.033))*360.;
float raY = hash11((idx/meshesCount + 2.071))*360.;
float raZ = hash11((idx/meshesCount + 3.85))*360.;

mat3 rot = rotMat (vec3(idx*10., idx*10., idx*10.), idx*10.);

vpos = rotAxisAngle(vpos, vec3(1.,0., 0.), raX);
vpos = rotAxisAngle(vpos, vec3(0.,1., 0.), raY);
vpos = rotAxisAngle(vpos, vec3(0.,0., 1.), raZ);

normalUpdated = rotAxisAngle(normalUpdated, vec3(1.,0., 0.), raX);
normalUpdated = rotAxisAngle(normalUpdated, vec3(0.,1., 0.), raY);
normalUpdated = rotAxisAngle(normalUpdated, vec3(0.,0., 1.), raZ);

vpos *= .05;

positionUpdated = vpos;
`}}]);
