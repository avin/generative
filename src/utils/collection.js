class Collection {
  constructor() {
    this.items = [];
  }

  /**
   * Add item to collection
   * @param item
   */
  add(item) {
    this.items.push(item);
  }

  /**
   * Add alias
   * @param args
   */
  append(...args) {
    this.add(...args);
  }

  /**
   * Remove item from collection
   * @param item
   */
  remove(item) {
    this.items = this.items.filter(i => i !== item);
  }

  /**
   * Remove alias
   * @param args
   */
  delete(...args) {
    this.remove(...args);
  }

  /**
   * Remove all items
   */
  clean() {
    this.items = [];
  }

  get size() {
    return this.items.length;
  }

  [Symbol.iterator]() {
    return this.items.values();
  }
}

export default Collection;
