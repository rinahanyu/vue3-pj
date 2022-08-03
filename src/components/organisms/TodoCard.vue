<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import EditDialog from './EditDialog.vue';
import { Todo } from '../../store/vuex/types'
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

// edit
// TODO: storeから通常のrefで受け渡しするように変更する
// const emptyTodo = {
//   id: 0,
//   title: '!',
//   description: '',
//   limitDate: null,
//   emergency: 0,
//   importance: 0,
// }
// const editTodo = ref<Todo>(emptyTodo)
// const show_dialog = ref<boolean>(false)
// const emits = defineEmits<{
//   (e: 'openDialog', editTodo: Todo): void
// }>()
const openDialog = (index: number) => {
  alert('edit ok?')
  console.log(index)
  store.dispatch('edit', index)
  // TODO: storeから通常のrefで受け渡しするように変更する
  // editTodo.value = store.state.todos[index]
  // show_dialog.value = true
  // emits('openDialog', editTodo.value)
}
</script>

<template>
  <div class="list">
    <div class="list_card pa-2">
      <span>{{ title }} / </span>
      <span>{{ limitDate }}</span>
      <v-btn 
        class="edit_btn pa-1"
        @click="openDialog(index)">
        edit!
      </v-btn>
      <v-btn
        class="delete_btn pa-1"
        @click="deleteTodo(index, title)"
      >
        delete?
      </v-btn>
    </div>
  </div>
  <!-- <EditDialog :todo="editTodo"></EditDialog> -->
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
.edit_btn {
  float: right;
  background-color: rgb(233, 196, 136);
  color: white;
  font-size: 12px;
}
</style>
