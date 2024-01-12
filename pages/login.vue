<script setup lang="ts">
useHead({
  title: 'Login | CRM System'
})

const emailRef = ref('')
const nameRef = ref('')
const passwordRef = ref('')

</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>

      <form>
        <UiInput
            placeholder="Email"
            type="email"
            v-model="emailRef"
            class="mb-3"/>
        <UiInput
            placeholder="Name"
            type="text"
            v-model="nameRef"
            class="mb-3"/>
        <UiInput
            placeholder="Password"
            type="password"
            v-model="passwordRef"
            class="mb-3"/>
        <div class="flex items-center justify-center gap-5">
          <UiButton type="button">Login</UiButton>
          <UiButton type="button">Register</UiButton>
        </div>

      </form>
    </div>

  </div>
</template>
