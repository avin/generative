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

// Original one hosted on https://www.shadertoy.com/view/ttlfRM

#define TOTAL_LAYERS 14.0

vec4 hue(float h) {
    return clamp(abs(fract(h + vec4(3, 2, 1, 0)/3.) * 6. - 3.) -1., 0., 1.);
}

float hash12(vec2 p)
{
    vec3 p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = (fragCoord.xy) / iResolution.x + vec2(100.);

    vec3 col = vec3(0.);


    for (float layer =1.; layer <= TOTAL_LAYERS; layer++) {

        float SIZE = (17. - layer) * .5;
        vec2 luv = uv * SIZE;
        vec2 id = floor(luv);
        luv = fract(luv) - 0.5;

        for (float y =- 1.0; y <= 1.0; y++) {
            for (float x =- 1.0; x <= 1.0; x++) {
                vec2 rid = id - vec2(x, y);

                float rFactor1 = hash12(rid + 542. * layer);
                float rFactor2 = hash12(rid + 159. * layer);

                float t = iTime*5.5/(10. + layer*5./rFactor1) + 100. * rFactor2;

                vec2 ruv = luv + vec2(x, y) +
                vec2(
                sin(iTime*.1 + t + rFactor1),
                sin(iTime*.2 + t*.9 + rFactor2)
                );

                float l = length(ruv);
                float ld = length(ruv - vec2(.075));

                float SF = 1./min(iResolution.x, iResolution.y)*SIZE*(layer*2.);

                float d = smoothstep(SF, -SF, l-(.125 + hash12(rid + 700.)*.25));

                // Remove some bubbles to make breath space
                d *= step(hash12(rid*75.4 + 100.), .5 + (layer/TOTAL_LAYERS));

                // Determine bubble color factor
                float colFactor = hash12(rid + 500.);// + iTime*.1;

                vec3 iCol = hue(colFactor).rgb * d * (.7 + smoothstep(.1, .5, ld)*1.);

                col = col + iCol*(.25 + (1. - layer/TOTAL_LAYERS)*.2);

            }
        }
    }

    fragColor = vec4(col, 1.0);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main(void) {
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage(color, gl_FragCoord.xy);
    color.w = 1.0;
    outColor = color;
}
