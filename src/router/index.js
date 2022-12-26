import { createRouter, createWebHistory } from 'vue-router';
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

export default router;
