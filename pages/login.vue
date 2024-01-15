<script setup lang="ts">
import {v4 as uuid} from 'uuid'
useSeoMeta({
  title: 'Login | CRM System'
})

const emailRef = ref('')
const nameRef = ref('')
const passwordRef = ref('')

const router = useRouter()
const isLoadingStore = useIsLoadingStore()
const authStore = useAuthStore()

const login = async () => {
  isLoadingStore.set(true)
  await account.createEmailSession(emailRef.value, passwordRef.value)
  let response = await account.get()
  if (response) {
    authStore.set({
      email: response.email,
      name: response.name,
      status: response.status
    })
  }
  emailRef.value = ''
  nameRef.value = ''
  passwordRef.value = ''

  await router.push('/')
  isLoadingStore.set(false)
}

const register = async () => {
  await account.create(uuid(),emailRef.value,passwordRef.value,nameRef.value)
  await login()
}

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
          <UiButton type="button" @click="login">Login</UiButton>
          <UiButton type="button" @click="register">Register</UiButton>
        </div>

      </form>
    </div>

  </div>
</template>
