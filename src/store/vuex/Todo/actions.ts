// 本ファイルは不要となった
// import { ActionTree } from "vuex"
// import { TodoState, RootState, Todo } from "../types"

// const someAsyncAddMethod = async(newTodo: Todo) => {
//   // 裏側処理のバリデーション
//   if (newTodo.id === 0 || newTodo.title === '' || newTodo.limitDate === null || newTodo.emergency === 0 || newTodo.importance === 0) {
//     return new Error('invalid add property')
//   } else {
//     return true
//   }
// }


// const actions: ActionTree<TodoState, RootState> = {
//   add: async ({ commit }, newTodo: Todo) => {
//     if (await someAsyncAddMethod(newTodo)) {
//       commit('add', newTodo)
//       return true
//     }
//     return false
//   },
//   // TODO: delete処理を追加する時に使用
//   // remove:async ({commit}, id: number) => {
//   //   if (await someAsyncRemoveMethod(id)) {
//   //     commit('remove', id)
//   //     return true
//   //   }
//   //   return false
//   // }
// }

// export default actions