<script setup lang="ts">
import TodoCard from '../organisms/TodoCard.vue'
// ------provider/injectionでの場合------
// import { SetTodoKey } from '../../store/Key'
// import { inject } from 'vue'
// const store = inject(SetTodoKey)
// if (!store) {
//   throw new Error('store is not defined')
// }
// const { state, add } = store

// ------vuexでの場合------
import { useStore } from 'vuex'
const store = useStore()

// const localState = localStorage.getItem('list')
// const changeLocalState: Array[] = localState
//   ? Object.values(JSON.parse(localState))
//   : []
</script>

<template>
  <div class="container">
    <h1>Todo List</h1>
    保存処理できるようになったら対応！（（済）配列に追加する簡単な保存、firestoreへの保存、（済）localstrageへの保存）
    <div
      v-for="(todo, index) in store.state.todos"
      :key="todo.id"
      class="list"
    >
      <TodoCard
        :index="index"
        :title="todo.title"
        :limit-date="todo.limitDate"
      />
    </div>
  </div>
  <div>
    <button class="home_link_button">
      <router-link
        to="/"
        style="color: white"
      >
        comback to HOME!!!
      </router-link>
    </button>
  </div>
</template>

<style scoped>
.container {
  background-color: white;
  width: 700px;
  height: 330px;
  /* text-align: center; */
  position: relative;
}
.home_link_button {
  background-color: rgb(27, 160, 129);
  margin: 20px 5px;
  color: white !important;
}
</style>
