npm install @formkit/vue@next
npm i @vueuse/core
npm install axios
npm install vue-recaptcha-v3
npm i @vitejs/plugin-vue
npm install @formkit/addons
npm i tom-select

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
