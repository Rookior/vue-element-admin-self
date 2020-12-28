import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.use(VueRouter);


export const constantRoutes = routes

// 也可以通过定义完整默认路由与权限路由（包含component），通过角色参数获得的用户权限路由，与完整权限路由，进行filter筛选，生成最终的权限路由

export function componentRoute (res) {
  let accessRoutes = []

  res.forEach(element => {
    let route = {
      name: element.name,//路由名称
      path: element.path,//路由路径
      redirect: element.redirect ? element.redirect : null,
      meta: {
        "title": element.title,//路由页面标题     
      },
      component: () => import('@/views/' + element.component + '.vue')//路由组件
     
    }
    if(element.children){
      var children = componentRoute(element.children)
      route.children = children
    }
    accessRoutes.push(route)
  });
  return accessRoutes;
}

const routesList = componentRoute(routes)


const RouterConfig = {
  // mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: routesList
};


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export const router = new VueRouter(RouterConfig);
