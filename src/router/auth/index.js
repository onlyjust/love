export default [
    {
        path: '/identity',
        component: () => import('@/views/auth/IdentityAuth'),
    },
    {
        path: '/identityInfo',
        component: () => import('@/views/auth/IdentityInfo'),
    }
]
