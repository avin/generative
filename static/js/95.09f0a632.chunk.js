(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[95,120,121],{241:function(a,s,o){"use strict";o.r(s),s.default=`#define GLSLIFY 1
#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)
#define rand1(p) fract(sin(p* 78.233)* 43758.5453)

varying vec3 vpos;
varying float vtime;
uniform mat3 uvTransform;

void main() {
    vec2 uv = (uvTransform * vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;

    float g = length(uv);

    g = .001 / smoothstep(.0, 20., g);

    gl_FragColor = vec4(vec3(g), g*.0125);
}
`},242:function(a,s,o){"use strict";o.r(s),s.default=`#define GLSLIFY 1
varying vec3 vpos;
varying float vtime;

uniform float time;

//	Simplex 3D Noise
//	by Ian McEwan, Ashima Arts
//
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    //  x0 = x0 - 0. + 0.0 * C
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    // Permutations
    i = mod(i, 289.0 );
    vec4 p = permute( permute( permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    // Gradients
    // ( N*N points uniformly over a square, mapped onto an octahedron.)
    float n_ = 1.0/7.0; // N=7
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    //Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
    dot(p2,x2), dot(p3,x3) ) );
}

void main() {
    vpos = position;
    vtime = time;
    vec3 newPos = position;

    newPos.x += sin(time + position.x * position.y)*.5;
    newPos.y += cos(time + position.x * position.y * 1.1)*.5;
    newPos.z += cos(time + position.x * position.y * 1.3)*.5;

    gl_PointSize = 50. + snoise(position*.05 + vec3(0, 0, vtime*.1))*50.;
    gl_PointSize *= .5;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
}
`},51:function(a,s,o){"use strict";o.r(s),function(v){var d=o(549),g=o(241),h=o(242);const e=o(777);v.THREE=e,o(778);const t=o(814),z={animate:!0,context:"webgl"},w=({context:p})=>{const r=new e.WebGLRenderer({canvas:p.canvas});r.setClearColor("hsl(200, 40%, 10%)",1);const i=new e.PerspectiveCamera(40,10,.91,1e3);i.position.set(100,100,100),i.lookAt(new e.Vector3(110,110,110));const x=new e.OrbitControls(i,p.canvas);x.target=new e.Vector3(0,25,0);const c=new e.Scene,P=new e.GridHelper(100,20);c.add(P);const C=new e.HemisphereLight(16777215,0,1);c.add(C),t.positions.forEach(n=>{n[0]*=5,n[1]*=5,n[2]*=5});const l=new e.Geometry;t.positions.forEach(n=>{l.vertices.push(new e.Vector3(n[0],n[1],n[2]))}),t.cells.forEach(n=>{l.vertices.push(new e.Vector3((t.positions[n[0]][0]+t.positions[n[1]][0]+t.positions[n[2]][0])/3,(t.positions[n[0]][1]+t.positions[n[1]][1]+t.positions[n[2]][1])/3,(t.positions[n[0]][2]+t.positions[n[1]][2]+t.positions[n[2]][2])/3))});const E=e.ShaderLib.points,m=e.UniformsUtils.clone(E.uniforms);m.time={value:0};const y=new e.ShaderMaterial({uniforms:m,transparent:!0,depthWrite:!1,blending:e.AdditiveBlending,vertexShader:h.default,fragmentShader:g.default}),b=new e.Points(l,y);return c.add(b),{resize({pixelRatio:n,viewportWidth:u,viewportHeight:f}){r.setPixelRatio(n),r.setSize(u,f,!1),i.aspect=u/f,i.updateProjectionMatrix()},render({time:n}){y.uniforms.time.value=n*10,x.update(),r.render(c,i)},unload(){x.dispose(),r.dispose()}}};s.default={sketch:w,settings:z}}.call(this,o(15))},549:function(a,s,o){"use strict";o.d(s,"a",function(){return d});const v=()=>!!document.createElement("canvas").getContext("webgl2"),d=()=>v()?"webgl2":"webgl"}}]);
