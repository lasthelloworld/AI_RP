import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App);

app.use(VueAxios, axios)
    .provide('axios', app.config.globalProperties.axios)  // 全局挂载axios
    .use(store)
    .use(router)
    .mount('#app')



