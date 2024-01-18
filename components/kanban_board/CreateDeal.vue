<script setup lang="ts">
import {useMutation} from "@tanstack/vue-query";
import {v4 as uuid} from "uuid";
import {COLLECTIONS_DEALS, DB_ID} from "~/app.constants";
import type {IDeal} from '~/types/deals.types'

interface IDealFormState extends Pick<IDeal, 'name'|'price'> {
  customer: {
    name: string,
    email: string
  }
  status: string
}

const props = defineProps({
  status: {
    type: String,
    default: ''
  },
  refetch: {
    type: Function
  }
})

const isOpenForm = ref<boolean>(false)

const {handleSubmit, handleReset, defineField} = useForm<IDealFormState>({
  initialValues: {
    status: props.status
  }
})


const [name, nameAttrs] = defineField('name')
const [price, priceAttrs] = defineField('price')
const [customerName, customerNameAttrs] = defineField('customer.name')
const [customerEmail, customerEmailAttrs] = defineField('customer.email')

const {} = useMutation({
  mutationKey: ['create a new deal'],
  mutationFn: (data: IDealFormState) => DB.createDocument(DB_ID, COLLECTIONS_DEALS, uuid(),data)
})

</script>

<template>
<div class="text-center mb-2">
  <button class="transition-all opacity-5 hover:opacity-100 hover:text-[#a252c8]"
  @click="isOpenForm = !isOpenForm">
    <Icon v-if="isOpenForm"
          name="radix-icons:arrow-up"
          size="25"
          class="fade-in-100 fade-out-0"></Icon>
    <Icon v-if="!isOpenForm"
          name="icons8:plus"
          size="25"
          class="fade-in-100 fade-out-0"></Icon>
  </button>
  <form>
    <input type="text" class="input">
    <button class="button"></button>
  </form>
</div>
</template>

<style scoped>
.input {
  @apply border-[#161c26] mb-2 placeholder:text-[#748092] focus:border-border transition-colors;
}

.btn {
  @apply text-xs border py-1 px-2 rounded border-[#161c26] hover:border-[#482c65] transition-colors text-[#aebed5] hover:text-white;
}

.form {
  @apply mb-3 block;
  animation: show 0.3s ease-in-out;
}

@keyframes show {
  from {
    @apply border-[#a252c83d];
    transform: translateY(-35px);
    opacity: 0.4;
  }

  90% {
    @apply border-[#a252c83d];
  }

  to {
    @apply border-transparent;
    transform: translateY(0);
    opacity: 1;
  }
}
</style>