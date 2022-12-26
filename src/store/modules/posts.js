import { postService } from '@/services';
const { getPosts } = postService;

export default {
    namespaced: true,
    state: () => ({
        posts: [],
        pages: 0,
        isLoading: false,
        isLoaded: false,
    }),
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        addPosts(state, posts) {
            state.posts = [...state.posts, ...posts];
        },
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setLoaded(state, isLoaded) {
            state.isLoaded = isLoaded;
        },
        incrementPages(state) {
            state.pages += 1;
        },
        resetPages(state) {
            state.pages = 0;
        },
    },
    actions: {
        setPosts({ commit }, posts) {
            commit('setPosts', posts);
        },
        async fetchPosts({ commit }, page = 1, limit = 8) {
            commit('setLoading', true);
            commit('setLoaded', false);
            commit('resetPages');
            const req = await getPosts(page, limit)
                .then((res) => {
                    commit('setLoading', false);
                    commit('setLoaded', true);
                    commit('incrementPages');
                    commit('setPosts', res.data);
                })
                .catch((err) => {
                    commit('setLoading', false);
                    commit('setLoaded', false);
                    console.log(err);
                });
        },
        async fetchMorePosts({ commit }, page = 1, limit = 8) {
            commit('setLoading', true);
            const req = await getPosts(page, limit)
                .then((res) => {
                    commit('setLoading', false);
                    commit('incrementPages');
                    commit('addPosts', res.data);
                })
                .catch((err) => {
                    commit('setLoading', false);
                    console.log(err);
                });
        },
        checkIfScrolledToBottom({ commit, state, dispatch, rootGetters }, targetElement) {
            if (!state.isLoaded || state.pages > 3 || state.isLoading || !rootGetters['nav/isHome']) return;
            const isScrolledToBottom =
                window.scrollY + window.innerHeight >= targetElement.scrollHeight - 1000;

            if (isScrolledToBottom) {
                dispatch('fetchMorePosts', state.pages + 1);
            }
        },
        setIsLoaded({ commit }, isLoaded) {
            commit('setLoaded', isLoaded);
        }

    }
};
