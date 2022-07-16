<script setup lang="ts">
import { ref } from 'vue'

const title = ref<string>('')
const description = ref<string>('')
const limit_date = ref<Date>()
</script>

<template>
  <div class="container">
    <h1>Welcome Todo App</h1>
    <div class="form_frame">
      <label for="title">title</label>
      <input v-model="title" name="title" type="text" />
    </div>
    <div class="form_frame">
      <label for="description">description</label>
      <input v-model="description" name="description" type="text" />
    </div>
    <div class="form_frame">
      <label for="limit_date">limit_date</label>
      <input v-model="limit_date" name="limit_date" type="date" />
    </div>
  </div>
</template>

<style scoped>

</style>