npm install bootstrap @formkit/vue@next @vueuse/core axios vue-recaptcha-v3 @vitejs/plugin-vue @formkit/addons
tom-select

vite.config.js
```
import vue from '@vitejs/plugin-vue';

laravel({
    input: [
        'themes/main/src/vue/vue.scss',
        'themes/main/src/vue/vue.js',
    ],
}),

vue({
  template: {
    transformAssetUrls: {
      base: null,
      includeAbsolute: false,
    },
  },
}),
```

```
<div app-contact-form></div>
```

```
$Vite.CSS(themes/main/src/vue/vue.scss).RAW
$Vite.JS(themes/main/src/vue/vue.js).RAW
```
