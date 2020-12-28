const Mock = require('mockjs') // 获取mock对象
Mock.setup({ // 设置所有ajax请求的超时时间，模拟网络传输耗时
    timeout: 0 - 300
})
const Random = Mock.Random; // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http://mockjs.com/api' // 定义默认域名，随便写
const code = 200 // 返回的状态码

// 登录
Mock.mock(`${domain}/login/user`, 'post', (req) => {
    let requestData = JSON.parse(req.body)
    return {
        code,
        data: {
            token: requestData.userName + '&' + Random.date() + ' ' + Random.time(),
            message: '登录成功！'
        }
    }
});
// 获取角色
Mock.mock(`${domain}/user/getInfo`, 'post', (req) => {
    var request = JSON.parse(req.body)
    if (request.userName === 'admin') {
        return {
            code: 200,
            data: {
                message: '获取角色成功！',
                roles: ['admin']
            }
        }
    } else {
        return {
            code: 200,
            data: {
                message: '获取角色成功！',
                roles: ['user']
            }
        }
    }


});
// 根据角色获取路由
Mock.mock(`${domain}/user/permission`, 'post', (req) => {

    var request = JSON.parse(req.body)
    // request = roles
    if (request[0] === 'admin') {
        return {
            code,
            data: {
                accessRoutes: [
                    
                    {
                        path: '/admin',                      
                        name: 'admin',
                        title: '管理员',                     
                        component: 'layout/index',
                        redirect: '/admin/admin1',
                          children:[
                                {
                                   
                                    path: '/admin/admin1',
                                    name:'admin1',          
                                    title: '管理员权限页面1',
                                    component: 'permission/Admin1'
                                
                                },
                                {
                                    path: '/admin/admin2',
                                    name:'admin2',          
                                    title: '管理员权限页面2',
                                    component: 'permission/Admin2'
                                }
                            ]

                    }, {
                        // 将404通配放在最后，否则前面匹配跳到404，就无法向后匹配准确路由
                        path: '/*',
                        name: 'page404',
                        title: '404',
                        hidden: true,
                        component: 'layout/index',
                        redirect: '/page404',
                        children:[
                            {
                               
                                path: '/page404',
                                name:'page404',          
                                title: '页面不存在',
                                component: 'page404'
                            
                            }                           
                        ]
                        
                    }
                ],
                message: '获取权限成功'
            }
        }
    } else {
        return {
            code,
            data: {
                accessRoutes: [
                    {
                        path: '/user',                      
                        name: 'user',
                        title: '用户',                     
                        component: 'layout/index',
                        redirect: '/user/index',
                          children:[
                                {
                                   
                                    path: '/user/index',
                                    name:'userIndex',          
                                    title: '用户权限页面1',
                                    component: 'permission/User'
                                
                                }
                            ]

                    },
                    {
                        // 将404通配放在最后，否则前面匹配跳到404，就无法向后匹配准确路由
                        path: '/*',
                        name: 'page404',
                        title: '404',
                        hidden: true,
                        component: 'layout/index',
                        redirect: '/page404',
                        children:[
                            {
                               
                                path: '/page404',
                                name:'page404',          
                                title: '页面不存在',
                                component: 'page404'
                            
                            }                           
                        ]
                        
                    }
                ],
                message: '获取权限成功'
            }
        }
    }

});


