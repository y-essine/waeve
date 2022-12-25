import { createStore } from 'vuex';

import nav from '@/store/modules/nav';
import posts from '@/store/modules/posts';

const store = createStore({
    modules: {
        nav,
        posts
    }
});

export default store;
