import '../src/assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import {useDarkModeStore } from './store/store'

const app = createApp(App)
const pinia = createPinia();

app.use(router)
app.use(pinia);
app.mount('#app')

const darkModeStore = useDarkModeStore();
darkModeStore.initializeDarkMode();
darkModeStore.initialChat();