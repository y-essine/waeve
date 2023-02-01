import { extend } from 'umi-request';

const DUMMYAPI_URL = 'https://dummyapi.io/data/v1';

const dummyApi = extend({
    prefix: DUMMYAPI_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'app-id': import.meta.env.VITE_DUMMYAPI_KEY
    },
    params: {
        t: Date.now()
    },
    errorHandler: (error) => {
        console.log(error);
    }
});

export { dummyApi };
