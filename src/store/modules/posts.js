import { postService } from '@/services';
const { getPosts, getDummyPosts } = postService;

export default {
    namespaced: true,
    state: () => ({
        posts: [],
        isLoading: false,
        isLoaded: false
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
        }
    },
    actions: {
        setPosts({ commit }, posts) {
            commit('setPosts', posts);
        },
        async fetchPosts({ commit }, { page = 1, limit = 8 }) {
            commit('setLoading', true);
            commit('setLoaded', false);
            commit('pages/reset');
            const req = await getPosts(page, limit)
                .then((r) => {
                    commit('setLoading', false);
                    commit('setLoaded', true);
                    commit('pages/increment');
                    commit('setPosts', r.data);
                })
                .catch((err) => {
                    commit('setLoading', false);
                    commit('setLoaded', false);
                    console.log(err);
                });
        },
        async fetchMorePosts({ state, commit }, { page = 1, limit = 8 }) {
            if (state.isLoading || !state.isLoaded) return;
            commit('setLoading', true);
            const req = await getPosts(page, limit)
                .then((r) => {
                    commit('setLoading', false);
                    commit('pages/increment');
                    commit('addPosts', r.data);
                })
                .catch((err) => {
                    commit('setLoading', false);
                    console.log(err);
                });
        },
        setIsLoaded({ commit }, isLoaded) {
            commit('setLoaded', isLoaded);
        }
    },
    modules: {
        pages: {
            namespaced: true,
            state: () => ({
                pages: 0
            }),
            mutations: {
                increment(state) {
                    state.pages += 1;
                },
                reset(state) {
                    state.pages = 0;
                }
            },
            actions: {
                handleScrollFetch({ state, dispatch, rootGetters }) {
                    if (state.pages > 3 || !rootGetters['nav/isHome']) return;
                    const listRect = document.querySelector('#posts-list').getBoundingClientRect();
                    if (
                        listRect.bottom <
                        window.innerHeight + 200 + (listRect.height * 0.3) / state.pages
                    ) {
                        dispatch('posts/fetchMorePosts', { page: state.pages + 1 }, { root: true });
                    }
                }
            }
        }
    }
};
