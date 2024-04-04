### Install

```bash
npm install @splidejs/splide
```

```css
@import '@goldfinch/store/plugins/slider/splide';
```

```js
import Splide from '@goldfinch/store/plugins/slider/splide'

Splide.init('.splide', {
  arrows: false,
  breakpoints: {
    640: {
      arrows: true,
    },
  }
})
```

## Important note (page speed insights)

```
Values assigned to role="" are not valid ARIA roles.
```

Do not build slider on <ul> or <li>, use <div> instead.
