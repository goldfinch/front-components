
### Install

```bash
npm install scrollmagic
```

```js
import ScrollMagic from '@goldfinch/store/plugins/scrollmagic'

const sm = new ScrollMagic()

// <div data-sm="welcome"></div>

sm.add('welcome', {
    enter: (e) => {}
})

// sm.add('welcome', {
//   enter: (e) => {
//     // ..
//   },
//   leave: (e) => {
//     // ..
//   }
// }, {
//   reverse: false,
//   triggerHook: 1,
//   offset: -300,
// })
```
