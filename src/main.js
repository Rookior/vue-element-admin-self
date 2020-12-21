import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {router} from './router/index';
import store from './store';
import App from './App.vue'
import Mock from './mock'



// 在页面加载时读取sessionStorage
if (sessionStorage.getItem('store')) {
    store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStorage.getItem('store'))))
}
// 在页面刷新时将store保存到sessionStorage里
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('store', JSON.stringify(store.state))
})

router.beforeEach((to, from, next) => {
    var getAuth = store.state.user.token;
    if(getAuth){   
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            next()
        } 
    }else{
        if (to.path === '/login') {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
        } 
    }
  })

Vue.use(ElementUI);
new Vue({
    el:'#app',
    router: router,
    store: store,
    render: h => h(App)
  })
  