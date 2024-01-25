<script setup lang="ts">
import dayjs from "dayjs";

const store = useDealSlideStore()
</script>

<template>
  <div class="border-border bg-black/20 rounded p-3">
    <div class="uppercase bold text-xl mb-4">О сделке</div>

    <KanbanBoardSlideoverLabel
    label-text="Наименование">
      <h2>{{store.card?.name}}</h2>
    </KanbanBoardSlideoverLabel>

    <KanbanBoardSlideoverLabel
        label-text="Сумма">
      {{convertCurrency(store.card?.price || 0)}}
    </KanbanBoardSlideoverLabel>

    <KanbanBoardSlideoverLabel
        label-text="Статус">
      <UiBadge variant="outline">
        {{ store.card?.status}}
      </UiBadge>
    </KanbanBoardSlideoverLabel>

    <KanbanBoardSlideoverLabel
        label-text="Клиент">
      {{store.card?.companyName}}
    </KanbanBoardSlideoverLabel>

    <KanbanBoardSlideoverLabel
        label-text="Дата создания">
      {{dayjs(store.card?.$createAt).format('DD MMMM YYYY')}}
    </KanbanBoardSlideoverLabel>

  </div>
</template>

<style scoped>

</style>