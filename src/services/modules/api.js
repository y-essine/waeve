import axios from 'axios';

const mockApiURL = 'https://63a654b9f8f3f6d4ab0a2899.mockapi.io/api/';

const mockApi = axios.create({
    baseURL: mockApiURL
});

const Api = axios.create({
    baseURL: 'http://localhost:3000/api/'
});

export { mockApi, Api };
