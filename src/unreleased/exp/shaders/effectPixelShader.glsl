uniform sampler2D sameTexture;
uniform float iTime;
uniform vec2 iResolution;
uniform int iFrame;
varying vec2 vUV;


//-------------------------------------

#define SIZE 50.
#define LAYERS 5.

#define SF SIZE/min(iResolution.x,iResolution.y)*1.5
#define SS(l,s) smoothstep(SF,-SF,l-s)

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)
#define rand1(p) fract(sin(p* 78.233)* 43758.5453)

mat2 rot (float a){
	float ca = cos(a);
    float sa = sin(a);
    return mat2(ca,-sa,sa,ca);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord - .5*iResolution.xy)/iResolution.y;
    vec2 ouv = fragCoord/iResolution.xy;


    float m = 0.;
    vec3 col = vec3(1.);
    for(float i=0.;i<LAYERS;i++){
        vec2 iuv = uv;
    	iuv *= rot(iTime*(.2 + i*.04) );

        vec2 guv = iuv*SIZE;
        vec2 gid = floor(guv);

        float iF = rand1(i);

        vec2 offSet = vec2(rand1(gid.x*iF + gid.y*2000.*iF), rand1(gid.y*iF + gid.x*1000.*iF))*.5 -.25;

        guv = fract(guv) - .5 - offSet;

        float l = length(guv);

        float pSize = rand1(gid.x*iF + gid.y*7000.*iF)*.05 + .05;
        float showWeight = sqrt(length(uv))*.5;
        float showFactor = rand1(gid.x*100.*iF+gid.y*200.*iF) > showWeight ? 1. : 0.;
        float im = smoothstep(pSize, pSize-SF, l) * showFactor;

        if(im > 0.){
        	col = hue(rand1(gid.x*iF + gid.y*2000.*iF)).rgb;
        }

        m += im;
    }
    m = min(m, 1.);

    vec3 backCol = texture(sameTexture, ouv).rgb*.995;

    col = mix(backCol, col, m);
    fragColor = vec4(col,1.0);
}

//-------------------------------------

void main()
{
    mainImage(gl_FragColor, vUV * iResolution);
}
