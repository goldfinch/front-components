<script setup>
const props = defineProps(['supplies'])
const supplies = JSON.parse(props.supplies)
</script>
<template>
  <component :is="supplies.form.component" :supplies="supplies" />
</template>

<style lang="sass">
@import "../../components/sass/vue/recaptcha"
@import "../../components/sass/vue/transition"
</style>
