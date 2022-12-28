import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/views/Main.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/Home.vue'),
                meta: {
                    title: 'Home'
                }
            },
            {
                path: '/explore',
                name: 'Explore',
                component: () => import('@/views/explore/Explore.vue'),
            },
            {
                path: '/settings',
                name: 'Settings',
                component: () => import('@/views/settings/Settings.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start()
    }
    next()
})

router.afterEach((to, from) => {
    NProgress.done()
})

export default router;
