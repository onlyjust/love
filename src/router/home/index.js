export default {
    path: '/home',
    component : () => import('@/views/home/Home.vue'),
    meta: {
        wechatAuth: true // 如果此路由需要微信授权请设置为true,默认为false
    },
}
