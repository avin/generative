float group = mod(idx, 2.);
vGroup = group;
vScaleHeight = 10.;

float t = iTime *3.;
float scale = (sin(length(offset) / (rowSize) * PI*3. + PI*group - t) *.5 + .5) * vScaleHeight;

float posFactor = step(0., position.y);

vec3 pos = vec3(position + vec3(0., .5, 0.)) *  vec3(1., scale, 1.);
vPosition = pos;

vec3 transformed = vec3(pos + offset );

