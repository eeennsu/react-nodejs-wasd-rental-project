import axios from 'axios';

const axiosInst = axios.create({
    baseURL: '서버 주소',
    // headers,
});

export default axiosInst;