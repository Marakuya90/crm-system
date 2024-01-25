<script setup lang="ts">


const store = useDealSlideStore()

const isLocalOpen = computed({
  get: () => store.isOpen,
  set: value => {store.isOpen = value}
})
</script>

<template>

</template>

<style scoped>

</style>