import { Todo, deleteParamType, editDialogParamType } from "../types"
// import actions from './actions'
// import mutations from "./mutations"
import { ref, InjectionKey } from "vue"
import { createStore } from 'vuex'

const now = new Date()

// add/update裏側処理のバリデーション
const beforeAddUpdateValidationMethod = async(newTodo: Todo) => {
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
    state.todos.splice(index, 1)
    setList(state.todos)
  },
  update (state, editDialogParam: editDialogParamType) {
    state.todos[editDialogParam.editIndex] = editDialogParam.editTodo.value
    setList(state.todos)
  }
}

const actions = {
  async add ({ commit }, newTodo: Todo) {
    if (await beforeAddUpdateValidationMethod(newTodo)) {
      commit('add', newTodo)
      return true
    } else {
      return false
    }
  },
  async delete ({ commit }, deleteParam: deleteParamType) {
    if (await beforeDeleteValidationMethod(deleteParam.index, deleteParam.title)) {
      commit('delete', deleteParam.index)
      return true
    } else {
      return false
    }
  },
  async update ({ commit }, editDialogParam: editDialogParamType) {
    if (await beforeAddUpdateValidationMethod(editDialogParam.editTodo)) {
      commit('update', editDialogParam)
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
