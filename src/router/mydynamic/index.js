export default [
    {
        path: '/mydynamic',
        component: () => import('@/views/mydynamic/MyDynamic')
    },
    {
        path: '/dynamicDetail/:id',
        name: 'dynamicDetail',
        component: () => import('@/views/dynamic/DynamicDetail')
    },
    {
        path: '/publish/dynamic',
        name: 'publishDynamic',
        component: () => import('@/views/mydynamic/PublishDynamic')
    }
]
