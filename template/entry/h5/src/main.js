import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import axios from './utils/axios'
import router from './router'
import './assets/reset.css'
import 'vant/lib/index.css'
import 'amfe-flexible'

const app = createApp(App)

app.config.globalProperties.$axios = axios

app.use(createPinia())
app.use(router)

app.mount('#app')
