import { mockApi } from './api';

const postService = {
    getPosts: () => mockApi.get('/posts'),
    getPost: (id) => mockApi.get(`/posts/${id}`),
    createPost: (data) => mockApi.post('/posts', data),
    updatePost: (id, data) => mockApi.put(`/posts/${id}`, data),
    deletePost: (id) => mockApi.delete(`/posts/${id}`)
};

export default postService;
