<script setup lang="ts">
import { inject, ref } from 'vue'
// ------provider/injectionでの場合------
// import { SetTodoKey } from '../../store/Key'
// const store = inject(SetTodoKey)
// if (!store) {
//   throw new Error('injection error')
// }
// const { state, add } = store
// const addTodo = () => {
//   const length = state.value.length
//   const newTodo = {
//     id: length + 1,
//     title: title.value,
//     description: description.value,
//     limitDate: limitDate.value || null,
//     emergency: emergency.value || 0,
//     importance: importance.value || 0,
//   }
//   add(newTodo)
//   // setList()
// }
// const setList = () => {
//   localStorage.setItem('list', JSON.stringify(state))
// }

// ------vuexでの場合------
import { useStore } from 'vuex'
const store = useStore()
const addTodo = () => {
  // const length = state.value.length
  const length = store.state.id_increment
  if (
    title.value === '' ||
    limitDate.value === null ||
    emergency.value === 0 ||
    importance.value === 0
  ) {
    alert('必要事項が入力されていません。入力内容を再度確認してください。')
    return
  }
  const newTodo = {
    id: length + 1,
    title: title.value,
    description: description.value,
    limitDate: limitDate.value || null,
    emergency: emergency.value || 0,
    importance: importance.value || 0,
  }
  // add(newTodo)
  store.dispatch('add', newTodo).then((response: boolean) => {
    if (response) {
      alert('保存に成功しました。')
      // 初期値に全て戻す
      title.value = ''
      description.value = ''
      limitDate.value = undefined
      emergency.value = 0
      importance.value = 0
    } else {
      alert('保存に失敗しました。')
    }
  })
}
// const setList = () => {
//   localStorage.setItem('list', JSON.stringify(state))
// }

const title = ref<string>('')
const description = ref<string>('')
const limitDate = ref<Date>()
const emergency = ref<number>(0)
const importance = ref<number>(0)

const rates = [1, 2, 3, 4, 5]
</script>

<template>
  <div class="container mt-16">
    <h1>Welcome Todo App</h1>
    <div class="form_container mt-8">
      <div class="form_frame">
        <label for="title">title</label>
        <input
          v-model="title"
          name="title"
          type="text"
          style="outline: solid 1px gray;"
        >
      </div>
      <div class="form_frame">
        <label for="description">description</label>
        <input
          v-model="description"
          name="description"
          type="text"
          style="height: 50px; outline: solid 1px gray;"
        >
      </div>
      <div class="form_frame">
        <label for="limitDate">limitDate</label>
        <input
          v-model="limitDate"
          name="limitDate"
          type="date"
          style="outline: solid 1px gray;"
        >
      </div>
      <div class="form_frame">
        <span style="font-weight: bold; margin-right: 10px">emergency</span>
        <span
          v-for="rate in rates"
          :key="rate"
        >
          <input
            v-model="emergency"
            name="emergency"
            type="radio"
            :value="rate"
          >
          <label for="emergency">{{ rate }}</label>
        </span>
      </div>
      <div class="form_frame">
        <span style="font-weight: bold; margin-right: 10px">importance</span>
        <span
          v-for="rate in rates"
          :key="rate"
        >
          <input
            v-model="importance"
            name="importance"
            type="radio"
            :value="rate"
          >
          <label for="importance">{{ rate }}</label>
        </span>
      </div>
      <div class="form_button mt-5">
        <v-btn
          class="add_button my-20 mx-5 pa-2"
          @click="addTodo"
        >
          add OK?
        </v-btn>
        <v-btn class="list_link_button my-20 mx-5 pa-2">
          <router-link
            to="/list"
            style="color: white"
          >
            go list?
          </router-link>
        </v-btn>
        <v-btn class="chart_link_button my-20 mx-5 pa-2">
          <router-link
            to="/chart"
            style="color: white"
          >
            go chart?
          </router-link>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.add_button {
  background-color: rgb(16, 87, 38);
  border-radius: 5px;
  color: white;
}
.list_link_button {
  background-color: rgb(27, 160, 129);
  border-radius: 5px;
}
.chart_link_button {
  background-color: rgba(214, 206, 51, 0.935);
  border-radius: 5px;
}
.container {
  background-color: white;
  width: 700px;
  height: 330px;
  position: relative;
}
.form_container {
  position: absolute;
  margin: auto;
  width: 100%;
}
.form_frame {
  width: 60%;
  margin-left: 20%;
}
.form_frame label {
  font-weight: bold;
  margin-right: 10px;
}
input {
  outline: black;
}
</style>
