import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { domSetting } from 'common-toolbox'
import App from './App.vue'
import router from './router'
import './assets/main.css'

domSetting.setFontSize()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
