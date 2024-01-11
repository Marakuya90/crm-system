<script setup lang="ts">

import {Button} from "~/components/ui/button";
</script>

<template>
<div>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" class="mx-auto"/>
    </NuxtLink>
    <button class="absolute top-2 right-3 transition-colors hover:text-primary">
      <Icon name="line-md:logout" size="20"></Icon>
    </button>
  </aside>
</div>
</template>

<style scoped>

</style>