export default [
    {
        path:'/login',
        name:'login',
        component: ()=> import('@/views/login/Login.vue')
    },
    {
        path: '/register',
        component: ()=> import('@/views/register/Register.vue')
    },
]
