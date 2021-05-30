(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[323],{221:function(i,n,o){"use strict";o.r(n),n.default=`#define GLSLIFY 1
uniform float iTime;
uniform vec2 iResolution;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;
uniform int iFrame;

varying vec3 vPosition;
varying vec2 vUV;

// --------- START-SHADER-TOY-CODE-HERE ------------

#define COL1 vec3(24, 32, 38) / 255.0
#define COL2 vec3(235, 241, 245) / 255.0

#define SF 2./min(iResolution.x, iResolution.y)
#define SS(l, s) smoothstep(SF, -SF, l - s)

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = (fragCoord - iResolution.xy * .5) / iResolution.y;
    vec2 ouv = fragCoord/iResolution.xy;

    float m = 0.;

    vec3 backCol = texture(iChannel1, ouv).xyz;
    vec3 col = backCol*.99;

    for (float i = 0.; i < float(COUNT); i += 1.) {
        vec4 point = FD(i, 0);
        vec4 colData = FD(i, 1);

        float pointColFactor = colData.x;

        vec2 pos = point.xy;

        float d = length(uv - pos);
        float g = SS(d, RADIUS);

        if(g > 0.){

        }
        col = mix(col, hue(pointColFactor).rgb, g);
    }

    fragColor = vec4(col, 1.0);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

void main() { mainImage(gl_FragColor, vUV * iResolution.xy); }
`}}]);
