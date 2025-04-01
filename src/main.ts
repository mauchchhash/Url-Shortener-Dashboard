import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axiosSetup from './setups/axiosSetups'

const app = createApp(App)

app.use(createPinia())
app.use(router)
axiosSetup()

app.mount('#app')
