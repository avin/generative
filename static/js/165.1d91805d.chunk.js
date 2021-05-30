(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[165],{286:function(o,n,e){"use strict";e.r(n),n.default=`#version 300 es
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

// Original one hosted on https://www.shadertoy.com/view/3tlGRr

#define SIZE 15.0
#define HPI 1.5707963
#define COL1 vec3(32, 43, 51) / 255.0
#define COL2 vec3(235, 241, 245) / 255.0

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.x;
    float hsm = 1.5 / iResolution.y * SIZE * 0.5; // Half-Smooth factor

    uv *= SIZE; // Make grid
    vec2 id = floor(uv);
    uv = fract(uv) - 0.5;

    float angle = iTime; // Prepare rotation matrix

    float phase = mod(floor(angle / HPI), 2.0); // Determine what phase is right now

    float mask = 0.0;
    for(float y =- 1.0; y <= 1.0; y++ ) { // Loop to draw neighbour cells
        for(float x =- 1.0; x <= 1.0; x++ ) {
            vec2 ruv = uv + vec2(x, y);
            vec2 rid = id + vec2(x, y);

            // Golfed Rotation https://www.shadertoy.com/view/XlsyWX
            ruv *= mat2(cos( angle + vec4(0,33,11,0)));

            vec2 maskXY = smoothstep(0.5 + hsm, 0.5 - hsm, abs(ruv));
            float maskI = maskXY.x*maskXY.y;

            vec2 idm = mod(rid, 2.0);
            float draw = abs(idm.x*idm.y + (1.-idm.x)*(1.-idm.y) - phase); // Flip depending on phase

            mask += maskI * draw;
        }
    }

    vec3 col = vec3(1.0);
    col = mix(COL1, COL2, abs(mask - phase)); // Color flip depending on phase

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
