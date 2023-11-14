import $ from 'jquery'
import MoveTo from 'moveto'

var lastScrollPosition = 0;

class Scroll {

  constructor() {

    this.scrollEvent();
    this.goUpButton();

    $(document).ready((e) => this.registeredSegments(e));
    $(document).ready((e) => this.moveTargets());

  }

  scrollEvent() {

    document.addEventListener('scroll', (e) => this.registeredSegments(e));

  }

  moveTargets() {

    if (window.location.hash) {

      let h = window.location.hash.substr(1)

      if (h.substr(0, 6) == 'moveto') {

        setTimeout(() => {

          const moveTo = new MoveTo({
            tolerance: 50,
            duration: 1000,
          });

          const target = document.getElementById(h.substr(7));

          moveTo.move(target);

        }, 500);
      }

    }

  }

  changeNavbar(scrollPos) {

    if(scrollPos === 0) {

      $('body').removeClass('compact');

    } else {

      $('body').addClass('compact');

    }

  }

  checkScrollPosition() {

    lastScrollPosition = window.scrollY;

    this.changeNavbar(lastScrollPosition);

  }

  registeredSegments(e) {

    this.checkScrollPosition();
    // this.footerContactBlockSegment();

  }

  loadMoreOnScroll() {

    let e = '[data-loadmore-trigger]';

    if ($(e).length) {

      let offset = $(e).offset().top - $(window).height();

      if(this.getPosition() > offset && $(e).attr('data-loading') != 'true') {
        $(e).click()
      }

    }

  }

  // footerContactBlockSegment() {

  //   if ($('[data-segment="footer-contact-block"]').length) {

  //     $('[data-segment="footer-contact-block"]:not([data-scrolled="true"])').each((i, e) => {

  //       let offset = $(e).offset().top - $(window).height() / 1.5;

  //       if(this.getPosition() > offset) {

  //         $(e).attr('data-scrolled', true);

  //         Animator.footerContactBlock($(e));
  //       }

  //     });

  //   }

  // }

  static moveToElement(id, tolerance) {

    const moveTo = new MoveTo({
      tolerance: tolerance ? tolerance : 50,
      duration: 1000,
    });

    const target = document.getElementById(id);

    moveTo.move(target);

  }

  goUpButton() {

    var btn = $('[data-move="up"]');

    if (btn.length) {

      const moveTo = new MoveTo();

      btn.click((e) => {

        const target = document.getElementById('base');

        moveTo.move(target);

      });

    }


  }

  getPosition() {

    return window.scrollY

  }

}

export default Scroll
