<script setup lang='ts'>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
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
