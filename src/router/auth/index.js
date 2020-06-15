export default [
    {
        path: '/auth/identity/auth',
        component: () => import('@/views/auth/IdentityAuth'),
    },
    {
        path: '/auth/identity/info',
        component: () => import('@/views/auth/IdentityInfo'),
    },
    {
        path: '/auth/index',
        component: () => import('@/views/auth/index'),
    }
]
