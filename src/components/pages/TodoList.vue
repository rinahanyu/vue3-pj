<script setup lang='ts'>
import TodoCard from '../organisms/TodoCard.vue'
import { SetTodoKey } from '../../store/Key'
import { ref, inject } from 'vue'

const store = inject(SetTodoKey)
if(!store) { throw new Error('store is not defined') };
const { state, add } = store

const localState = localStorage.getItem('state_list')
const changeLocalState: Array[] = localState ? Object.values(JSON.parse(localState)) : []

</script>

<template>
  <div class='container'>
    <h1>Todo List</h1>
    保存処理できるようになったら対応！（配列に追加する簡単な保存、firestoreへの保存、localstrageへの保存）
    <div class="list" v-for="todo in state" :key="todo.id">
      <TodoCard v-bind:title="todo.title" v-bind:limitDate="todo.limitDate"></TodoCard>
    </div>
  </div>
  <div><button class='home_link_button' ><router-link to='/' style='color: white;'>comback to HOME!!!</router-link></button></div>
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