import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { UserStoreType } from './types';

export const LOGIN_SESSION_STORAGE = 'login-session-storage';

const useUserStore = create<UserStoreType>()(
    devtools(
        persist(
            (set) => ({
                // id: '',
                // setId: (id) => set(() => ({ id }), false, 'SET_ID'),

                // password: '',
                // setPassword: (password) => set(() => ({ password }), false, 'SET_PASSWORD'),

                isLogin: false,
                setLogin: () => set(() => ({ isLogin: false }), false, 'SET_LOGIN'),
                setLogout: () => set(() => ({ isLogin: true }), false, 'SET_LOGOUT'),

                loginResponse: null,
                setLoginResponse: (loginResponse) => set(() => ({ loginResponse }), false, 'SET_LOGIN_RESPONSE')
            }),
            {
                name: LOGIN_SESSION_STORAGE,
                storage: createJSONStorage(() => sessionStorage)
            }
        )
    )
);

export default useUserStore;