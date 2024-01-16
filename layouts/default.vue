<script lang="ts" setup>
import { useAuthStore, useIsLoadingStore} from "~/store/auth.store";
import { account } from "~/utils/appwrite";

const authStore = useAuthStore()
const router = useRouter()
const isLoadingStore = useIsLoadingStore()

onMounted(async () => {
  try {
  const user = await account.get()
    if (user) {
      authStore.set(user)
    }
  }
  catch (error){
    router.push('/login')
  }
  finally
  {
    isLoadingStore.set(false)
  }
})
</script>

<template>
  <div>
    <LayoutLoader v-if="isLoadingStore.isLoading"/>
    <section v-else :class="{ grid:authStore.isAuth }" style="min-width: 100vh; min-height: 100vh">
      <LayoutSidebar v-if="authStore.isAuth"></LayoutSidebar>
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