export const Home = {
    path: '/',
    name: 'home',
    meta: {
        title: '主页'
    },
    component: () => import('../views/Home.vue')
};

export const login = {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录'
    },
    component: () => import('../views/login/Login.vue')
};

// 所有上面定义的路由都要写在下面的routers里
export const routes = [
    Home,
    login
];