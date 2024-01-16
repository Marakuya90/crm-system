<script setup lang="ts">
import {useKanbanQuery} from "~/components/kanban_board/useKanbanQuery";
import dayjs from "dayjs";

const {data, isLoading, refetch} = useKanbanQuery()
useSeoMeta({
  title: 'Home | CRM System'
})

const dragCardRef = ref<ICard | null>(null)
const sourseColumnRef = ref<IColumn | null>(null)

</script>

<template>
  <div class="p-10">
    <h1 class="font-bolt text-2xl mb-10">CRM System</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else class="grid grid-cols-5 gap-16">

      <div v-for="(column,index) in data" :key="index">
        <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-centr">
          {{ column.name }}
        </div>
        <div>
          <UiCard
              v-for="card in column.items"
              :key="card.id"
              class="mb-3"
              draggable="true">
            <UiCardHeader role="button">{{ card.name }}</UiCardHeader>
            <UiCardDescription>{{convertCurrency(card.price)}}</UiCardDescription>
            <UiCardContent>{{ card.companyName }}</UiCardContent>
            <UiCardFooter>{{ dayjs(card.$createdAt).format('DD MMMM YYYY') }}</UiCardFooter>
          </UiCard>
        </div>
      </div>

    </div>
  </div>

</template>
