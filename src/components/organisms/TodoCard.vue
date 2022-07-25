<script setup lang="ts">
// import { defineProps } from 'vue'; setup内で利用できるコンパイラマクロのためimport不要
defineProps<{
  id: number
  title: string
  limitDate: Date | null
}>()

// const limitDateFormat = (limitDateorigin: Date) => {
//   limitDate = limitDateorigin.getFullYear() + "-" + (limitDateorigin.getMonth() + 1) + "-" + limitDateorigin.getDate()
// }
</script>

<template>
  <div class="list_card">
    <span>{{ title }} / </span>
    <span>{{ limitDate }}</span>
  </div>
</template>

<style scoped>
.list_card {
  background-color: rgb(235, 237, 237);
  width: 600px;
  margin: 10px auto;
  padding: 5px;
}
</style>