export default [
    {
        path: '/chat/:friend',
        component: () => import('@/views/message/ChatView'),
        props: true
    }
]
