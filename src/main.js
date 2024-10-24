import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/css/thalamus.css"
import 'vue-cal/dist/vuecal.css'
createApp(App).use(router).mount('#app')
