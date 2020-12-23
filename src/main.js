import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {router} from './router/index';
import store from './store';
import App from './App.vue'
import Mock from './mock'
Vue.use(ElementUI);


// 在页面加载时读取sessionStorage
if (sessionStorage.getItem('store')) {
    store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStorage.getItem('store'))))
}
// 在页面刷新时将store保存到sessionStorage里
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('store', JSON.stringify(store.state))
})

// 存在动态路由则添加
if(store.getters.accessRoutes){
    console.log("存在动态路由")
    const res = store.getters.accessRoutes;
    let accessRoutes = []

    res.forEach(element => {
        let route = {
            name: element.name,//路由名称
            path: element.path,//路由路径
            
            meta: {                                       
                "title": element.title,//路由页面标题     
            },
            component: () => import('@/views/'+element.component+'.vue')//路由组件
        }
        accessRoutes.push(route)
    });
                       
    router.addRoutes(accessRoutes)
}

router.beforeEach((to, from, next) => {
    var getAuth = store.state.user.token;
    if(getAuth){   
        if (to.path === '/login') {
            next({ path: '/' })
        } else {

            const hasRoles = store.getters.roles && store.getters.roles.length > 0
            if (hasRoles) {
                next()
              } else {
                
                   store.dispatch('getInfo',{"userName":getAuth.split('&')[0]}).then((res) => {
                        
                        const { roles } = res
                        store.dispatch('permission', roles).then((accessRoutes)=>{
                            // let accessRoutes = []

                            // res.forEach(element => {
                            //     let route = {
                            //         name: element.name,//路由名称
                            //         path: element.path,//路由路径
                                   
                            //         meta: {                                       
                            //             "title": element.title,//路由页面标题     
                            //         },
                            //         component: () => import('@/views/'+element.component+'.vue')//路由组件
                            //     }
                            //     accessRoutes.push(route)
                            // });
                           
                            router.addRoutes(accessRoutes)
                            next({ ...to, replace: true })
                        })
                       
                       
                    }).catch(err => {
                        console.log(err); //登录失败提示错误
                    });
               
              }
          
        } 
    }else{
        if (to.path === '/login') {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
        } 
    }

  })
// 修改页面title
  router.afterEach((to, from) => {  
     window.document.title = to.meta.title
   })

new Vue({
    el:'#app',
    router: router,
    store: store,
    render: h => h(App)
  })
  