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

// Original one hosted on https://www.shadertoy.com/view/wtj3RG

#define RADIUS .475
#define ISTEP .015

#define SF 2./min(iResolution.x,iResolution.y)
#define RADIUS_EXP2 RADIUS*RADIUS

#define BLACK_COL vec3(16,22,27)/255.
#define WHITE_COL vec3(245,248,250)/255.

mat2 rot (float a){
	float ca = cos(a);
    float sa = sin(a);
    return mat2(ca,-sa,sa,ca);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord - .5*iResolution.xy)/iResolution.y;

    uv *= vec2(1.3333, 1.);  // /(.75,1.)

    float m = 0.;
    for(float i = -RADIUS+fract(iTime*.25)*ISTEP; i<RADIUS; i+=ISTEP){

        vec2 iuv = uv - vec2(i, 0.);
        iuv *= rot(iTime*2. - i*10.);

        float l = length(iuv);
        float r = sqrt(RADIUS_EXP2 - i*i);

        m += smoothstep(SF, .0, abs(r-l)) * smoothstep(.0, .075, iuv.y);
    }

    vec3 col = mix(BLACK_COL, WHITE_COL, m);

    fragColor = vec4(col, 1.);
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
