import { InjectionKey, reactive, ref } from 'vue'
// import { createStore, Store } from 'vuex'

type Todo = {
  id: number
  title: string
  description: string
  limitDate: Date | null
  emergency: number
  importance: number
}

const now = new Date()
const defaultTodos = [
  {
    id: 0,
    title: 'start',
    description: 'todo start',
    limitDate: now,
    emergency: 3,
    importance: 3,
  },
]

export const setTodos = (() => {
  const state = ref<Todo[]>(defaultTodos)
  const add = (newTodo: Todo) => {
    state.value.push(newTodo)
  }
  return { state, add }
})()

// export type TodosType = ReturnType<typeof setTodos>
export type TodosType = typeof setTodos
// export const todoKey: InjectionKey<TodosType> = Symbol('useTodos')