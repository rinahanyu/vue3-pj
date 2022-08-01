import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { store } from './store/vuex/Todo/index'

const app = createApp(App)
// createApp(App).mount('#app')
app.use(router)
app.use(store)
app.mount('#app')