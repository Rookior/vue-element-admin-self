import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.use(VueRouter);

const RouterConfig = {
  // mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes
};

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export const router = new VueRouter(RouterConfig);
