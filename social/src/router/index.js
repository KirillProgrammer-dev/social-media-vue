import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import Users from '../views/UsersView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/search',
        name: 'search',
        component: Users
    },
    {
        path: '/profile/:id',
        name: 'profile',
        component: ProfileView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router