import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/login/user',
    method: 'post',
    data
  })
}

export function getInfo (data) {
  return request({
    url: '/user/getInfo',
    method: 'post',
    data
  })
}

export function getPermission (data) {
  return request({
    url: '/user/permission',
    method: 'post',
    data
  })
}


export function testToken () {
  return request({
    url: '/login/test',
    method: 'post'
  })
}


