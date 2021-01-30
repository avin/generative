## Show FPS-metr

```js
import Stats from 'stats.js'

const stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.querySelector('#debugger').appendChild(stats.dom);

//...

stats.begin();
// logic here
stats.end();
```

## Babylon: Use Inspector

```js
import '@babylonjs/core/Debug/debugLayer';
import '@babylonjs/inspector';

scene.debugLayer.show({
  globalRoot: document.querySelector('#debugger'),
});
```

## Babylon: Use 2 scenes in playground

```js
// runRenderLoop inside a setTimeout is neccesary in the Playground
// to stop the PG's runRenderLoop.
setTimeout(function () {
  engine.stopRenderLoop();
  engine.runRenderLoop(function () {
    firstScene.render();
    secondScene.render();
  });
}, 500);
```

## Babylon: Render loop

```js
const initTime = +new Date();
let prevTime = initTime;
let renderTime = 0;
scene.registerBeforeRender(() => {

  const time = (+new Date() - initTime) * 0.001;

  const deltaTime = time - prevTime;
  prevTime = time;

  const delta = Math.min(deltaTime, 1/60);
  renderTime += delta;
  
  // use renderTime in shaders

  // ......

});
```

## Ideas 

setTextureFromPostProcess
texture.refreshRate = 0

## Babylon: Thin instances and shadow

https://www.babylonjs-playground.com/#RLQ5JX#9
https://www.babylonjs-playground.com/#RLQ5JX#10
https://www.babylonjs-playground.com/#RLQ5JX#11
https://www.babylonjs-playground.com/#RLQ5JX#12

## Babylon: depthOfField
https://playground.babylonjs.com/#17DP89#78
https://playground.babylonjs.com/#199KHL#51
https://playground.babylonjs.com/#2FPT1A#445
https://playground.babylonjs.com/#4YBB22#0

## Problems

### SSAO with thin instances

https://forum.babylonjs.com/t/ssao-with-thin-instances-not-works/17153

https://playground.babylonjs.com/#N96NXC#24 (thin instances not work)
https://playground.babylonjs.com/#N96NXC#25 (instances work)
