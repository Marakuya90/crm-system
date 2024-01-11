<script lang="ts" setup>
console.log('loaded')
</script>

<template>
  <div>
    <section class="grid" style="min-width: 100vh">
      <aside>Sidebar</aside>
      <div>
        <slot />
      </div>
    </section>
  </div>

</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}

</style>