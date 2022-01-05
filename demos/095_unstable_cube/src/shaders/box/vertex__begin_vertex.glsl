float t = iTime * .5;
float scale = min(max(sin(offset.x*.125 + offset.y*.125 - offset.z*.125 + iTime*1.5)*.85 + .85, 0.5), 1.);

vScale = scale;

vec3 transformed = vec3( position * (scale) + offset );
