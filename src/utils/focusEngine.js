const TAB_KEY_CODE = 9;

class FocusEngine {
  isRunning = false;

  container = null;

  className = null;

  constructor(container, className) {
    this.container = container;
    this.className = className;
  }

  isActive() {
    return this.isRunning;
  }

  start() {
    this.container.addEventListener('mousedown', this.handleMouseDown);
    this.isRunning = true;
  }

  stop() {
    this.reset();
    this.isRunning = false;
  }

  reset() {
    this.container.classList.remove(this.className);
    this.container.removeEventListener('keydown', this.handleKeyDown);
    this.container.removeEventListener('mousedown', this.handleMouseDown);
  }

  handleKeyDown = e => {
    if (e.which === TAB_KEY_CODE) {
      this.reset();
      this.container.addEventListener('mousedown', this.handleMouseDown);
    }
  };

  handleMouseDown = () => {
    this.reset();
    this.container.classList.add(this.className);
    this.container.addEventListener('keydown', this.handleKeyDown);
  };
}

export default FocusEngine;
