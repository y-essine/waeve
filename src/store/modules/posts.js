import { createStore } from 'vuex';

export default createStore({
    namespaced: true,
    state: {
        posts: []
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        }
    },
    actions: {
        setPosts({ commit }, posts) {
            commit('setPosts', posts);
        }
    }
});
