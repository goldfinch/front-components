import SM from "scrollmagic";

class ScrollMagic {

    collections = [];

    controller;

    defaultOptions = {
      reverse: false,
      triggerHook: .8,
    }

    constructor() {

      this.controller = new SM.Controller();

    }

    add(elName, events, options = {}) {

      let target = document.querySelector('[data-sm="' + elName + '"]');

      if (target) {

        let sceneOptions = {
          triggerElement: '[data-sm="'+elName+'"]'
        }

        Object.assign(sceneOptions, this.defaultOptions)
        Object.assign(sceneOptions, options)

        let scene = new SM.Scene(sceneOptions);

        if (events) {
          for (const [key, value] of Object.entries(events)) {
            scene.on(key, value)
          }
        }

        scene.addTo(this.controller)

        this.collections.push(scene)
      }
    }

}

export default ScrollMagic
