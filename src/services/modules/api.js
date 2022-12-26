import axios from 'axios';

const MOCKAPI_URL = 'https://63a654b9f8f3f6d4ab0a2899.mockapi.io/api/';

const mockApi = () => {
    let api = axios.create({
        baseURL: MOCKAPI_URL,
        params: {
            t: new Date().getTime()
        }
    });
    return api;
};

const Api = axios.create({
    baseURL: 'http://localhost:3000/api/'
});

export { mockApi, Api };
