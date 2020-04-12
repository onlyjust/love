export default [
    {
        path: '/mydynamic',
        component: () => import('@/views/mydynamic/MyDynamic')
    },
    {
        path: '/dynamicDetail',
        component: () => import('@/views/dynamic/DynamicDetail')
    }
]
