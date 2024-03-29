import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/vuex/Todo/index'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .mount('#app')
