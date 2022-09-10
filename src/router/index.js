import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import SkillsPage from '../pages/SkillsPage.vue'
import WorksPage from '../pages/WorksPage.vue'
import ContactPage from '../pages/ContactPage.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/skills',
        component: SkillsPage
    },
    {
        path: '/works',
        component: WorksPage
    },
    {
        path: '/contact',
        component: ContactPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router