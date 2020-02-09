/* eslint-disable guard-for-in,no-restricted-syntax,no-underscore-dangle */

export function extendGui(gui) {
  gui.onChange = function onChange(f) {
    let i;
    let j;
    for (i in this.__controllers) {
      this.__controllers[i].onChange(f);
    }
    for (i in this.__folders) {
      for (j in this.__folders[i].__controllers) {
        this.__folders[i].__controllers[j].onChange(f);
      }
    }
  };
}
