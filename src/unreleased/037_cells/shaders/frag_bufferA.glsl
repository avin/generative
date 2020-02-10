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

// void main()
// {
//   mainImage(gl_FragColor, vUv * iResolution.xy);
// }
