// pages
import Index from './../views/pages/Index.vue'
import Menu from './../views/pages/doc/_menu.vue'
import Login from './../views/pages/Login.vue'

export const routes = [
    {
        name: 'index',
        path: '/',
        component: Index
    },
    {
        name: 'menu',
        path: '/doc/:menu',
        component: Menu
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    }
];

export default routes
