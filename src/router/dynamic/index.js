export default {
    path: '/dynamic',
    component : () => import('@/views/dynamic/Dynamic.vue'),
    meta: {
        title: '动态'
    }
}
