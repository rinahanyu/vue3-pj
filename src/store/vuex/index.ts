// 本ファイルは不要となった
// // import { createStore } from 'vuex'
// // import { Todo, TodoList } from './types'

// // const now = new Date()
// // const setList = (state_list: Todo[]) => {
// //   localStorage.setItem('state_list', JSON.stringify(state_list))
// // }

// // const state: TodoList = {
// //   todoList: [
// //     {
// //       id: 0,
// //       title: 'start todo!',
// //       description: 'todo start',
// //       limitDate: now,
// //       emergency: 3,
// //       importance: 3,
// //     }
// //   ]
// // }

// // const mutations = {
// //   addTodo: (state: TodoList, newTodo: Todo) => {
// //     state.todoList.push(newTodo)
// //     setList(state.todoList)
// //   }
// // }

// import Vuex, { StoreOptions } from 'vuex'
// import { RootState } from './types'
// import { todos } from './Todo'
// import { useAccessor } from 'typed-vuex'

// const store: StoreOptions<RootState> = {
//   state: {
//     version: '1.0.0'
//   },
//   modules: {
//     todos,
//   }
// }

// export default new Vuex.Store<RootState>(store)
// // export const accessor = useAccessor(new Vuex.Store<RootState>(store), store)
