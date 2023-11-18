import { LOGIN_SESSION_STORAGE } from '../zustand/userStore/useUserStore';
import axios from 'axios';

export const PAGE_LIMIT = 10;

const axiosInst = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_SERVER_URL,
    headers: {
        "Content-Type": 'application/json',
    }
});

axiosInst.interceptors.request.use(
    (config) => {
        const authInfo = JSON.parse(sessionStorage.getItem(LOGIN_SESSION_STORAGE)!);

        if (authInfo) {
            const token = authInfo?.state?.token;

            if (token) {
                config.headers.token = token;
            }
        }

        return config;
    },
    (err) => Promise.reject(err)
)

export default axiosInst;