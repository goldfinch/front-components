import { gsap as g } from 'gsap'

class GSAP {

    timelineDefaults = {
      defaults: {
        ease: 'circ.easeInOut',
        duration: .5
      }
    }

    constructor() {}

    timeline(options = {}) {

      Object.assign(options, this.timelineDefaults)

      return g.timeline(options)
    }

    static init() {

      return g

    }

}

export default GSAP
