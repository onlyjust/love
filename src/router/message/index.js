export default {
    path: '/message',
    component : () => import('@/views/message/Message.vue'),
    meta: {
        title: '消息'
    }
}
