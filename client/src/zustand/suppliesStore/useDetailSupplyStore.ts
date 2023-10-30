import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { DetailSupplyStoreType } from './types';

const useDetailSupplyStore = create<DetailSupplyStoreType>()(
    devtools(
        (set) => ({
            isModalOpen: false,
            setIsModalOpen: (trigger) => set(() => ({ isModalOpen: trigger }), false, 'SET_IS_MODAL_OPEN'),

            detailSupply: null,
            setDetailSupply: (detailSupply) => set(() => ({ detailSupply }), false, 'SET_DETAIL_SUPPLY'),
        }),
    )
);

export default useDetailSupplyStore;