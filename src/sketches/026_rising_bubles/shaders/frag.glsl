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

// Original one hosted on https://www.shadertoy.com/view/tdVGR1

float rand(vec2 p)
{
    vec3 p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 ouv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.x;

    float fCol = 0.;
    float t = iTime * 0.25;

    float total = 7.;
    for(float i=1.; i<total; i+=1.){
        float iTotal = i/total;
        float niTotal = 1. - i/total;

        vec2 uv = ouv * (10. + i*1.) - vec2(0., t*(1.-i/total));
        vec2 id = floor(uv) + vec2(i*1000.);
        uv = fract(uv) - 0.5;

        for(float y=-1.; y<=1.; y+=1.){
            for(float x=-1.; x<=1.; x+=1.){

                vec2 iuv = uv + vec2(x,y);
                vec2 iid = id - vec2(x,y);

                if(rand(iid * 200.) > .25){
                    iuv.x += rand(iid)-.5;
                    iuv.y += rand(vec2(rand(iid)))-.5;

                    float l = length(iuv * (niTotal)*1.5);
                    float size = rand(iid*5.)*.1 + .25 - .1;
                    float force = rand(iid*10.)*.5+.5;
                    fCol +=
                        smoothstep(l, l + (iTotal)*.25, size) *
                        niTotal *
                        force;
                }
            }
        }
    }

    fragColor = vec4(fCol);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main( void ) {
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage( color, gl_FragCoord.xy );
    color.w = 1.0;
    outColor = color;
}

