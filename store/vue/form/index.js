import { createApp } from 'vue';
import { plugin, defaultConfig } from '@formkit/vue';
import FormBuilder from './components/FormBuilder.vue';

export default function formformBuilder(components, customConfig) {
  const forms = document.querySelectorAll('[app-form]');

  if (forms && forms.length) {
    forms.forEach((form) => {
      const app = createApp(FormBuilder, { ...form.dataset });
      app.use(plugin, defaultConfig(customConfig));

      for (const [key, value] of Object.entries(components)) {
        app.component(key, value);
      }

      app.mount(form);
    });
  }
}
