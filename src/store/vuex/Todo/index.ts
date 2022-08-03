import { Module } from "vuex"
import { TodoState, RootState, Todo, deleteParam } from "../types"
// import actions from './actions'
// import mutations from "./mutations"
import { ref, InjectionKey } from "vue"
import { createStore } from 'vuex'

const now = new Date()

// add裏側処理のバリデーション
const beforeAddValidationMethod = async(newTodo: Todo) => {
  if (newTodo.id === 0 || newTodo.title === '' || newTodo.limitDate === null || newTodo.emergency === 0 || newTodo.importance === 0) {
    return false
  } else {
    return true
  }
}

// delete裏側処理のバリデーション
const beforeDeleteValidationMethod = async (id: number, title: string) => {
  if (id < 0) {
    return false
  } else {
    if (confirm('title: ' + title + '\n上記を削除してもよろしいですか？')) {
      return true
    }
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
const emptyTodo = {
  id: 0,
  title: '!',
  description: '',
  limitDate: null,
  emergency: 0,
  importance: 0,
}
const now_state = localStorage.getItem('list')
const last_id = localStorage.getItem('last_id')
console.log(now_state)
const state = {
  // todoリスト
  todos: !now_state
  ? ref<Todo[]>(defaultTodos)
  : ref<Todo[]>(Object.values(JSON.parse(now_state))),
  // id生成時のインクリメント用（削除して歯抜けになっても対応できるように）
  id_increment: !last_id
  ? ref<number>(0)
  : ref<number>(JSON.parse(last_id)),
  // edit
  show_dialog: ref<boolean>(false),
  editTodo: ref<Todo>(emptyTodo),
  editIndex: ref<number | null>(null)
}

const setList = (todos: Array[], last_id?: number) => {
  localStorage.setItem('list', JSON.stringify(todos))
  if (last_id) {
    localStorage.setItem('last_id', JSON.stringify(last_id))
  }
}

const mutations = {
  add (state, newTodo: Todo) {
    state.todos.push(newTodo)
    state.id_increment = newTodo.id
    setList(state.todos, newTodo.id)
  },
  delete (state, index: number) {
    console.log(index)
    state.todos.splice(index, 1)
    setList(state.todos)
  },
  edit (state, index: number) {
    // state.todos.
    state.editTodo = state.todos[index]
    state.editIndex = index
    console.log(state.editTodo)
    state.show_dialog = true
  },
  update (state, editTodo: Todo) {
    console.log('ここは')
    state.todos[state.editIndex] = editTodo
    console.log('---------')
    console.log(state.todos)
    // TODO localStrageにうまく入らない
    setList(state.todos)
    // 初期値に戻す
    state.editTodo = emptyTodo
    state.editIndex = null
  }
}

const actions = {
  async add ({ commit }, newTodo: Todo) {
    if (await beforeAddValidationMethod(newTodo)) {
      commit('add', newTodo)
      return true
    } else {
      return false
    }
  },
  async delete ({ commit }, deleteParam: deleteParam) {
    console.log(deleteParam)
    if (await beforeDeleteValidationMethod(deleteParam.index, deleteParam.title)) {
      commit('delete', deleteParam.index)
      return true
    } else {
      return false
    }
  },
  edit ({ commit }, index: number) {
    if (index < 0) {
      return false
    } else {
      commit('edit', index)
      return true
    }
  },
  async update ({ commit }) {
    if (await beforeAddValidationMethod(editTodo)) {
      commit('update', editTodo)
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
