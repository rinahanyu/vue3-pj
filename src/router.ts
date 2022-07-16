import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/pages/Todo.vue'
import TodoList from './components/pages/TodoList.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/list', name: 'list', component: TodoList },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
