import { Splide as SP } from '@splidejs/splide'

class Splide {
  constructor() {}

  static init(el, options) {
    let target = document.querySelector(el)

    if (target) {
      return new SP(el, options).mount()
    }
  }
}

export default Splide
