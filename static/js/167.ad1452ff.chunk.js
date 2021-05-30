(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[167],{288:function(o,n,e){"use strict";e.r(n),n.default=`#version 300 es
#ifdef GL_ES
    precision highp float;
    precision highp int;
    precision mediump sampler3D;
#define GLSLIFY 1
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

// Original one hosted on https://www.shadertoy.com/view/WtdXWS

#define SIZE 10.0
#define COL1 vec3(32, 43, 51) / 255.0
#define COL2 vec3(235, 241, 245) / 255.0

#define SF 1./min(iResolution.x,iResolution.y)*SIZE*.5
#define SS(l,s) smoothstep(SF,-SF,l-s)

#define MOD3 vec3(.1031,.11369,.13787)

float hash12(vec2 p)
{
    vec3 p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

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

void mainImage(out vec4 fragColor, in vec2 fragCoord)
 {
    vec2 uv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.x;
    float hsm = 1.5 / iResolution.y * SIZE * 0.5; // Half-Smooth factor

    uv *= SIZE;
    vec2 id = floor(uv);
    uv = fract(uv) - 0.5;

    float mask = 0.0;
    for(float y =- 1.0; y <= 1.0; y++ ) {
        for(float x =- 1.0; x <= 1.0; x++ ) {
            vec2 rid = id - vec2(x, y);
            vec2 ruv = uv + vec2(x, y) +
                vec2(0, mod(rid, 2.)*.5) +
                vec2(0, sin(simplex_noise(vec3(rid*0.5, iTime))*5.)*.1);

            float l = length(ruv);
            float s = SIZE/500.;

            float d = SS(l, .65) * (ruv.y+.5);

            mask = max(mask, d);
        }
    }

    vec3 col = vec3(1.0);
    col = mix(COL1, COL2, abs(mask));

    fragColor = vec4(col, 1.0);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main( void ) {
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage( color, gl_FragCoord.xy );
    color.w = 1.0;
    outColor = color;
}
`}}]);
