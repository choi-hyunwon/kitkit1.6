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
        name: 'detail',
        path: '/:detail',
        alias : '/detail',
        component: Detail,
        beforeEnter : requireAuth()
    }
];

export default routes
