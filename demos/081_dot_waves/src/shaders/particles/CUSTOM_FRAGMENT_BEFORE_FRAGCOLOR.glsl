vec2 uv = (vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;

float l = length(uv);
float depth = abs(length(vPos - cameraPosition) * .5 - 30.);
float d = sqrt(depth) * .01;
float blurFactor = renderHeight/350.;
float cl = clamp(smoothstep(.051 + d * blurFactor, .050, l), 0., 1.0);
float af = clamp(sqrt(d) * 3.0, 0., 1.);

color = vec4(vec3(cl), cl*(1. - af)*.5);
