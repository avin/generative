(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[97,159,160],{280:function(o,e,n){"use strict";n.r(e),e.default=`#version 300 es
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

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

vec2 rand( vec2 p ) {
    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 ouv = fragCoord/iResolution.xy;
    vec2 uv = (fragCoord - iResolution.xy*.5)/iResolution.y;
    vec2 luv = uv;

    uv *= 10. + sin(iTime*.5)*3.;

    vec2 iuv = floor(uv);
    vec2 guv = fract(uv);

    float mDist = 1.0;

    vec3 col = vec3(0.);

    for (float y= -1.; y <= 1.; y++) {
        for (float x= -1.; x <= 1.; x++) {
            vec2 neighbor = vec2(x, y);
            vec2 point = rand(iuv + neighbor);
            point = 0.5 + 0.5*sin(iTime*2. + 6.2831*point);
            vec2 diff = neighbor + point - guv;
            float dist = length(diff);

            mDist = min(mDist, dist);
        }
    }

    float l = length(luv);
    col = hue(fract(mDist*.95 + iTime*.1 + l)).rgb;

    // fragColor = vec4(col,1.0)*.05 + texture(iChannel0, ouv)*.95;
    fragColor = vec4(col,1.0)*.05 + texture(iChannel0, ouv)*.95;
}

// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main( void ) {
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage( color, gl_FragCoord.xy );
    color.w = 1.0;
    outColor = color;
}
`},281:function(o,e,n){"use strict";n.r(e),e.default=`#version 300 es
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
`},549:function(o,e,n){"use strict";n.d(e,"a",function(){return r});const t=()=>!!document.createElement("canvas").getContext("webgl2"),r=()=>t()?"webgl2":"webgl"},70:function(o,e,n){"use strict";n.r(e);var t=n(764),r=n.n(t),s=n(765),c=n.n(s),f=n(280),m=n(281),v=n(549);const d={context:Object(v.a)(),animate:!0},h=({gl:l,update:R,render:T,pause:O})=>{const i=r()({gl:l}),a=c()(),u=i.texture({copy:!0,min:"linear",mag:"linear"}),g=i({frag:f.default,vert:m.default,uniforms:{iTime:i.prop("iTime"),iResolution:i.prop("iResolution"),iChannel0:u},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}},attributes:{position:a.positions},elements:i.elements(a.cells)});return{render({context:p,time:E,width:C,height:D}){i.poll(),g({iTime:E,iResolution:[C,D,1],iChannel0:i.texture(p)}),u({copy:!0,min:"linear",mag:"linear"}),l.flush()}}};e.default={sketch:h,settings:d}}}]);
