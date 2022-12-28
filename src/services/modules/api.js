import axios from 'axios';

const MOCKAPI_URL = 'https://63a654b9f8f3f6d4ab0a2899.mockapi.io/api/';

let api = null;
const mockApi = () => {
    if (api === null) {
        api = axios.create({
            baseURL: MOCKAPI_URL,
            params: {
                t: new Date().getTime()
            }
        });
    }
    return api;
};

export { mockApi };
