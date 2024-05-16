### Install

```bash
npm i @formkit/vue @formkit/addons @vueuse/core recaptcha-v3 axios
```

```js
import initFormBuilder from '@goldfinch/store/vue/form/initFormBuilder'

import ContactForm from './ContactForm.vue'
import customConfig from './formkit.config.js'

initFormBuilder(
  {
    ContactForm: ContactForm
  },
  customConfig
)
```

## Dropdown field

```bash
npm i tom-select
```
