export default [
    {
        path: '/identity',
        component: () => import('@/views/auth/IdentityAuth'),
    },
    {
        path: '/identityInfo',
        component: () => import('@/views/auth/IdentityInfo'),
    },
    {
        path: '/auth/index',
        component: () => import('@/views/auth/index'),
    }
]
