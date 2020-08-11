export default [
    {
        path: '/mine',
        component : () => import('@/views/mine/Mine.vue'),
        meta: {
            title: '我的'
        }
    },
    {
        path: '/fans',
        component: () => import('@/views/mine/Fans.vue'),
    },
    {
        path: '/love',
        component: () => import('@/views/mine/Love.vue'),
    },
    {
        path: '/visit',
        component: () => import('@/views/mine/Visit.vue'),
    },
    {
        path: '/assetInfo',
        component: () => import('@/views/mine/Asset.vue'),
    },
]
