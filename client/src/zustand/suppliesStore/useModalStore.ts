import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ModalStoreType } from './types';

const useModalStore = create<ModalStoreType>()(
    devtools(
        (set) => ({
            isModalOpen: false,
            setIsModalOpen: (trigger) => set(() => ({ isModalOpen: trigger }), false, 'SET_IS_MODAL_OPEN'),

            detailSupply: null,
            setDetailSupply: (detailSupply) => set(() => ({ detailSupply }), false, 'SET_DETAIL_SUPPLY'),

            isProcessLoading: false,
            setIsProcessLoading: (trigger) => set(() => ({ isProcessLoading: trigger }), false ,'SET_IS_PROCESS_LOADING'),
            
            modalStep: 'SUPPLY_DESC',
            setModalStep: (modalStep: ModalStep) => set(() => ({ modalStep }), false, 'SET_MODAL_STEP')
        }),
    )
);

export default useModalStore;