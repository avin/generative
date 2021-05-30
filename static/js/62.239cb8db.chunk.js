(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[62,333,334,335,336],{228:function(M,a,e){"use strict";e.r(a),a.default=`#define GLSLIFY 1
mainImage(diffuseColor, vUv * iResolution);
`},229:function(M,a,e){"use strict";e.r(a),a.default=`#extension GL_OES_standard_derivatives : enable
#define GLSLIFY 1

varying vec2 vUv;

uniform vec2 iResolution;

#define COL1 vec3(32, 43, 51) / 255.0
#define COL2 vec3(235, 241, 245) / 255.0

float gridThickness = .1;  //.2; //.25; //.02; //.4; //

const vec3 Cfill = vec3(1., 1., .9);  // 1.,1.,1.); //1.,1.,0.); //
const vec3 Cgrid = vec3(0., 0., 0.);  // 1.,0.,1.);
const vec3 Csky = vec3(.8, .9, 1.);

// refactored out the common derivative filtering portion:
// trivial to change to any dimension.
// can ignore the axis not being striped
float filterWidth1(float u) {
  float dx = dFdx(u), dy = dFdy(u);
  return dx * dx + dy * dy + .0001;
}

float filterWidth2(vec2 uv) {
  vec2 dx = dFdx(uv), dy = dFdy(uv);
  return dot(dx, dx) + dot(dy, dy) + .0001;
}

float filterWidth3(vec3 uvw) {
  vec3 dx = dFdx(uvw), dy = dFdy(uvw);
  return dot(dx, dx) + dot(dy, dy) + .0001;
}

float gridSimple(vec2 p) {
  vec2 g = step(gridThickness, fract(gridThickness * .5 - p));
  return 1. - g.x * g.y;
}

float gridUnfiltered(vec2 p) {
  p -= .5 * gridThickness;  // center
  return step(1. - gridThickness, max(fract(p.x), fract(p.y)));
}

float gridAASimple(vec2 p, float gridThickness) {
  vec2 f = fract(p);
  float g = min(min(f.x, 1. - f.x), min(f.y, 1. - f.y)) * 2. - gridThickness, x = step(g, 0.)  // gridUnfiltered(p)
      ,
        w = fwidth(p.x) + fwidth(p.y), r = 2. * iResolution.y,
        l = r * abs(g) / (1. + 1. * r * w)  // can try different functions, divisor controls fade rate with distance
      ,
        s = sqrt(gridThickness)  // gridThickness*gridThickness //gridThickness //
      ,
        t = mix(.5, s, min(w, 1.));
  return mix(t, x, clamp(l, 0., 1.));
}
// still not happy with how it fades out too soon,
// but at least it's basically working.  Better than the others.
float gridSmooth(vec2 p, float gridThickness) {
  vec2 q = p;
  q += .5;
  q -= floor(q);
  q = (gridThickness + 1.) * .5 - abs(q - .5);
  float w = 12. * filterWidth2(p);
  float s = sqrt(gridThickness);
  return smoothstep(.5 - w * s, .5 + w, max(q.x, q.y));
}

// the half sqrt(gridThickness) bias is fairly tricky;
// honestly I shouldn't need to involve smoothstep at all here, hold on
// meh, still not working worth a dern, maybe someday
float gridSmoothLinear(vec2 p, float gridThickness) {
  vec2 q = p;
  q += .5;
  q -= floor(q);
  q = (gridThickness + 1.) * .5 - abs(q - .5);
  float w = 12. * filterWidth2(p);
  float s = gridThickness;
  return clamp((max(q.x, q.y) - .5 - w * s) / (w * (s + 1.)), 0., 1.);
}

// working better now
float gridExp(vec2 p, float gridThickness) {
  const float fadePower = 16.;
  vec2 f = fract(p);
  f = .5 - abs(.5 - f);
  float g = min(f.x, f.y);
  g = max(0., g - .5 * gridThickness);
  g = exp2(-fadePower * g);
  float s = sqrt(gridThickness);
  return mix(g, s, exp2(-.02 / filterWidth2(p)));
}

// for ilyaev
float gridPow(vec2 p, float gridThickness) {
  const float fadePower = 16.;
  vec2 f = fract(p);
  f = .5 - abs(.5 - f);
  f = max(vec2(0), 1. - f + .5 * gridThickness);
  f = pow(f, vec2(fadePower));
  float g = f.x + f.y;  // max(f.x, f.y); //
  float s = sqrt(gridThickness);
  return mix(g, s, exp2(-.01 / filterWidth2(p)));
}

// originally from https://shadertoy.com/view/WlVGDh
// this is just not the way to do grids, blurs
// the corners too much, but it sort of works:
float gridSine(vec2 p, float gridThickness) {
  p *= 3.1415927;
  float g = sin(p.x) * sin(p.y);  // grid texture
  g *= g;
  g = max(0., 1. - g);
  g = pow(g, 8. / gridThickness);
  float s = .75 * sqrt(gridThickness);           // HACK idk
  g = mix(g, s, min(1., 1. * filterWidth2(p)));  // length(fwidth(p)))); // aa
  return g;
}

// similar but with parabola - still just wrong at corners
float gridPara(vec2 p, float gridThickness) {
  vec2 q = fract(p);
  q = max(vec2(0), .5 - gridThickness * .5 - abs(.5 - q));
  q *= 1. - q;
  q = 4. * q;
  float g = 1. - q.x * q.y;
  g = pow(g, 1. / gridThickness);
  float s = sqrt(gridThickness);
  g = mix(g, s, min(1., 4. * filterWidth2(p)));  // length(fwidth(p)))); // aa
  return g;
}

// shown on right side of split screen
float ImageR(vec2 uv, float gridThickness) {
  // return gridAASimple(uv, gridThickness);
     return gridSmooth(uv, gridThickness);
  //    return gridPow(uv, gridThickness);
  //    return gridSine(uv, gridThickness);
  //    return gridExp(uv, gridThickness);
  //    return gridPara(uv, gridThickness);
  //    return gridSmoothLinear(uv, gridThickness);
  //    return gridSimple(uv, gridThickness);
  //    return gridUnfiltered(uv, gridThickness);
}

float proc(vec2 uv) {

  vec2 coord = fract(uv * 100.);

  // vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord) / 2.0;
  vec2 grid = abs(fract(coord - .55) - .45) / fwidth(coord) / 2.0;
  float line = min(grid.x, grid.y);

  line = smoothstep(.50, .10, line);

  return line;
}

#define ZOOM_FACTOR 4.
#define ZOOM_SPEED  (1.10 * .5)  // Set this to 0. or 1. or -1., for instance
#define PI          3.14159

float draw_grid(vec2 uv){
  float zoom = 100.;

  float antialias = .5 * zoom / iResolution.y;
  vec2 grid_2D = smoothstep(antialias, .0, abs(sin(PI * zoom * uv)));

  return max(grid_2D.x, grid_2D.y);
}

void mainImage(out vec3 fragColor, in vec2 fragCoord) {
  float cx = ceil(iResolution.x / 2.0);
  float cy = ceil(iResolution.y / 2.0);

  vec2 uv = fragCoord.xy / iResolution.xy;

  float f1 = ImageR(uv * 100., .06);
  float f2 = ImageR(uv * 10., .025);

  float f = max(f1, f2);

  fragColor = mix(COL1, COL2, f);
}
`},230:function(M,a,e){"use strict";e.r(a),a.default=`#define GLSLIFY 1
attribute vec2 uv;

varying vec2 vUv;
`},231:function(M,a,e){"use strict";e.r(a),a.default=`#define GLSLIFY 1
vUv = uv;
`},30:function(M,a,e){"use strict";e.r(a);var s=e(445),f=e(449),r=e(475),u=e(435),g=e(441),T=e(506),p=e(455),i=e(549),t=e(648),o=e(498),n=e(599),d=e(442),h=(O,E,x)=>new Promise((w,v)=>{var l=m=>{try{_(x.next(m))}catch(y){v(y)}},L=m=>{try{_(x.throw(m))}catch(y){v(y)}},_=m=>m.done?w(m.value):Promise.resolve(m.value).then(l,L);_((x=x.apply(O,E)).next())});const c={animate:!0,context:Object(i.a)()},P=O=>h(void 0,[O],function*({canvas:E,width:x,height:w}){const v=new s.a(E,!0,{preserveDrawingBuffer:!0,stencil:!0}),l=new f.a(v);l.clearColor=g.a.FromHexString("#182026"),new T.a("camera1",-1.1,.76,50,new r.z(0,0,0),l).attachControl(E,!0);const _=new o.a("hemiLight",new r.z(-1,1,0),l);_.diffuse=new g.a(1,1,1),_.groundColor=new g.a(.75,.75,.75),_.intensity=.25;const m=new n.a("dirLight",new r.z(-1,-2,1),l);m.position=new r.z(20,40,-20),m.intensity=3;const y=100,R=t.a.CreateGround("g",{width:y,height:y,subdivisions:y},l),D=new p.a("s",l);D.specularColor=g.a.Black(),R.material=D,D.customShaderNameResolve=(S,C,U,A,W,B,Z)=>(u.a.ShadersStore.planeVertexShader=u.a.ShadersStore.defaultVertexShader,u.a.ShadersStore.planePixelShader=u.a.ShadersStore.defaultPixelShader,C.push("iTime"),C.push("iResolution"),B.push("uv"),[["CUSTOM_FRAGMENT_UPDATE_DIFFUSE",e(228)],["CUSTOM_FRAGMENT_DEFINITIONS",e(229)],["CUSTOM_VERTEX_DEFINITIONS",e(230)],["CUSTOM_VERTEX_UPDATE_POSITION",e(231)]].forEach(([b,I])=>{b.startsWith("CUSTOM_VERTEX")&&(u.a.ShadersStore.planeVertexShader=u.a.ShadersStore.planeVertexShader.replace(`#define ${b}`,I.default)),b.startsWith("CUSTOM_FRAGMENT")&&(u.a.ShadersStore.planePixelShader=u.a.ShadersStore.planePixelShader.replace(`#define ${b}`,I.default))}),"plane");const j=+new Date;return D.onBind=()=>{const S=(+new Date-j)*.001;D.getEffect().setFloat("iTime",S),D.getEffect().setVector2("iResolution",new r.y(y,y))},{render({time:S}){l.render()},resize({pixelRatio:S,width:C,height:U}){v.resize()},unload(){v.dispose()}}});a.default={sketch:P,settings:c}},498:function(M,a,e){"use strict";e.d(a,"a",function(){return p});var s=e(434),f=e(439),r=e(436),u=e(441),g=e(453),T=e(484);g.a.AddNodeConstructor("Light_Type_3",function(i,t){return function(){return new p(i,r.e.Zero(),t)}});var p=function(i){Object(s.d)(t,i);function t(o,n,d){var h=i.call(this,o,d)||this;return h.groundColor=new u.a(0,0,0),h.direction=n||r.e.Up(),h}return t.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},t.prototype.getClassName=function(){return"HemisphericLight"},t.prototype.setDirectionToTarget=function(o){return this.direction=r.e.Normalize(o.subtract(r.e.Zero())),this.direction},t.prototype.getShadowGenerator=function(){return null},t.prototype.transferToEffect=function(o,n){var d=r.e.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",d.x,d.y,d.z,0,n),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),n),this},t.prototype.transferToNodeMaterialEffect=function(o,n){var d=r.e.Normalize(this.direction);return o.setFloat3(n,d.x,d.y,d.z),this},t.prototype.computeWorldMatrix=function(){return this._worldMatrix||(this._worldMatrix=r.a.Identity()),this._worldMatrix},t.prototype.getTypeID=function(){return T.a.LIGHTTYPEID_HEMISPHERICLIGHT},t.prototype.prepareLightSpecificDefines=function(o,n){o["HEMILIGHT"+n]=!0},Object(s.c)([Object(f.e)()],t.prototype,"groundColor",void 0),Object(s.c)([Object(f.o)()],t.prototype,"direction",void 0),t}(T.a)},537:function(M,a,e){"use strict";e.d(a,"a",function(){return T});var s=e(434),f=e(439),r=e(436),u=e(484),g=e(465),T=function(p){Object(s.d)(i,p);function i(){var t=p!==null&&p.apply(this,arguments)||this;return t._needProjectionMatrixCompute=!0,t}return i.prototype._setPosition=function(t){this._position=t},Object.defineProperty(i.prototype,"position",{get:function(){return this._position},set:function(t){this._setPosition(t)},enumerable:!1,configurable:!0}),i.prototype._setDirection=function(t){this._direction=t},Object.defineProperty(i.prototype,"direction",{get:function(){return this._direction},set:function(t){this._setDirection(t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"shadowMinZ",{get:function(){return this._shadowMinZ},set:function(t){this._shadowMinZ=t,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"shadowMaxZ",{get:function(){return this._shadowMaxZ},set:function(t){this._shadowMaxZ=t,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),i.prototype.computeTransformedInformation=function(){return this.parent&&this.parent.getWorldMatrix?(this.transformedPosition||(this.transformedPosition=r.e.Zero()),r.e.TransformCoordinatesToRef(this.position,this.parent.getWorldMatrix(),this.transformedPosition),this.direction&&(this.transformedDirection||(this.transformedDirection=r.e.Zero()),r.e.TransformNormalToRef(this.direction,this.parent.getWorldMatrix(),this.transformedDirection)),!0):!1},i.prototype.getDepthScale=function(){return 50},i.prototype.getShadowDirection=function(t){return this.transformedDirection?this.transformedDirection:this.direction},i.prototype.getAbsolutePosition=function(){return this.transformedPosition?this.transformedPosition:this.position},i.prototype.setDirectionToTarget=function(t){return this.direction=r.e.Normalize(t.subtract(this.position)),this.direction},i.prototype.getRotation=function(){this.direction.normalize();var t=r.e.Cross(this.direction,g.a.Y),o=r.e.Cross(t,this.direction);return r.e.RotationFromAxis(t,o,this.direction)},i.prototype.needCube=function(){return!1},i.prototype.needProjectionMatrixCompute=function(){return this._needProjectionMatrixCompute},i.prototype.forceProjectionMatrixCompute=function(){this._needProjectionMatrixCompute=!0},i.prototype._initCache=function(){p.prototype._initCache.call(this),this._cache.position=r.e.Zero()},i.prototype._isSynchronized=function(){return!!this._cache.position.equals(this.position)},i.prototype.computeWorldMatrix=function(t){return!t&&this.isSynchronized()?(this._currentRenderId=this.getScene().getRenderId(),this._worldMatrix):(this._updateCache(),this._cache.position.copyFrom(this.position),this._worldMatrix||(this._worldMatrix=r.a.Identity()),r.a.TranslationToRef(this.position.x,this.position.y,this.position.z,this._worldMatrix),this.parent&&this.parent.getWorldMatrix&&(this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(),this._worldMatrix),this._markSyncedWithParent()),this._worldMatrixDeterminantIsDirty=!0,this._worldMatrix)},i.prototype.getDepthMinZ=function(t){return this.shadowMinZ!==void 0?this.shadowMinZ:t.minZ},i.prototype.getDepthMaxZ=function(t){return this.shadowMaxZ!==void 0?this.shadowMaxZ:t.maxZ},i.prototype.setShadowProjectionMatrix=function(t,o,n){return this.customProjectionMatrixBuilder?this.customProjectionMatrixBuilder(o,n,t):this._setDefaultShadowProjectionMatrix(t,o,n),this},Object(s.c)([Object(f.o)()],i.prototype,"position",null),Object(s.c)([Object(f.o)()],i.prototype,"direction",null),Object(s.c)([Object(f.c)()],i.prototype,"shadowMinZ",null),Object(s.c)([Object(f.c)()],i.prototype,"shadowMaxZ",null),i}(u.a)},549:function(M,a,e){"use strict";e.d(a,"a",function(){return f});const s=()=>!!document.createElement("canvas").getContext("webgl2"),f=()=>s()?"webgl2":"webgl"},599:function(M,a,e){"use strict";e.d(a,"a",function(){return p});var s=e(434),f=e(439),r=e(436),u=e(453),g=e(484),T=e(537);u.a.AddNodeConstructor("Light_Type_1",function(i,t){return function(){return new p(i,r.e.Zero(),t)}});var p=function(i){Object(s.d)(t,i);function t(o,n,d){var h=i.call(this,o,d)||this;return h._shadowFrustumSize=0,h._shadowOrthoScale=.1,h.autoUpdateExtends=!0,h.autoCalcShadowZBounds=!1,h._orthoLeft=Number.MAX_VALUE,h._orthoRight=Number.MIN_VALUE,h._orthoTop=Number.MIN_VALUE,h._orthoBottom=Number.MAX_VALUE,h.position=n.scale(-1),h.direction=n,h}return Object.defineProperty(t.prototype,"shadowFrustumSize",{get:function(){return this._shadowFrustumSize},set:function(o){this._shadowFrustumSize=o,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"shadowOrthoScale",{get:function(){return this._shadowOrthoScale},set:function(o){this._shadowOrthoScale=o,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"orthoLeft",{get:function(){return this._orthoLeft},set:function(o){this._orthoLeft=o},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"orthoRight",{get:function(){return this._orthoRight},set:function(o){this._orthoRight=o},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"orthoTop",{get:function(){return this._orthoTop},set:function(o){this._orthoTop=o},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"orthoBottom",{get:function(){return this._orthoBottom},set:function(o){this._orthoBottom=o},enumerable:!1,configurable:!0}),t.prototype.getClassName=function(){return"DirectionalLight"},t.prototype.getTypeID=function(){return g.a.LIGHTTYPEID_DIRECTIONALLIGHT},t.prototype._setDefaultShadowProjectionMatrix=function(o,n,d){this.shadowFrustumSize>0?this._setDefaultFixedFrustumShadowProjectionMatrix(o):this._setDefaultAutoExtendShadowProjectionMatrix(o,n,d)},t.prototype._setDefaultFixedFrustumShadowProjectionMatrix=function(o){var n=this.getScene().activeCamera;!n||r.a.OrthoLHToRef(this.shadowFrustumSize,this.shadowFrustumSize,this.shadowMinZ!==void 0?this.shadowMinZ:n.minZ,this.shadowMaxZ!==void 0?this.shadowMaxZ:n.maxZ,o)},t.prototype._setDefaultAutoExtendShadowProjectionMatrix=function(o,n,d){var h=this.getScene().activeCamera;if(!!h){if(this.autoUpdateExtends||this._orthoLeft===Number.MAX_VALUE){var c=r.e.Zero();this._orthoLeft=Number.MAX_VALUE,this._orthoRight=Number.MIN_VALUE,this._orthoTop=Number.MIN_VALUE,this._orthoBottom=Number.MAX_VALUE;for(var P=Number.MAX_VALUE,O=Number.MIN_VALUE,E=0;E<d.length;E++){var x=d[E];if(!!x)for(var w=x.getBoundingInfo(),v=w.boundingBox,l=0;l<v.vectorsWorld.length;l++)r.e.TransformCoordinatesToRef(v.vectorsWorld[l],n,c),c.x<this._orthoLeft&&(this._orthoLeft=c.x),c.y<this._orthoBottom&&(this._orthoBottom=c.y),c.x>this._orthoRight&&(this._orthoRight=c.x),c.y>this._orthoTop&&(this._orthoTop=c.y),this.autoCalcShadowZBounds&&(c.z<P&&(P=c.z),c.z>O&&(O=c.z))}this.autoCalcShadowZBounds&&(this._shadowMinZ=P,this._shadowMaxZ=O)}var L=this._orthoRight-this._orthoLeft,_=this._orthoTop-this._orthoBottom;r.a.OrthoOffCenterLHToRef(this._orthoLeft-L*this.shadowOrthoScale,this._orthoRight+L*this.shadowOrthoScale,this._orthoBottom-_*this.shadowOrthoScale,this._orthoTop+_*this.shadowOrthoScale,this.shadowMinZ!==void 0?this.shadowMinZ:h.minZ,this.shadowMaxZ!==void 0?this.shadowMaxZ:h.maxZ,o)}},t.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},t.prototype.transferToEffect=function(o,n){return this.computeTransformedInformation()?(this._uniformBuffer.updateFloat4("vLightData",this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z,1,n),this):(this._uniformBuffer.updateFloat4("vLightData",this.direction.x,this.direction.y,this.direction.z,1,n),this)},t.prototype.transferToNodeMaterialEffect=function(o,n){return this.computeTransformedInformation()?(o.setFloat3(n,this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z),this):(o.setFloat3(n,this.direction.x,this.direction.y,this.direction.z),this)},t.prototype.getDepthMinZ=function(o){return 1},t.prototype.getDepthMaxZ=function(o){return 1},t.prototype.prepareLightSpecificDefines=function(o,n){o["DIRLIGHT"+n]=!0},Object(s.c)([Object(f.c)()],t.prototype,"shadowFrustumSize",null),Object(s.c)([Object(f.c)()],t.prototype,"shadowOrthoScale",null),Object(s.c)([Object(f.c)()],t.prototype,"autoUpdateExtends",void 0),Object(s.c)([Object(f.c)()],t.prototype,"autoCalcShadowZBounds",void 0),Object(s.c)([Object(f.c)("orthoLeft")],t.prototype,"_orthoLeft",void 0),Object(s.c)([Object(f.c)("orthoRight")],t.prototype,"_orthoRight",void 0),Object(s.c)([Object(f.c)("orthoTop")],t.prototype,"_orthoTop",void 0),Object(s.c)([Object(f.c)("orthoBottom")],t.prototype,"_orthoBottom",void 0),t}(T.a)}}]);
