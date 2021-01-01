vIdx = idx;

vec3 vpos = position;

// float t = mod(iTime*.5, 1.)*2.;
float t = iTime*.5;

t+=t;

float k = .1 + noise(vec3(idx,idx+iTime*.1,0.))*.025;

// float lr = max(vpos.x-(maxSegments-2.) + t*1000., 1.)*.01;
float l = vpos.x*k*.9;
// l = max(5.5, l);

float maxL = maxSegments * k;

float lm = l/maxL;
float lmn = 1.-lm;

vR = lm;

vpos.x = l;

vpos.x = l + (sin(noise(vec3(-l + 100.,idx,l)))*.5 + .5)*.25;
vpos.y = vpos.y*lmn + noise(vec3(-l + iTime,idx,l))*.25;
vpos.z = vpos.z*lmn + noise(vec3(-l + iTime,idx+meshesCount,l))*.25;

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
