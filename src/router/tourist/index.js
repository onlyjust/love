export default [
    {
        path: '/tourist/preview/:datingId',
        name: 'preview',
        component: () => import('@/views/tourist/PreviewInfo.vue'),
        meta: {
            title: '个人资料'
        }
    }
]
