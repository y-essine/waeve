import { createRouter, createWebHistory } from 'vue-router';

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
                component: () => import('@/views/Explore.vue')
            },
            {
                path: '/settings',
                name: 'Settings',
                component: () => import('@/views/Settings.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
