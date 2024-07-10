import { createRouter, createWebHistory } from 'vue-router'

import Login from '../view/login.vue'

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
        }
    ]
})

export default router
