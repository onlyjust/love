export default [
    {
        path: '/person',
        component: () => import('@/views/person/Person'),
    },
    {
        path: '/person/basic',
        component: () => import('@/views/person/edit/Basic')
    },
    {
        path: '/person/question',
        component: () => import('@/views/person/edit/Question')
    },
    {
        path: '/person/lifePhoto',
        component: () => import('@/views/person/edit/LifePhoto')
    },
    {
        path: '/person/label',
        component: () => import('@/views/person/edit/Label')
    },
    {
        path: '/person/questionAnswer/:id:question',
        name: 'questionAnswer',
        component: () => import('@/views/person/edit/QuestionAnswer')
    },
]
