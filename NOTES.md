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
