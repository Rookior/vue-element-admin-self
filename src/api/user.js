import request from '@/utils/request'
// 登录
export function login (data) {
  return request({
    url: '/login/user',
    method: 'post',
    data
  })
}
//获取角色信息
export function getInfo (data) {
  return request({
    url: '/user/getInfo',
    method: 'post',
    data
  })
}
//根据角色获取路由
export function getPermission (data) {
  return request({
    url: '/user/permission',
    method: 'post',
    data
  })
}


