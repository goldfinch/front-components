<script setup>
import { ref } from 'vue';
import useFormHandler from '../../../../../vendor/goldfinch/front-components/src/vue/composables/useFormHandler';
import { FormKitMessages } from '@formkit/vue';
import { useElementVisibility } from '@vueuse/core';

const testMode = false;

const contactForm = ref(null);
const formID = 'contactForm';
const formSubmited = ref(false);
const formMessage = ref(null);

const { submitHandler } = useFormHandler({
  action: 'contact',
  url: '/api/req/contact',
  ref: contactForm,
  id: formID,
  formSubmited: formSubmited,
  formMessage: formMessage,
});

const fieldHowOptions = [
  { value: 1, label: 'Google / Search engine' },
  { value: 2, label: 'Facebook' },
  { value: 3, label: 'Instagram' },
  { value: 4, label: 'Word of mouth' },
  { value: 5, label: 'Recommended by a friend' },
  { value: 6, label: 'Other' },
];

// PageSpeed Insights
const contactFormVisible = useElementVisibility(contactForm);
</script>
<template>
  <Transition>
    <FormKit
      v-if="!formSubmited"
      id="contactForm"
      ref="contactForm"
      @submit="submitHandler"
      type="form"
      :config="{ validationVisibility: 'submit' }"
      form-class="contact-form row"
      actions-class="col-12"
    >
      <FormKit
        type="text"
        name="name"
        id="field-name"
        validation="required"
        label="Name"
        outer-class="col-md-6"
        :value="testMode ? 'John Doe' : null"
      />

      <FormKit
        type="text"
        name="phone"
        id="field-phone"
        validation="required"
        label="Phone"
        outer-class="col-md-6"
        :value="testMode ? '0205555555' : null"
      />

      <FormKit
        type="email"
        name="email"
        id="field-email"
        validation="required|email"
        label="Email"
        outer-class="col-md-6"
        :value="testMode ? 'john@doe.nz' : null"
      />

      <FormKit
        v-if="contactFormVisible"
        type="dropdown"
        name="how"
        id="field-how"
        validation="required"
        label="How did you find me?"
        placeholder="Select ..."
        :options="fieldHowOptions"
        outer-class="col-md-6"
        :value="testMode ? 2 : null"
      />

      <FormKit
        type="textarea"
        name="message"
        label="Message"
        rows="10"
        outer-class="col-12"
        :value="testMode ? 'I\'m about to tell you a story' : null"
      />

      <FormKit
        type="checkbox"
        label="Subscribe to newsletter"
        name="newsletter"
        :config="{
          classes: {
            label: '$reset form-check-label',
            wrapper: '$reset icheck-primary icheck-inline pt-3',
            input: '$reset form-check-input',
          },
        }"
        outer-class="col-12"
      />

      <div class="col-12">
        <FormKitMessages />
      </div>
    </FormKit>
    <div v-else>
      <div v-html="formMessage"></div>
    </div>
  </Transition>
</template>

<style lang="sass">
@import "../../../../../vendor/goldfinch/front-components/src/components/sass/vue/formkit"
@import "../../../../../vendor/goldfinch/front-components/src/components/sass/vue/recaptcha"
@import "../../../../../vendor/goldfinch/front-components/src/components/sass/vue/transition"
</style>
