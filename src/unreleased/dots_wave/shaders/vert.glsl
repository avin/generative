varying vec2 vUv;
varying vec3 vpos;
varying float size;

uniform float iTime;
uniform float pSize;

float hash12(vec2 p)
{
  vec3 p3  = fract(vec3(p.xyx) * .1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main()
{
    vUv = uv;
    float t = iTime*1.0;

    vpos = position;

    // vpos.x += hash12(position.xy * 100.)*.05 - .025;
    // vpos.y += hash12(position.xy * 200.)*.05 - .025;

    float vv = (position.y + position.x)*2. + sin(t)*7.;

    vv = (smoothstep(-3.0, 3.0, vv)) * 3.1415*.5;
    vv =  sin(vv) * cos(vv);

    vv *= .5;
    vpos.xy += vv;

    size = pSize;
    gl_PointSize = pSize;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vpos, 1.0);
}
