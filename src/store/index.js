import { createStore } from 'vuex';

import nav from '@/store/modules/nav';
import device from '@/store/modules/device';
import posts from '@/store/modules/posts';

const store = createStore({
    modules: {
        nav,
        posts,
        device
    }
});

export default store;
