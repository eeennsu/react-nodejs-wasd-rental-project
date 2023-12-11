import axios from 'axios';
import { LOGIN_SESSION_STORAGE } from '../../zustand/userStore/useUserStore';

const axiosPri = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_SERVER_URL,
    headers: {
        "Content-Type": 'application/json'
    }
});

axiosPri.interceptors.request.use(
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

export default axiosPri;