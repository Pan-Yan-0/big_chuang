import { createRouter, createWebHistory } from 'vue-router'

import Login from '../view/login.vue'
import Home from '../view/home.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../view/register.vue')
        },
        {
            path:'/home',
            name:'home',
            component: Home
        }
    ]
})

export default router
