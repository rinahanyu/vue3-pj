<script setup lang='ts'></script>

<template>
  <div class='container'>
    保存処理できるようになったら対応！（配列に追加する簡単な保存、firestoreへの保存、localstrageへの保存）
    <div><button class='home_link_button' ><router-link to='/' style='color: white;'>comback to HOME!!!</router-link></button></div>
  </div>
</template>

<style scoped>
.container {
  background-color: white;
  width: 700px;
  height: 330px;
  /* text-align: center; */
  position: relative;
}
.home_link_button {
  background-color: rgb(27, 160, 129);
  margin: 20px 5px;
  color: white !important;
}
</style>