# vue-element-admin
vue-element-admin官方实践

测试

#### vuex刷新数据不丢失
main.js
<pre>
  <code>
    // 在页面加载时读取sessionStorage
    if (sessionStorage.getItem('store')) {
        store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    // 在页面刷新时将store保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('store', JSON.stringify(store.state))
    })
  </code>
</pre>


#### 动态路由核心

1. 根据数组生成动态路由对象（component不能直接传和存储，需要通过组件名称生成）
2. 将404通配放在最后，否则前面匹配跳到404，就无法向后匹配准确路由
3. 通过addRoutes添加动态路由

 <pre><code>
 var res = [
            {
                path: '/user',
                name: 'user',             
                title: '权限页面',      
                component: 'User'
            },
            {
                  path: '/*',
                  name: 'page404',

                  title: '404',

                  component: 'page404'
              }
          ]
          let accessRoutes = []
          res.forEach(element => {
            let route = {
              name: element.name,//路由名称
              path: element.path,//路由路径
              meta: {
                "title": element.title,//路由页面标题     
              },
              component: () => import('@/views/' + element.component + '.vue')//路由组件
            }
            accessRoutes.push(route)
          });
         
          router.addRoutes(accessRoutes)
 </code></pre>
 
 #### 修改页面title
 main.js
 <pre>
   <code>
     router.afterEach((to, from) => {  
       window.document.title = to.meta.title
     })
   </code>
 </pre>
 
#### 刷新页面动态路由不丢失
main.js
<pre>
  <code>
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
  
  </code>
</pre>

