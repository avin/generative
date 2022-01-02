#define SIZE 50.
#define COL1 vec3(32, 43, 51) / 255.0
#define COL2 vec3(235, 241, 245) / 255.0

#define SF 1. / min(iResolution.x, iResolution.y) * SIZE
#define SS(l, s) smoothstep(SF, -SF, l - s)

#define MOD3 vec3(.1031, .11369, .13787)

vec3 hash33(vec3 p3)
{
    p3 = fract(p3 * MOD3);
    p3 += dot(p3, p3.yxz + 19.19);
    return -1.0 + 2.0 * fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));
}

float snoise(vec3 p)
{
    const float K1 = 0.333333333;
    const float K2 = 0.166666667;

    vec3 i = floor(p + (p.x + p.y + p.z) * K1);
    vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);

    vec3 e = step(vec3(0.0), d0 - d0.yzx);
    vec3 i1 = e * (1.0 - e.zxy);
    vec3 i2 = 1.0 - e.zxy * (1.0 - e);

    vec3 d1 = d0 - (i1 - 1.0 * K2);
    vec3 d2 = d0 - (i2 - 2.0 * K2);
    vec3 d3 = d0 - (1.0 - 3.0 * K2);

    vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
    vec4 n = h * h * h * h * vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));

    return dot(vec4(31.316), n);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.x;

    uv.y = uv.y * SIZE;
    float yid = floor(uv.y);
    uv.y = fract(uv.y) - .5;

    float mask = 0.;

    for (float ofs = -1.; ofs <= 1.; ofs += 1.) {
        vec2 iuv = uv + vec2(0., ofs);

        float iid = yid - ofs;

        float fx = snoise(vec3(uv.x * 10. + iid * 100., iid, iTime));
        float fx2 = snoise(vec3(uv.x * 10. + (iid - 1.) * 100., (iid - 1.), iTime));

        float m = SS(abs(iuv.y + fx), .35);
        mask = max(mask, m * (fx2 + iuv.y + .5));
    }

    mask = smoothstep(0., 1., mask * .75);

    vec3 col = mix(COL1, COL2, mask);

    fragColor = vec4(col, 1.0);
}
