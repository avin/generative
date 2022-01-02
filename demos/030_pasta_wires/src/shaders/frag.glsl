precision highp float;

uniform float iTime;
uniform vec2 iResolution;

varying vec3 vPosition;
varying vec2 vUv;

// --------- START-SHADER-TOY-CODE-HERE ------------

// Original one hosted on https://www.shadertoy.com/view/tsGSzc

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)
#define rand1(p) fract(sin(p* 78.233)* 43758.5453)

#define COUNT 22.

vec3 hsv2rgb( in vec3 c )
{
    vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );

	return c.z * mix( vec3(1.0), rgb, c.y);
}

#define MOD3 vec3(.1031,.11369,.13787)

vec3 hash33(vec3 p3)
{
	p3 = fract(p3 * MOD3);
    p3 += dot(p3, p3.yxz+19.19);
    return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
}

float simplex_noise(vec3 p)
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

void rotate(in float angle, inout vec2 uv)
{
    float ca = cos(angle);
    float sa = sin(angle);
    uv *= mat2(ca, -sa, sa, ca);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord - iResolution.xy*.5)/iResolution.y;
    rotate(.5, uv);
    float t = iTime*.75;

    float sm = (1./iResolution.y * 2.);

    vec3 res = vec3(0.);

    for(float i=0.; i<COUNT;i+=1.){
        vec2 oiuv = uv;
        vec2 iuv = uv;

        iuv.x += rand1(i+COUNT)*.5 - .25;

        iuv.x += simplex_noise(vec3(i, oiuv.y + t, rand1(i+COUNT)))*.25;

        float angle = rand1(i)*.5;
        rotate(angle, iuv);

        float perc = i/COUNT;

        float width = (perc + .5)*.015 - rand1(i+COUNT*3.)*.01;
        float ism = sm; // + (1. - perc)*.025;

    	float g = smoothstep(width + ism, width, abs(iuv.x));

        float gSh = smoothstep(width, width + ism*10., abs(iuv.x));

        res = res*clamp(gSh + .5, .0, 1.);

        vec3 lineCol = hsv2rgb(vec3(.5 + rand1(i+COUNT*2.)*.41, rand1(i)*.5+.25, 1.0)).rgb;

        res = mix(res, lineCol,  g);
    }

    // Output to screen
    fragColor = vec4(res,1.0);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

void main()
{
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
