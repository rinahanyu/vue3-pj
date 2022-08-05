<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { Todo } from '../../store/vuex/types'
const store = useStore()

// TODO: storeから通常のrefで受け渡しするように変更する
// defineProps<{
//   editTodo: Todo
// }>()
// const editTitle = ref<string>(store.state.editTodo.title)
// const editDescription = ref<string>('')
// const editLimitDate = ref<Date>()
// const editEmergency = ref<number>(0)
// const editImportance = ref<number>(0)
const rates = [1, 2, 3, 4, 5]

const update = () => {
  if (false) {
    alert('必要事項が入力されていません。入力内容を再度確認してください。')
    return
  }
  store.dispatch('update', store.state.editTodo).then((response: boolean) => {
    if (response) {
      alert('更新に成功しました')
      // // 初期値に全て戻す
      //   editTitle.value = ''
      //   editDescription.value = ''
      //   editLimitDate.value = undefined
      //   editEmergency.value = 0
      //   editImportance.value = 0
      store.state.show_dialog = false
    } else {
      alert('更新に失敗しました。')
    }
  })
}
</script>

<template>
  <div class="dialog_background">
    <div class="dialog_container">
      <h2 style="margin-top: 10px">Here Edit</h2>
      <div class="edit_form mt-7">
        <div class="edit_form_frame">
          <label for="title">title</label>
          <input
            v-model="store.state.editTodo.title"
            name="title"
            type="text"
            style="outline: solid 1px gray; background-color: white;"
          >
        </div>
        <div class="edit_form_frame">
          <label for="description">description</label>
          <input
            v-model="store.state.editTodo.description"
            name="description"
            type="text"
            style="outline: solid 1px gray; background-color: white;"
          >
        </div>
        <div class="edit_form_frame">
          <label for="limitDate">limitDate</label>
          <input
            v-model="store.state.editTodo.limitDate"
            name="limitDate"
            type="date"
            style="outline: solid 1px gray; background-color: white;"
          >
        </div>
        <div class="edit_form_frame">
          <span style="font-weight: bold; margin-right: 10px">emergency</span>
          <span
            v-for="rate in rates"
            :key="rate"
          >
            <input
              v-model="store.state.editTodo.emergency"
              name="emergency"
              type="radio"
              :value="rate"
            >
            <label for="emergency">{{ rate }}</label>
          </span>
        </div>
        <div class="edit_form_frame">
          <span style="font-weight: bold; margin-right: 10px">importance</span>
          <span
            v-for="rate in rates"
            :key="rate"
          >
            <input
              v-model="store.state.editTodo.importance"
              name="importance"
              type="radio"
              :value="rate"
            >
            <label for="importance">{{ rate }}</label>
          </span>
        </div>
      </div>
      <div class="edit_button mt-5">
        <v-btn @click="update" class="update_btn"> update </v-btn>
        <v-btn @click="store.state.show_dialog = false" class="cancel_btn"> cancel </v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dialog_background {
  z-index:1;

  /* 背景設定 */
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  /* 画面中央 */
  display: flex;
  align-items: center;
  justify-content: center;
}
.dialog_container {
  background-color: rgba(245, 233, 209, 0.927);
  width: 600px;
  height: 300px;
}
.edit_form_frame {
  width: 60%;
  margin-left: 20%;
  margin-bottom: 5px;
}
.edit_form_frame label {
  font-weight: bold;
  margin-right: 10px;
}
.update_btn {
  background-color: rgba(241, 161, 50, 0.957);
  color: white;
  font-size: 15px;
  padding: 5px;
  border-radius: 5px;
  margin-right: 20px;
}
.cancel_btn {
  background-color: rgb(120, 116, 110);
  color: white;
  font-size: 15px;
  padding: 5px;
  border-radius: 5px;
}
</style>