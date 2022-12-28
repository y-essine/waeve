import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';

import Explore from '@/views/explore/Explore.vue';
import Settings from '@/views/settings/Settings.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Main.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/Home.vue')
            },
            {
                path: '/explore',
                name: 'Explore',
                component: Explore
            },
            {
                path: '/settings',
                name: 'Settings',
                component: Settings
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
