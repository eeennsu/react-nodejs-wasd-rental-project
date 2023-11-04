import axios from 'axios';

const jsonServer = 'http://localhost:3500/'

export const axiosInstJsonServer = axios.create({
    baseURL: jsonServer,
});

const axiosInst = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_SERVER_URL,
    // headers,
});

export default axiosInst;