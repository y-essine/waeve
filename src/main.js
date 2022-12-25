import { createApp } from 'vue';
import router from '@/router';
import store from '@/store';

import App from '@/App.vue';
import '@/assets/fonts/inter.css';
import '@/style.css';

createApp(App).use(router).use(store).mount('#app');
