import lozad from 'lozad';

class LazyLoading {
  constructor() {
    this.init();
  }

  init() {
    // window.addEventListener('load', function() {

    const observer = lozad('[data-loaded]', {
      loaded(el) {
        if (el.parentElement)
          el.parentElement.setAttribute('data-children-loaded', true);
        if (el.parentElement.parentElement)
          el.parentElement.parentElement.setAttribute(
            'data-children-loaded',
            true,
          );
        if (el && el.hasAttribute('data-loaded-interact'))
          el.setAttribute('data-loaded-interact', true); // el.style.backgroundImage = null;
      },
    });
    observer.observe();

    const preLoadedElements = document.querySelector('[data-loaded-interact]');

    if (preLoadedElements) {
      // preLoadedElements.style.backgroundImage = 'url('+preLoadedElements.getAttribute('data-poster')+')';

      [
        'touchstart',
        'touchmove',
        'scroll',
        'mousemove',
        'mousedown',
        'ontouchstart',
      ].map((event) => {
        window.addEventListener(
          event,
          (e) => {
            if (!preLoadedElements.getAttribute('data-loaded-interact')) {
              observer.triggerLoad(preLoadedElements);
            }
          },
          false,
        );
      });
    }

    // });
  }

  static loadElement(el) {
    const loadmore = document.querySelectorAll('[data-loaded="false"]');

    if (loadmore) {
      const observer = lozad(loadmore);
      observer.observe();
    }
  }
}

export default LazyLoading;
