<script setup lang="ts">
</script>

<template>
<div>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" class="mx-auto" alt="" width="140px"/>
    </NuxtLink>
    <button class="absolute top-2 right-3 transition-colors hover:text-primary">
      <Icon name="line-md:logout" size="20"></Icon>
    </button>
    <LayoutMenu />
  </aside>
</div>
</template>

<style scoped>

</style>