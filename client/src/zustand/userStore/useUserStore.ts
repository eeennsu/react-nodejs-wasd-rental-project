import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { UserStoreType } from './types';

export const LOGIN_SESSION_STORAGE = 'login-session-storage';

const useUserStore = create<UserStoreType>()(
    devtools(
        persist(
            (set) => ({
                isLogin: false,
                setLogin: () => set(() => ({ isLogin: true }), false, 'SET_LOGIN'),
                setLogout: () => set(() => ({ isLogin: false }), false, 'SET_LOGOUT'),

                login: null,
                setLoginInfo: (login) => set(() => ({ login }), false, 'SET_LOGIN_'),                
                token: '',
                setToken: (token) => set(() => ({ token }), false, 'SET_TOKEN'),
            }),
            {
                name: LOGIN_SESSION_STORAGE,
                storage: createJSONStorage(() => sessionStorage)
            }
        )
    )
);

export default useUserStore;