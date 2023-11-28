<script setup>
import { ref, onMounted, watch } from 'vue'
import TomSelect from 'tom-select'

const props = defineProps({
  context: Object,
})

const tomSelectInstance = ref(null)
const tomSelectRef = ref(null)

function handleChange(value) {
  props.context.node.input(value)
}

onMounted(() => {

  // lighthouse pagespeed

    tomSelectInstance.value = new TomSelect(tomSelectRef.value, {
        onInitialize: function() {
        if (!this.dropdown_content.hasAttribute('data-lenis-prevent')) {
            this.dropdown_content.setAttribute('data-lenis-prevent', '')
        }
        },
        onChange: () => handleChange(tomSelectInstance.value.getValue()),
        allowEmptyOption: true,
        // create: true,
        // sortField: {
        //   field: 'text',
        //   direction: 'asc'
        // }
    });

})

watch(() => props.context.disabled, (current, old) => {

  if (current) {
    tomSelectInstance.value.disable()
  } else {
    tomSelectInstance.value.enable()
  }
})

</script>

<template>
  <select
    ref="tomSelectRef"
    :id="context.id"
    :disabled="context.disabled"
    :value="context._value"
  >
    <option value="" v-text="context.attrs.placeholder" v-if="context.attrs.placeholder"></option>
    <option v-for="option in context.attrs.options" :v-key="option.value" :value="option.value" v-text="option.label"></option>
  </select>
    <!--
      :model-value="context._value"
      @update:model-value="context.node.input($event)"
      v-bind="context.attrs"
      :id="context.id"
      :name="context.node.name"
      @blur="context.handlers.blur"
    -->
  <!-- <select
    ref="tomSelectField"
    :id="`field-${name}`"
    data-plugin="tom-select"
    :placeholder="placeholder"
    autocomplete="off"
    :name="name"
    aria-describedby="`field-${name}-help`"
    @blur="handleBlur"
    :value="value"
    :aria-describedby="`field-${name}-help`"
  >
    <option value="" v-text="placeholder" v-if="placeholder"></option>
    <option v-for="option in options" :v-key="option.value" :value="option.value" v-text="option.label"></option>
  </select> -->
</template>
