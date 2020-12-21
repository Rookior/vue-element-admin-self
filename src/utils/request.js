import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
if(process.env.NODE_ENV === 'development') {
  // 开发环境
  var baseURL = "http://mockjs.com/api";  
} else if(process.env.NODE_ENV === 'production') {
  // 生产环境
  var baseURL = "http://www.baidu.com";  
}

const service = axios.create({
  baseURL: baseURL, // url = base url + request url
  timeout: 5000 // request timeout
})

service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.state.user.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = store.state.user.token
    }
    return config
  }
)

service.interceptors.response.use(

  response => {
    const res = response.data
    if (res.code == 200) {
      return res
    } else {
      Message({
        message: res.data.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res)
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
