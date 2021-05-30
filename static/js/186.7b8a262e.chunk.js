(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[186],{308:function(e,n,a){"use strict";a.r(n),n.default=`precision highp float;
#define GLSLIFY 1

varying vec2 vUV;
varying float vIdx;
varying float vR;

uniform float meshesCount;

#define COL vec3(235, 241, 245) / 255.0

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

float hash11(float p)
{
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
}

void main(void) {
    float fractR = fract(vR);

    float h1 = hash11(vIdx*.01)*.75 + .25;
    float h2 = hash11(vIdx*.01+33.33)*.75 + .25;

    vec3 col = COL * h1;
    gl_FragColor = vec4(col, max(0.,(1.-h2-fractR)));
}
`}}]);
