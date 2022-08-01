import { Module } from "vuex"
import { TodoState, RootState, Todo } from "../types"
// import actions from './actions'
// import mutations from "./mutations"
import { ref, InjectionKey } from "vue"
import { createStore } from 'vuex'

const now = new Date()

const someAsyncAddMethod = async(newTodo: Todo) => {
  // 裏側処理のバリデーション
  if (newTodo.id === 0 || newTodo.title === '' || newTodo.limitDate === null || newTodo.emergency === 0 || newTodo.importance === 0) {
    return false
  } else {
    return true
  }
}

const defaultTodos = [
  {
    id: 0,
      title: 'start todo!',
      description: 'todo start',
      limitDate: now,
      emergency: 3,
      importance: 3,
  }
]
const now_state = localStorage.getItem('list')
console.log(now_state)
const state = {
  todos: !now_state
  ? ref<Todo[]>(defaultTodos)
  : ref<Todo[]>(Object.values(JSON.parse(now_state)))
}

const setList = (todos: Array[]) => {
  localStorage.setItem('list', JSON.stringify(todos))
}

const mutations = {
  add (state, newTodo: Todo) {
    state.todos.push(newTodo)
    setList(state.todos)
  }
}

const actions = {
  async add ({ commit }, newTodo: Todo) {
    if (await someAsyncAddMethod(newTodo)) {
      commit('add', newTodo)
      return true
    } else {
      return false
    }
  }
}

export const store = createStore({
  state,
  actions,
  mutations
})
