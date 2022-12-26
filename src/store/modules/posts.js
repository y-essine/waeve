import { postService } from '@/services';
const { getPosts } = postService;

export default {
    namespaced: true,
    state: () => ({
        posts: [
            {
                createdAt: '2022-12-23T22:40:23.693Z',
                content: 'Necessitatibus laudantium inventore quis aut illo maxime ex corporis.',
                reactions: '4',
                images: ['https://loremflickr.com/640/480/transport'],
                id: '1',
                author: {
                    createdAt: '2022-12-24T15:40:21.972Z',
                    name: 'Marilyne',
                    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1065.jpg',
                    username: 'Randi89',
                    verified: true,
                    id: 'd3de8df2-4a74-4188-9549-5429d175c9c3'
                }
            }
        ]
    }),
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        }
    },
    actions: {
        setPosts({ commit }, posts) {
            commit('setPosts', posts);
        },
        async fetchPosts({ commit }) {
            const posts = await getPosts();
            commit('setPosts', posts);
        }
    }
};
