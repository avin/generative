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

// Original one hosted on https://www.shadertoy.com/view/tljSWz

#define BLACK_COL vec3(16,22,26)/255.
#define WHITE_COL vec3(235,241,245)/255.

float rand1(float p)
{
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 ouv = (fragCoord - iResolution.xy*.5)/iResolution.y;

    float angle = 3.1415926 + sin(iTime*.5)*.25;
    ouv *= mat2(cos( angle + vec4(0,33,11,0)));

    float sf = .1 + abs(ouv.y);

    float SIZE = 5. + (sin(iTime*.25)*.5 + .5)*2.5;


    float m = 0.;
    for(float n=-1.; n<=1.; n+=1.){
        vec2 uv = ouv * vec2(1., 1. + .025*n) * (2. + sin(iTime*.25)*.2);
        uv.y+=iTime*.1;

        uv = uv * SIZE;
        vec2 gid = floor(uv);
        vec2 guv = fract(uv) - .5;

        for(float y=-1.; y<=1.; y+=1.){
            for(float x=-1.; x<=1.; x+=1.){
                vec2 iuv = guv + vec2(x,y);
                vec2 iid = gid - vec2(x,y);

                float angle = rand1(iid.x*25. + iid.y * 41.)*10. +
                    (iTime * (rand1(iid.x*10. + iid.y * 60.) + 1.5));

                float ca = cos(angle);
                float sa = sin(angle);
                iuv *= mat2(ca, -sa, sa, ca);

                float size = rand1(iid.x*50. + iid.y*25.)*.2+.5;
                float weight = size*.02;

                float swp = size - weight;
                float m1 = smoothstep(abs(iuv.x), abs(iuv.x) + sf, swp)
                    * smoothstep(abs(iuv.y), abs(iuv.y) + sf, swp);

                swp = size + weight;
                float m2 = smoothstep(abs(iuv.x), abs(iuv.x) + sf, swp)
                    * smoothstep(abs(iuv.y), abs(iuv.y) + sf, swp);

                float rr = rand1(iid.x*128. + iid.y*213.);
                m1 *= rr > .075 ? 1.0 : (1.-rr*5.);

                m += clamp(m2 - m1, 0., 1.);
            }
        }
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
