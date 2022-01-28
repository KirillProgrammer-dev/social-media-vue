import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import Profile from '../views/ProfileView.vue'
import Users from '../views/UsersView.vue'
import Registrate from '../views/RegistrateView.vue'
import Login from '../views/LoginView.vue'

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
        component: Profile
    },
    {
        path: '/registration',
        name: 'registration',
        component: Registrate
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router