import { defaultConfig, plugin } from '@formkit/vue'
import { createApp } from 'vue'

import ContactForm from './components/ContactForm.vue'
import customConfig from './formkit.config.js'

const formContact = document.querySelector('[app-contact-form]')

if (formContact) {
  const app = createApp(ContactForm, { ...formContact.dataset })
  app.use(plugin, defaultConfig(customConfig)).mount('[app-contact-form]')
}
