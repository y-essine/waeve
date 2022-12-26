import { postService } from '@/services';
const { getPosts } = postService;

export default {
    namespaced: true,
    state: () => ({
        posts: [],
        isLoading: false,
        isLoaded: false,
    }),
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
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
        async fetchPosts({ commit }) {
            commit('setLoading', true);
            const req = await getPosts()
                .then((res) => {
                    commit('setLoading', false);
                    commit('setLoaded', true);
                    commit('setPosts', res.data);
                })
                .catch((err) => {
                    commit('setLoading', false);
                    commit('setLoaded', false);
                    console.log(err);
                });
        }
    }
};
