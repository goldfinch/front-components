<script setup>

const props = defineProps(['supplies'])
const supplies = JSON.parse(props.supplies)

</script>
<template>

    <component
        :is="supplies.form.component"
        :supplies="supplies"
    ></component>

</template>

<style lang="sass">
@import "../../../../../vendor/goldfinch/front-components/src/components/sass/vue/formkit"
@import "../../../../../vendor/goldfinch/front-components/src/components/sass/vue/recaptcha"
@import "../../../../../vendor/goldfinch/front-components/src/components/sass/vue/transition"
</style>
