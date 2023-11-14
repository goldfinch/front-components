import LazyLoad from 'vanilla-lazyload'

class LazyLoading {

  constructor() {

    this.init();

  }

  init() {

      window.lazyLoadInstance = new LazyLoad({
        // Your custom settings go here
      });
  }

  static loadElement(el) {

    lazyLoadInstance.update();

  }

}

export default LazyLoading;
