import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IStepStore } from './types';

const useStepStore = create<IStepStore>()(
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

            text: '',
            setText: (text) => set(() => ({ text: text }), false, 'SET_TEXT'),

            selectedRoom: '',
            setSelectedRoom: (selectedRoom) => set(() => ({ selectedRoom }), false, 'SET_SELECTED_ROOM'),

            isProcessLoading: false,
            setIsProcessLoading: (trigger) => set(() => ({ isProcessLoading: trigger }), false ,'SET_IS_PROCESS_LOADING'),
            
            systemStep: 'INIT',
            setSystemStep: (systemStep) => set(() => ({ systemStep }), false, 'SET_SYSTEM_STEP')
        }),
    )
);

export default useStepStore;