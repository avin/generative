#pragma glslify: noise = require('glsl-noise/simplex/3d')

varying vec2 vUv;
varying vec3 vpos;
varying float hp;
varying float hp2;
varying float hp3;

uniform float iTime;
uniform float pSize;

float hash(vec3 p)// replace this by something better
{
  p  = fract(p*0.3183099+.1);
  p *= 17.0;
  return fract(p.x*p.y*p.z*(p.x+p.y+p.z));
}

void main() {
  vUv = uv;

  hp = hash(position); // Рандомный фактор для точки по позиции
  hp2 = hash(position*3.3); // Дополнительный рандомный фактор
  hp3 = hash(position*6.6); // Еще один рандомный фактор

  float t = iTime*.5 + hp; // Замедляем время и прибавляем рандомный фактор - у этой точки будет "своё" время

  vpos = position;

  // индивидульный рандомнеый vec3 для точки для определения движения точки
  vec3 npp = vec3(hash(position), hash(position*10.), hash(position*20.))*2.;

  // Фактор смещения через симплексный шум
  float nF = noise((npp + vec3(iTime*.525)) * 1.) * (.25 + fract(t))*.5;

  // фактор движения - определяем только часть точек которые будут летать
  float mF = step(hp2, .3);

  // Дивгаем точки (те которые попали в mF, остальные на месте)
  vpos.xyz = vpos.xyz + (vpos.xyz * fract(t)*2. ) * mF;

  // Добавляем к отлетающей точке фактор плавающего смещения
  vpos.xyz += nF * mF;

  gl_PointSize = pSize;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( vpos, 1.0 );
}
