import $ from 'jquery';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

class Photoswipe {
  constructor() {

    // .. updatesSwipe

  }

  // updatesSwipe() {

  //   let el = '[data-ps="updates"]';

  //   if ($(el).length) {

  //     const lightbox = new PhotoSwipeLightbox({
  //       gallery: el,
  //       children: 'a',

  //       showHideAnimationType: 'zoom',
  //       showAnimationDuration: 1000,
  //       hideAnimationDuration: 1000,

  //       pswpModule: () => import('photoswipe')
  //     });

  //     this.lightboxCubicAnimation(lightbox).init();

  //   }

  // }

  lightboxCubicAnimation(lightbox) {
    const backEasing = {
      in: 'cubic-bezier(0.6, -0.28, 0.7, 1)',
      out: 'cubic-bezier(0.3, 0, 0.32, 1.275)',
      inOut: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    };

    lightbox.on('firstUpdate', () => {
      lightbox.pswp.options.easing = backEasing.out;
    });
    lightbox.on('initialZoomInEnd', () => {
      lightbox.pswp.options.easing = backEasing.inOut;
    });
    lightbox.on('close', () => {
      lightbox.pswp.options.easing = backEasing.in;
    });

    return lightbox;
  }
}

export default Photoswipe;
