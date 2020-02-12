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

// Original one hosted on https://www.shadertoy.com/view/WljGWh

#define STEPS 25.

float rand(vec2 p)
{
    vec3 p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord - iResolution.xy*.5)/iResolution.y;

    float t = iTime;
    float col = 0.;
    float sStep = 1./STEPS;
    float zoomF =  sin(t*.5)*.5+.5;

    for(float i = 1.; i>0.01; i-=sStep){
        float isf = t*.1;
        vec2 iuv = uv * (1. + i * .5) + vec2(cos(isf), sin(isf))*2.;

        isf = i*STEPS*.5 - t*5.;
        vec2 guv = iuv * (3. + zoomF) + vec2(sin(isf), cos(isf))*.05;
        guv = fract(guv) - .5;

        float v = abs(i*.5 - length(guv));
        float mi = smoothstep(.005, .0, v);

        if(mi > 0.){
        	col = max(col, 1. - i);
        }
    }

    // col += texture(iChannel0, uv).rgb*.01;

    fragColor = vec4(col);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main( void ) {
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage( color, gl_FragCoord.xy );
    color.w = 1.0;
    outColor = color;
}
