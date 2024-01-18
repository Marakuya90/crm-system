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
  <div :class="cn('p-3 pt-0 text-xs italic opacity-70', props.class)">
    <slot />
  </div>
</template>
