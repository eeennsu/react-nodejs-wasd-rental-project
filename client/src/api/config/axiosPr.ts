import axios, { InternalAxiosRequestConfig } from 'axios';
import { LOGIN_SESSION_STORAGE } from '../../zustand/userStore/useUserStore';

const axiosPri = axios.create({
    baseURL: import.meta.env.DEV ? import.meta.env.VITE_LOCAL_SERVER_URL : import.meta.env.VITE_DEPLOY_SERVER_URL,
    headers: {
        "Content-Type": 'application/json'
    }
});

export const axiosPriImg = axios.create({
    baseURL: import.meta.env.DEV ? import.meta.env.VITE_LOCAL_SERVER_URL : import.meta.env.VITE_DEPLOY_SERVER_URL,
    headers: {
        "Content-Type": 'multipart/form-data'
    }
});

axiosPri.interceptors.request.use(
    configControll,
    (err) => Promise.reject(err)
);

axiosPriImg.interceptors.request.use(
    configControll,
    (err) => Promise.reject(err)
);

function configControll(config: InternalAxiosRequestConfig<any>) {
    const authInfo = JSON.parse(sessionStorage.getItem(LOGIN_SESSION_STORAGE)!);

        if (authInfo) {
            const token = authInfo?.state?.token;
            
            if (token) {
                config.headers.token = token;
            }
        }
        
        return config; 
}

export default axiosPri;