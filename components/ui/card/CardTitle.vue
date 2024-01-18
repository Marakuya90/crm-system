<script setup lang="ts">
import { cn } from '@/utils/utils'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <h3
    :class="
      cn('text-lg font-bold leading-none tracking-tighter', props.class)
    "
  >
    <slot />
  </h3>
</template>
