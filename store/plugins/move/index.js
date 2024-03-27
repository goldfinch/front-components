import MoveTo from 'moveto'

class Move {

  options = {
    tolerance: 0,
    duration: 0,
    easing: 'easeOutQuart',
    container: window
  };

  moveTo;

  constructor(options) {

    if (options && typeof options === 'object') {
      this.options = Object.assign({}, this.options, options);
    }

    this.moveTo = new MoveTo(this.options);

    this.registerMoveToGlobal()
    this.registerMoveToElement()
    this.registerMoveToHash()

  }

  registerMoveToGlobal() {

    document.querySelectorAll('[data-move-to-top]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();

        let body = document.querySelector('body');

        this.moveTo.move(body)
      })
    })

    document.querySelectorAll('[data-move-to-bottom]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();

        let body = document.querySelector('body');

        this.moveTo.move(body, {
          tolerance: -body.offsetHeight,
        })
      })
    })

  }

  registerMoveToHash() {

    if(window.location.hash && window.location.hash.substr(0, 4) == '#to=') {
      let target = window.location.hash.split('=')[1];

      // 1 look for data-mt="*"
      // 2 look for id="*"
      // 3 look for class="*"

      let el = document.querySelector('[data-mt="'+target+'"]');

      if (!el && !this.isNumeric(target.substr(0, 1))) {

        el = document.querySelector('#'+target);

        if (!el) {
          el = document.querySelector('.'+target);
        }
      }

      if (el) {
        this.moveTo.move(el);
      }
    }

  }

  registerMoveToElement() {

    document.querySelectorAll('[data-move-to]').forEach(el => {

      el.addEventListener('click', (e) => {

        let to = e.currentTarget.getAttribute('data-move-to');
        let tolerance = e.currentTarget.getAttribute('data-move-to-offset');

        let options = this.options

        if (tolerance) {
          if (this.isNumeric(tolerance)) {
            options.tolerance = parseInt(tolerance)
          } else {
            let offsetEl = document.querySelector(tolerance);
            if (offsetEl) {
              options.tolerance = offsetEl.offsetHeight
            }
          }
        }

        let target = document.querySelector(to);

        if (!target) {
          target = document.querySelector('[data-mt="'+to+'"]')
        }

        if (target) {
          e.preventDefault();

          this.moveTo.move(target, options)
        }
      })
    })
  }

  isNumeric(value) {
      return /^-?\d+$/.test(value);
  }
}

export default Move;
