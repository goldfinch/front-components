<script setup>
import { FormKitMessages } from '@formkit/vue'

import useFormBuilder from '../../composables/useFormBuilder'

const props = defineProps(['supplies'])
const builder = useFormBuilder(props)

// start custom

const fieldHowOptions = props.supplies.parameters.how_options
</script>
<template>
  <Transition>
    <FormKit
      v-if="!builder.formSubmited.value"
      :id="builder.formId"
      :ref="builder.form"
      type="form"
      :config="{ validationVisibility: 'submit' }"
      form-class="contact-form row"
      actions-class="col-12"
      @submit="builder.submitHandler"
      @submit-invalid="builder.submitInvalidHandler"
    >
      <FormKit
        id="field-name"
        type="text"
        name="name"
        validation="required"
        label="Name"
        outer-class="col-md-6"
        :value="builder.testMode ? 'John Doe' : null"
      />

      <FormKit
        id="field-phone"
        type="text"
        name="phone"
        validation="required"
        label="Phone"
        outer-class="col-md-6"
        :value="builder.testMode ? '0205555555' : null"
      />

      <FormKit
        id="field-email"
        type="email"
        name="email"
        validation="required|email"
        label="Email"
        outer-class="col-md-6"
        :value="builder.testMode ? 'john@doe.nz' : null"
      />

      <FormKit
        v-if="builder.formVisible.value"
        id="field-how"
        type="dropdown"
        name="how"
        validation="required"
        label="How did you find me?"
        placeholder="Select ..."
        :options="fieldHowOptions"
        outer-class="col-md-6"
        :value="builder.testMode ? fieldHowOptions[0].label : null"
      />

      <FormKit
        type="textarea"
        name="message"
        label="Message"
        rows="10"
        outer-class="col-12"
        :value="builder.testMode ? 'I\'m about to tell you a story' : null"
      />

      <FormKit
        type="checkbox"
        label="Subscribe to newsletter"
        name="newsletter"
        :config="{
          classes: {
            label: '$reset form-check-label',
            wrapper: '$reset icheck-primary icheck-inline pt-3',
            input: '$reset form-check-input'
          }
        }"
        outer-class="col-12"
      />

      <FormKit
        id="field-segment-id"
        type="hidden"
        name="segment_id"
        validation="required"
        label="Segment"
        outer-class="col-md-6"
        :value="builder.fieldSegmentID"
      />

      <div class="col-12">
        <FormKitMessages />
      </div>
    </FormKit>
    <div v-else>
      <div v-html="builder.formMessage.value" />
    </div>
  </Transition>
</template>

<style lang="sass">
@import "@goldfinch/components/sass/vue/formkit"
</style>
