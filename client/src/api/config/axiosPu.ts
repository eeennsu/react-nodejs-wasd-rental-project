import axios from 'axios';

export const PAGE_LIMIT = 10;
export const PAGE_LIMIT_2 = 8;

const axiosPub = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_SERVER_URL,
    headers: {
        "Content-Type": 'application/json'
    }
});

export default axiosPub;