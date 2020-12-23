import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.use(VueRouter);


export const constantRoutes = routes




export function componentRoute (res) {
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
