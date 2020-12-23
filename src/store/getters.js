const getters = {
  roles: state => state.user.roles,
  accessRoutes: state => state.user.accessRoutes,  //权限路由
  routes: state => state.user.routes,
}
export default getters