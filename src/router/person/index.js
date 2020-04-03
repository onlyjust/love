export default [
    {
        path: '/person',
        component: () => import('@/views/person/Person'),
    },
    {
        path: '/person/basic',
        component: () => import('@/views/person/edit/Basic')
    }
]
