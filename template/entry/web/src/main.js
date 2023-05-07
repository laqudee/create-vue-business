import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { domHandler } from 'common-toolbox'
import axios from './utils/axios'
import App from './App.vue'
import router from './router'
import './assets/main.css'

domHandler.setFontSize()

const app = createApp(App)

app.config.globalProperties.$axios = axios

app.use(createPinia())
app.use(router)

app.mount('#app')
