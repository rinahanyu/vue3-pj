<script setup lang="ts">
import { useStore } from 'vuex'
// import { defineProps } from 'vue'; setup内で利用できるコンパイラマクロのためimport不要
defineProps<{
  index: number
  title: string
  limitDate: Date | null
}>()

const store = useStore()
const deleteTodo = (index: number, title: string) => {
  store.dispatch('delete', {index, title})
}

// const limitDateFormat = (limitDateorigin: Date) => {
//   limitDate = limitDateorigin.getFullYear() + "-" + (limitDateorigin.getMonth() + 1) + "-" + limitDateorigin.getDate()
// }
</script>

<template>
  <div class="list">
    <div class="list_card">
      <span>{{ title }} / </span>
      <span>{{ limitDate }}</span>
      <button class="delete_btn" @click="deleteTodo(index, title)">delete?</button>
    </div>
  </div>
</template>

<style scoped>
.list_card {
  background-color: rgb(235, 237, 237);
  width: 550px;
  margin: 10px auto;
  padding: 5px;
}
.delete_btn {
  float: right;
  padding: 4px;
  background-color: rgb(233, 136, 136);
  color: white;
  font-size: 12px;
}
</style>
