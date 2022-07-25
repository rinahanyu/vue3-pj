<script setup lang='ts'>
import MainHeader from './components/globals/MainHeader.vue'
import MainFooter from './components/globals/MainFooter.vue'
import { setTodos } from './store/SetTodos'
import { SetTodoKey } from './store/Key'
import { provide } from 'vue'

provide(SetTodoKey, setTodos)
</script>

<template>
  <MainHeader />
  <router-view />
  <MainFooter />
</template>

<style>
body {
  background-color: rgb(219, 241, 175);
}
</style>
