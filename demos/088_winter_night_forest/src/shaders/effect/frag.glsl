uniform sampler2D tDiffuse;
uniform float amount;
uniform float angle;
uniform vec2 iResolution;
uniform float iTime;

varying vec2 vUv;

float rand(vec2 co) {
    return fract(sin(dot(co.xy , vec2(12.9898, 78.233))) * 43758.5453);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord){
//  vec2 offset = amount * vec2( cos(angle), sin(angle));
//  vec4 cr = texture2D(tDiffuse, vUv + offset);
//  vec4 cga = texture2D(tDiffuse, vUv);
//  vec4 cb = texture2D(tDiffuse, vUv - offset);
//
//  fragColor = vec4(cr.r, cga.g, cb.b, cga.a);


    vec3 tot = texture2D(tDiffuse, vUv).rgb;

    // compress
    tot = 3.8*tot/(3.0+dot(tot,vec3(0.333)));

    // vignette
    vec2 q = vUv;
    tot *= 0.5 + 0.5*pow(16.0*q.x*q.y*(1.0-q.x)*(1.0-q.y),0.15);

    // grade
    tot = tot*vec3(1.02,1.00,0.99)+vec3(0.0,0.0,0.045);

    fragColor = vec4( tot, 1.0 );


}

void main() {
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
