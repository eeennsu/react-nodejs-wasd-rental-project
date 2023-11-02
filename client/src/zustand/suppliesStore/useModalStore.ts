import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IModalStore } from './types';

const useModalStore = create<IModalStore>()(
    devtools(
        (set) => ({
            isModalOpen: false,
            setIsModalOpen: (trigger) => set(() => ({ isModalOpen: trigger }), false, 'SET_IS_MODAL_OPEN'),

            detailTool: null,
            setDetailTool: (detailTool) => set(() => ({ detailTool }), false, 'SET_DETAIL_TOOL'),

            // detailVR: null,
            // setDetailVR: (detailVR) => set(() => ({ detailVR }), false, 'SET_DETAIL_VR'),

            // detailTablet: null,
            // setDetailTablet: (detailTablet) => set(() => ({ detailTablet }), false, 'SET_DETAIL_VR'),

            detailLectureRoom: null,
            setDetailLectureRoom: (detailLectureRoom) => set(() => ({ detailLectureRoom }), false, 'SET_DETAIL_VR'),

            resetDetailValue: () => set(() => ({ 
                detailTool: null,
                detailLectureRoom: null
            }), false, 'SET_RESET_DETAIL_VALUE'),

            isProcessLoading: false,
            setIsProcessLoading: (trigger) => set(() => ({ isProcessLoading: trigger }), false ,'SET_IS_PROCESS_LOADING'),
            
            modalStep: 'SUPPLY_DESC',
            setModalStep: (modalStep: ModalStep) => set(() => ({ modalStep }), false, 'SET_MODAL_STEP')
        }),
    )
);

export default useModalStore;