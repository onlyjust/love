export default [
    {
        path: '/mine',
        component : () => import('@/views/mine/Mine.vue'),
        /*meta: {
            wechatAuth: true // 如果此路由需要微信授权请设置为true,默认为false
        },*/
        meta: {
            title: '我的'
        }
    },
    {
        path: '/fans',
        component: () => import('@/views/mine/Fans.vue'),
    }
]
