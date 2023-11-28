import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import customConfig from './formkit.config.js'
import ContactForm from './components/ContactForm.vue'

const formContact = document.querySelector("[app-contact-form]");

if (formContact) {

  const app = createApp(ContactForm, { ...formContact.dataset });
  app.use(plugin, defaultConfig(customConfig)).mount('[app-contact-form]');
}
