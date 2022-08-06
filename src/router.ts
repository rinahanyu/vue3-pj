import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/pages/TodoHome.vue'
import TodoList from './components/pages/TodoList.vue'
import TodoChart from './components/pages/TodoChart.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/list', name: 'list', component: TodoList },
  { path: '/chart', name: 'chart', component: TodoChart },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
