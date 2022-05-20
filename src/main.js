import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'

import './assets/styles/vendor.css'
createApp(App).use(router).use(store).use(VueSweetalert2).use(VueAxios, axios).mount('#app')
