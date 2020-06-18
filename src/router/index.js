// pages
import Login from './../views/pages/Login.vue'
import Detail from './../views/pages/Detail.vue'
import {store} from "../store/store";
import E404 from './../components/error/404'

const requireAuth = () => (from, to, next) => {
    let detailList = ['Dashboard', 'Manage', 'Dashboard', 'Create', 'Download' ,'Support'];
    if(detailList.indexOf(from.params.detail) === -1) next('/error');
    else if(store.state.global.access) return next();
    else next('/')
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
        name: 'error',
        path: '/error',
        redirect : '/E404'
    },
    {
        name: 'E404',
        path: '/E404',
        component: E404,
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
