// pages
import Login from './../views/pages/Login.vue'
import Detail from './../views/pages/Detail.vue'

export const routes = [
    {
        name: 'login',
        path: '/',
        component: Login
    },
    {
        name: 'detail',
        path: '/:user/:detail',
        component: Detail
    }
];

export default routes
