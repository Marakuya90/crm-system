<script setup lang="ts">

import {account} from "~/utils/appwrite";


const store = useAuthStore()
const isLoadingStore = useIsLoadingStore()
const router = useRouter()
const logout = async () => {
  isLoadingStore.set(true)
  await account.deleteSession('current')
  store.clear()
  await router.push('/login')
  isLoadingStore.set(false)
}
</script>

<template>
<div>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
      <img src="/logo.svg" class="mx-auto" alt="" width="140px"/>
    </NuxtLink>
    <button class="absolute top-2 right-3 transition-colors hover:text-primary"
    @click="logout">
      <Icon name="line-md:logout" size="20"></Icon>
    </button>
    <LayoutMenu />
  </aside>
</div>
</template>

<style scoped>

</style>