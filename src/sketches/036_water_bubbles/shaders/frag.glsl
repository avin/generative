#version 300 es
#ifdef GL_ES
    precision highp float;
    precision highp int;
    precision mediump sampler3D;
#endif
#define HW_PERFORMANCE 1
uniform vec3      iResolution;
uniform float     iTime;
uniform float     iChannelTime[4];
uniform vec4      iMouse;
uniform vec4      iDate;
uniform float     iSampleRate;
uniform vec3      iChannelResolution[4];
uniform int       iFrame;
uniform float     iTimeDelta;
uniform float     iFrameRate;
struct Channel {
    vec3  resolution;
    float time;
};
uniform Channel iChannel[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;
void mainImage( out vec4 c, in vec2 f );

// --------- START-SHADER-TOY-CODE-HERE ------------

// Original one hosted on https://www.shadertoy.com/view/WtlGzS

// Force range [.1, .3]
#define FORCE .28
#define INIT_SPEED 80.
#define AMOUNT 10.
#define WATER_COL vec3(18,140,200)/255.

float rand(vec2 p)
{
    vec3 p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

float bubbles( vec2 uv, float size, float speed, float timeOfst, float blur, float time)
{
    vec2 ruv = uv*size  + .05;
    vec2 id = ceil(ruv) + speed;

    float t = (time + timeOfst)*speed;

    ruv.y -= t * (rand(vec2(id.x))*0.5+.5)*.1;
    vec2 guv = fract(ruv) - 0.5;

    ruv = ceil(ruv);
    float g = length(guv);

    float v = rand(ruv)*0.5;
    v *= step(v, clamp(FORCE, .1, .3));

    float m = smoothstep(v,v - blur, g);

    v*=.85;
    m -= smoothstep(v,v- .09, g);

    g = length(guv - vec2(v*.35, v*.35));
    float hlSize = v*.75;
    m += smoothstep(hlSize, 0., g)*.75;

    return m;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord - .5*iResolution.xy)/iResolution.y;

    float m = 0.;

    float sizeFactor = iResolution.y / 10.;

    float fstep = .1/AMOUNT;
    for(float i=-1.0; i<=0.; i+=fstep){
        vec2 iuv = uv + vec2(cos(uv.y*2. + i*20. + iTime*.5)*.1, 0.);
        float size = (i*.15+0.2) * sizeFactor + 10.;
        m += bubbles(iuv + vec2(i*.1, 0.), size, INIT_SPEED + i*5., i*10., .3 + i*.25, iTime) * abs(i);
    }

    vec3 col = WATER_COL + m*.4;

    fragColor = vec4(col,1.0);
}


// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main( void ) {
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage( color, gl_FragCoord.xy );
    color.w = 1.0;
    outColor = color;
}

// void main()
// {
//   mainImage(gl_FragColor, vUv * iResolution.xy);
// }
