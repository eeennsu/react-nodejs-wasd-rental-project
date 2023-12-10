import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { UserStoreType } from './types';
import { createWithEqualityFn } from 'zustand/traditional';

export const LOGIN_SESSION_STORAGE = 'login-session-storage';

const useUserStore = createWithEqualityFn<UserStoreType>()(
    devtools(
        persist(
            (set) => ({
                isLogin: false,
                setLogin: () => set(() => ({ isLogin: true }), false, 'SET_LOGIN'),
                setLogout: () => set(() => ({ isLogin: false }), false, 'SET_LOGOUT'),

                user: null,
                setUser: (user) => set(() => ({ user }), false, 'SET_LOGIN_INFO'),                

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