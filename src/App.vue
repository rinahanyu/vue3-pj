<script setup lang="ts">
import MainHeader from './components/globals/MainHeader.vue'
import MainFooter from './components/globals/MainFooter.vue'
import { setTodos } from './store/SetTodos'
import { SetTodoKey } from './store/Key'
import { provide } from 'vue'
provide(SetTodoKey, setTodos)
</script>

<template>
  <v-app>
    <MainHeader />
    <router-view />
    <MainFooter />
  </v-app>
</template>

<style>
body {
  background-color: rgb(219, 241, 175);
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>