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
void mainImage(out vec4 c, in vec2 f);

// --------- START-SHADER-TOY-CODE-HERE ------------

// Original one hosted on https://www.shadertoy.com/view/7tcSRS

#define hue(v)  ( .6 + .6 * cos( 6.3*(v)  + vec4(0,23,21,0)  ) )

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.x;

    float t = iTime*5.;

    vec3 rd = vec3(0.);

    for(float i=0.; i< 30.;i+=.8){

        float tt = t + sqrt(100. - i)*2.0;
        vec2 m = vec2(cos(tt), sin(2. * tt) / 3.5)*.3;

        float ift = i*.0015;
        float d = smoothstep(.06 - ift, .00 - ift,  length(uv + m));

        rd = rd + d * hue(-tt*.33).rgb;
    }


    fragColor = vec4(vec3(rd), 1.);
}


// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main(void) {
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage(color, gl_FragCoord.xy);
    color.w = 1.0;
    outColor = color;
}
