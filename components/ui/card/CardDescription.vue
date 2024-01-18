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
  <p :class="cn('text-xs text-muted-foreground block pt-0', props.class)">
    <slot />
  </p>
</template>
