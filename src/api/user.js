import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login/user',
    method: 'post',
    data
  })
}

export function testToken() {
    return request({
      url: '/login/test',
      method: 'post'
    })
  }
  

