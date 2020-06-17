// pages
import Login from './../views/pages/Login.vue'
import Detail from './../views/pages/Detail.vue'
import {store} from "../store/store";
import E404 from './../components/error/404'

const requireAuth = () => (from, to, next) => {
    if(store.state.global.access) return next();
    next('/')
};

export const routes = [
    {
        name: 'index',
        path: '/',
        redirect : '/login'
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: '404',
        path: '/*',
        component: E404
    },
];

export default routes
