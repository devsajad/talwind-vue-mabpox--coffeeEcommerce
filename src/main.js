import { createApp } from 'vue'
import App from '@/App.vue'
import './styles/main.css'
import router from './router/route'
import { createPinia } from 'pinia'
import 'mapbox-gl/dist/mapbox-gl.css'

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
