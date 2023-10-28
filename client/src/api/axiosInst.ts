import axios from 'axios';

const jsonServer = 'http://localhost:3500/'

const axiosInst = axios.create({
    baseURL: jsonServer,
    // headers,
});

export default axiosInst;