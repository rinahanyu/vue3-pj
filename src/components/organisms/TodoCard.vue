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
  if (index < 0) {
    alert('エラーが発生しました。再度deleteボタンを押してください。')
    return
  }
  store.dispatch('delete', { index, title })
}
</script>

<template>
  <div class="list">
    <div class="list_card pa-2">
      <span>{{ title }} / </span>
      <span>{{ limitDate }}</span>
      <v-btn
        class="delete_btn pa-1"
        @click="deleteTodo(index, title)"
      >
        delete?
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.list_card {
  background-color: rgb(235, 237, 237);
  width: 550px;
  margin: 10px auto;
}
.delete_btn {
  float: right;
  background-color: rgb(233, 136, 136);
  color: white;
  font-size: 12px;
}
</style>
