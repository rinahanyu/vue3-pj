<script setup lang="ts">
import { inject, ref } from 'vue'
import { SetTodoKey } from '../../store/Key'

const store = inject(SetTodoKey)
if (!store) {
  throw new Error('injection error')
}
const { state, add } = store
const addTodo = () => {
  const length = state.value.length
  const newTodo = {
    id: length + 1,
    title: title.value,
    description: description.value,
    limitDate: limitDate.value || null,
    emergency: emergency.value || 0,
    importance: importance.value || 0,
  }
  add(newTodo)
  // setList()
}
const setList = () => {
  localStorage.setItem('list', JSON.stringify(state))
}

const title = ref<string>('')
const description = ref<string>('')
const limitDate = ref<Date>()
const emergency = ref<number>(0)
const importance = ref<number>(0)

const rates = [1, 2, 3, 4, 5]
</script>

<template>
  <div class="container">
    <h1>Welcome Todo App</h1>
    <div class="form_container">
      <div class="form_frame">
        <label for="title">title</label>
        <input
          v-model="title"
          name="title"
          type="text"
        >
      </div>
      <div class="form_frame">
        <label for="description">description</label>
        <input
          v-model="description"
          name="description"
          type="text"
          style="height: 50px"
        >
      </div>
      <div class="form_frame">
        <label for="limitDate">limitDate</label>
        <input
          v-model="limitDate"
          name="limitDate"
          type="date"
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
      <div class="form_button">
        <button
          class="add_button"
          @click="addTodo"
        >
          add OK?
        </button>
        <button class="list_link_button">
          <router-link
            to="/list"
            style="color: white"
          >
            go list?
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.add_button {
  background-color: rgb(16, 87, 38);
  margin: 20px 5px;
  color: white;
}
.list_link_button {
  background-color: rgb(27, 160, 129);
  margin: 20px 5px;
}
.container {
  background-color: white;
  width: 700px;
  height: 330px;
  /* text-align: center; */
  position: relative;
}
.form_container {
  position: absolute;
  /* text-align: center; */
  margin: auto;
  width: 100%;
}
.form_frame {
  width: 60%;
  margin-left: 20%;
}
.form_frame label {
  /* font-size: large; */
  font-weight: bold;
  margin-right: 10px;
}
</style>
