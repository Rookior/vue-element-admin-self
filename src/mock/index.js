const Mock = require('mockjs') // 获取mock对象
Mock.setup({ // 设置所有ajax请求的超时时间，模拟网络传输耗时
    timeout: 0-300
})


const Random = Mock.Random; // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http://mockjs.com/api' // 定义默认域名，随便写
const code = 200 // 返回的状态码
// 随机生成文章数据
const postData = req => {
    let requestData=JSON.parse(req.body)
    if(requestData.userName  == 'admin' && requestData.password == '123456'){
         // 返回状态码和文章数据posts
        return {
            code,
            data:{
                token: Random.date() + ' ' + Random.time(),
                message:'登录成功！'
            }
        }
    }else{
        return {
            code:400,
            data:{
                message:'用户名或密码错误！'
            }
        }
    }
   
}
// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/login/user`, 'post', postData);


