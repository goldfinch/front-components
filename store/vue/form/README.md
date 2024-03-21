### Install

```bash
npm i @formkit/vue @formkit/addons @vueuse/core recaptcha-v3 axios
```

```js
import customConfig from './formkit.config.js'
import ContactForm from './ContactForm.vue'

import initFormBuilder from '@goldfinch/store/vue/form/initFormBuilder'

initFormBuilder({
  'ContactForm' : ContactForm,
}, customConfig)

```

## Dropdown field

```bash
npm i tom-select
```
