<script setup lang="ts">
import TodoCard from '../organisms/TodoCard.vue'
import EditDialog from '../organisms/EditDialog.vue';
// ------provider/injectionでの場合------
// import { SetTodoKey } from '../../store/Key'
import { computed, ref } from 'vue'
// const store = inject(SetTodoKey)
// if (!store) {
//   throw new Error('store is not defined')
// }
// const { state, add } = store

// ------vuexでの場合------
import { useStore } from 'vuex'
const store = useStore()

// sort
const listLabel = ['no_select', 'limitDate', 'emergency', 'importance']
const selectSort = ref<string>('no_select')
const sortBy = () => {
  switch (selectSort.value) {
    case 'limitDate':
    store.state.todos.sort(function(a, b) {
      console.log(a)
      return (a.limitDate < b.limitDate) ? -1: 1
    })
    break
    case 'emergency':
      console.log('emergency')
      store.state.todos.sort(function(a, b) {
      return (a.emergency < b.emergency) ? 1: -1
    })
    break
    case 'importance':
      console.log('importance')
      store.state.todos.sort(function(a, b) {
      return (a.importance < b.importance) ? 1: -1
    })
    break
  }
}

// editダイアログ用
import { Todo } from '../../store/vuex/types'
const show_dialog = ref<boolean>(false)
const editIndex = ref<number>(0)
const openDialog = (index: number) => {
  editIndex.value = index
  show_dialog.value = true
}
</script>

<template>
  <div class="container mt-16">
    <h1>Todo List</h1>
    <div class="sort_drop_dawn my-3">
      <span>which sort type? => </span>
      <select @change="sortBy" v-model="selectSort" name="sort_drop" id="sort_drop">
        <option v-for="(list, index) in listLabel" :key="index" class="list_item" :value="list">
          {{ list }}
        </option>
      </select>
    </div>
    <div
      v-for="(todo, index) in store.state.todos"
      :key="todo.id"
      class="list"
    >
      <TodoCard
        :index="index"
        :title="todo.title"
        :limit-date="todo.limitDate"
        @show_dialog="openDialog(index)"
      />
    </div>
    <EditDialog v-show="show_dialog" :editIndex="editIndex" @close_dialog="show_dialog = false"></EditDialog>
  </div>
  <div class="mt-8">
    <v-btn class="home_link_button my-5 mx-5 pa-2">
      <router-link
        to="/"
        style="color: white"
      >
        comback to HOME!!!
      </router-link>
    </v-btn>
  </div>
</template>

<style scoped>
.container {
  background-color: white;
  width: 700px;
  height: 400px;
  position: relative;
}
.home_link_button {
  background-color: rgb(27, 160, 129);
  color: white !important;
  border-radius: 10px;
}
#sort_drop {
  width: 150px;
  background-color: rgb(169, 160, 160);
  text-align: center;
}
</style>
