import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiInstagram, BiGithub, BiLinkedin, HiSolidMail, HiSolidPhone } from 'oh-vue-icons/icons'

addIcons(
    BiInstagram,
    BiGithub,
    BiLinkedin,
    HiSolidMail,
    HiSolidPhone
)

createApp(App)
    .use(router)
    .component('v-icon', OhVueIcon)
    .mount('#app')
