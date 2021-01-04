## Babylon: Use Inspector

```js
import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";

scene.debugLayer.show({
  globalRoot: document.querySelector('#debugger')
});

```


## Babylon: Use 2 scenes in playground

```js
// runRenderLoop inside a setTimeout is neccesary in the Playground
// to stop the PG's runRenderLoop.
setTimeout(function() {
  engine.stopRenderLoop();
  engine.runRenderLoop(function () {
    firstScene.render();
    secondScene.render();
  });
}, 500);
```

## Babylon: Thin instances and shadow

https://www.babylonjs-playground.com/#RLQ5JX#9
https://www.babylonjs-playground.com/#RLQ5JX#10
https://www.babylonjs-playground.com/#RLQ5JX#11
https://www.babylonjs-playground.com/#RLQ5JX#12

## Problems

### SSAO with thin instances
https://forum.babylonjs.com/t/ssao-with-thin-instances-not-works/17153

https://playground.babylonjs.com/#N96NXC#24 (thin instances not work)
https://playground.babylonjs.com/#N96NXC#25 (instances work)
