import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue"
import DoctorView from "./views/DoctorView.vue"
import SearchView from "./views/SearchView.vue"
import NotFound from "./views/NotFound.vue"

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/doctor/:slug',
            name: 'doctor',
            component: DoctorView
        },
        {
            path: '/search',
            name: 'search',
            component: SearchView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
    ]
})
export { router }
