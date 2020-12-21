import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
Vue.use(VueRouter);

const RouterConfig = {
    // mode: 'history',
    routes
};

export const router = new VueRouter(RouterConfig);