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

#define SF 2./min(iResolution.x, iResolution.y)
#define SS(l, s) smoothstep(SF, -SF, l - s)

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord - iResolution.xy * .5) / iResolution.y;
    vec2 ouv = fragCoord/iResolution.xy;

    vec3 col = texture(iChannel1, ouv).xyz;

    for (float i = 0.; i < float(COUNT); i += 1.) {
        vec4 point = FD(i, 0);

        vec2 pos = point.xy;

        float d = length(uv - pos)*1.5;
        float g = SS(d, RADIUS);

        col = mix(col, vec3(1.).rgb, g*.5);
    }

    fragColor = texture(iChannel0, ouv);
    fragColor = vec4(col, 0.);

}

// --------- END-SHADER-TOY-CODE-HERE ------------

void main() { mainImage(gl_FragColor, vUV * iResolution.xy); }
