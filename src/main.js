import App from './App.vue'
import './assets/scss/app.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap'

import { createApp } from 'vue'
import { router } from './router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import name-icon here
import { } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-regular-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'

// Insert name-icon here
library.add()

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
