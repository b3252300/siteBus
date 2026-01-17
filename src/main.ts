import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'

import 'leaflet/dist/leaflet.css'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import './assets/main.css'
import App from './App.vue'
import router from './router'
import "./style/main.scss"



const app = createApp(App)


const pinia = createPinia()

pinia.use(piniaPluginPersistedstate) 
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
