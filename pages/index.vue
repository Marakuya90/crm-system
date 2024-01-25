<script setup lang="ts">
import {useKanbanQuery} from "~/components/kanban_board/useKanbanQuery";
import type {ICard, IColumn} from "~/components/kanban_board/kanban.types";
import dayjs from "dayjs";
import type {EnumStatus} from "~/types/deals.types";
import {useMutation} from "@tanstack/vue-query";
import {COLLECTIONS_DEALS, DB_ID} from "~/app.constants";
import {generateColumnStyle} from "~/components/kanban_board/generate-gradient";

const {data, isLoading, refetch} = useKanbanQuery()

const store = useDealSlideStore()

useSeoMeta({
  title: 'Home | CRM System'
})

const dragCardRef = ref<ICard | null>(null)
const sourseColumnRef = ref<IColumn | null>(null)

type TypeMutationVariables = {
  docId: string,
  status?: EnumStatus
}

const {mutate} = useMutation({
  mutationKey: ['move card'],
  mutationFn: ({docId, status}: TypeMutationVariables) =>
      DB.updateDocument(DB_ID, COLLECTIONS_DEALS, docId, {
        status,
      }),
  onSuccess: () => refetch()
})

function handleDragStart(card: ICard, column: IColumn) {
  dragCardRef.value = card
  sourseColumnRef.value = column
}

function handleDrop(targetColumn: IColumn) {
  if (dragCardRef.value && sourseColumnRef.value) {
    mutate({docId: dragCardRef.value.id, status: targetColumn.id})
  }
}
</script>

<template>
  <div class="p-10">
    <h1 class="font-bolt text-xl mb-10">CRM System</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else class="grid grid-cols-5 gap-12">

      <div
          v-for="(column,index) in data"
          :key="index"
          @dragover.prevent
          @drop="() => handleDrop(column)"
          class="min-h-screen">
        <div
            :style="generateColumnStyle(+index,data?.length)"
            class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
          {{ column.name }}
        </div>
        <div>
          <KanbanBoardCreateDeal
              :refetch="refetch"
              :status="column.id"/>
          <UiCard
              v-for="card in column.items"
              :key="card.id"
              class="mb-3"
              draggable="true"
              @dragstart="() => handleDragStart(card, column)">
            <UiCardHeader
                @click="store.set(card)"
                role="button">
              <UiCardTitle>{{ card.name }}</UiCardTitle>
              <UiCardDescription>{{ convertCurrency(card.price) }}</UiCardDescription>
            </UiCardHeader>
            <UiCardContent class="text-xs">{{ card.companyName }}</UiCardContent>
            <UiCardFooter>{{ dayjs(card.$createdAt).format('DD MMMM YYYY') }}</UiCardFooter>
          </UiCard>
        </div>
      </div>
    </div>
    <KanbanBoardSlideoverSlideOver />
  </div>
</template>
