// ----------

float ts = 0.55;
float t = .1 + iTime;
float rF1 = .5;
float mx = noise(mPos * rF1 + vec3(10.) + vec3(t, 0, 0)) * ts;
float my = noise(mPos * rF1 + vec3(1000.) + vec3(t, 0, 0)) * ts;
float mz = noise(mPos * rF1 + vec3(2000.) + vec3(t, 0, 0)) * ts;

float rF2 = .1;
float tScale = noise(mPos * rF2 + vec3(500.) + vec3(0, 0, 0))*.5 + .5;


vec3 pp = vec3(mx, my, mz);

positionUpdated += pp;

float pv = noise(pp);

float l = length(zoomPoint - mPos);
float ls = smoothstep(7.5, 10., l);

positionUpdated *= smoothstep(.7, .5, tScale) * clamp(ls, .15, 3.);
