// pages
import Index from './../views/pages/Index.vue'
import Menu from './../views/pages/doc/_menu.vue'

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
    }
];

export default routes
