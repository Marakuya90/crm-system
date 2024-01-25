<script setup lang="ts">
const props = defineProps({
  labelText: {
    type: String,
    default: ''
  }
})
</script>

<template>
<div class="mb-1">
<label v-if="labelText" class="opacity-75 mb-0.5 block text-lg">{{ labelText }}</label>
</div>
  <div class="text-base">
    <slot />
  </div>
</template>

<style scoped>

</style>