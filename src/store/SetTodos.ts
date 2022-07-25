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
// const now =  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() これだとdate関数じゃなくなるからだめ
const defaultTodos = [
  {
    id: 0,
    title: 'start todo!',
    description: 'todo start',
    limitDate: now,
    emergency: 3,
    importance: 3,
  },
]

// localStrageにstrageの値を保存（リロードしても値を保持できるように）
const setList = (state: Array[]) => {
  // localStorage.removeItem('state_list')
  localStorage.setItem('state_list', JSON.stringify(state))
}

export const setTodos = (() => {
  // 現在のlocalStrageに入っている値取得
  const now_state = localStorage.getItem('state_list')
  // 値が入っていなければ、defaultを定義
  const state = !now_state ? ref<Todo[]>(defaultTodos) : ref<Todo[]>(Object.values(JSON.parse(now_state)))
  setList(state.value)

  const add = (newTodo: Todo) => {
    state.value.push(newTodo)
    setList(state.value)
  }
  return { state, add }
})()

// export type TodosType = ReturnType<typeof setTodos>
export type TodosType = typeof setTodos
// export const todoKey: InjectionKey<TodosType> = Symbol('useTodos')