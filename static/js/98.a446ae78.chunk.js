(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[98,163,164],{284:function(o,i,n){"use strict";n.r(i),i.default=`#version 300 es
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
`},285:function(o,i,n){"use strict";n.r(i),i.default=`#version 300 es
#ifdef GL_ES
    precision highp float;
    precision highp int;
    precision mediump sampler3D;
#define GLSLIFY 1
#endif
layout(location = 0) in vec3 position;
void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
}
`},549:function(o,i,n){"use strict";n.d(i,"a",function(){return l});const t=()=>!!document.createElement("canvas").getContext("webgl2"),l=()=>t()?"webgl2":"webgl"},72:function(o,i,n){"use strict";n.r(i);var t=n(764),l=n.n(t),r=n(765),u=n.n(r),f=n(284),c=n(285),m=n(549);const v={context:Object(m.a)(),animate:!0},d=({gl:a,update:D,render:R,pause:O})=>{const e=l()({gl:a}),s=u()(),p=e({frag:f.default,vert:c.default,uniforms:{iTime:e.prop("iTime"),iResolution:e.prop("iResolution")},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}},attributes:{position:s.positions},elements:e.elements(s.cells)});return{render({context:E,time:h,width:g,height:C}){e.poll(),p({iTime:h,iResolution:[g,C,1],iChannel0:e.texture(E)}),a.flush()}}};i.default={sketch:d,settings:v}}}]);
