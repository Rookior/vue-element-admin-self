export const Home = {
    path: '/',
    name: 'home',
    // meta: {
    title: '主页',
    // },
    component: 'Home'
};

export const login = {
    path: '/login',
    name: 'login',
    // meta: {
    title: '登录',
    // },
    component: 'login/Login'
};


// 因为动态添加路由在默认路由之后，所以404也动态最后添加，否则优先匹配通配符后，没办法匹配到正确的路由内
// export const page404 = {
//     path: '/*',
//     name: 'page404',
//     meta: {
//         title: '404'
//     },
//     component: () => import('../views/page404.vue')
// };

// 所有上面定义的路由都要写在下面的routers里
export const routes = [
    Home,
    login,
    // page404
];