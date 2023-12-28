import type { IStepStore } from './types';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';

const useStepStore = createWithEqualityFn<IStepStore>()(
    devtools(
        (set) => ({
            isModalOpen: false,
            setIsModalOpen: (trigger) => set(() => ({ isModalOpen: trigger }), false, 'SET_IS_MODAL_OPEN'),

            text: '',
            setText: (text) => set(() => ({ text }), false, 'SET_TEXT'),

            selectedRoom: null,
            setSelectedRoom: (selectedRoom) => set(() => ({ selectedRoom }), false, 'SET_SELECTED_ROOM'),

            isProcessLoading: false,
            setIsProcessLoading: (trigger) => set(() => ({ isProcessLoading: trigger }), false ,'SET_IS_PROCESS_LOADING'),
            
            systemStep: 'INIT',
            setSystemStep: (systemStep) => set(() => ({ systemStep }), false, 'SET_SYSTEM_STEP'),
        }),
    )
);

export default useStepStore;