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
        path: '/person/profile/photo',
        name: 'profilePhoto',
        component: () => import('@/views/person/edit/ProfilePhoto')
    },
    {
        path: '/person/question',
        component: () => import('@/views/person/edit/Question')
    },
    {
        path: '/person/lifePhoto/:datingId',
        name: 'lifePhoto',
        component: () => import('@/views/person/edit/LifePhoto')
    },
    {
        path: '/person/label',
        component: () => import('@/views/person/edit/Label')
    },
    {
        path: '/person/questionAnswer/:id/:question',
        name: 'questionAnswer',
        component: () => import('@/views/person/edit/QuestionAnswer')
    },
    {
        path: '/person/dynamic',
        name: 'personDynamic',
        component: () => import('@/views/person/TaDynamic'),
    },
    {
        path: '/person/hobby',
        component: () => import('@/views/person/edit/Hobby')
    },
    {
        path: '/person/voice',
        component: () => import('@/views/person/edit/Voice')
    },
]
