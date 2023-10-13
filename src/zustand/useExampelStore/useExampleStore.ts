import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { ExampleStoreType } from './types';

const useExampleStore = create<ExampleStoreType>()(
    devtools(
        persist(
            (set) => ({
                isLogin: false,
                setIsLogin: (trigger) => set(() => ({ isLogin: trigger }), false, 'SET_IS_LOGIN'),
            }),
            {
                name: 'login-storage',
                storage: createJSONStorage(() => sessionStorage)
            }
        )
    )
);

export default useExampleStore;