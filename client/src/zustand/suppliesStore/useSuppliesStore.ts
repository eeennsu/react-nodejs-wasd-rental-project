import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { SuppliesStoreType } from './types';

const useSuppliesStore = create<SuppliesStoreType>()(
    devtools(
        (set) => ({
            VRsData: [],
            setVRsData: (VRsData) => set(() => ({ VRsData }), false, 'SET_VRS_DATA'),

            tabletsData: [],
            setTabletsData: (tabletsData) => set(() => ({ tabletsData }), false, 'SET_TABLES_DATA'),

            lectureRoomsData: [],
            setLectureRoomsData: (lectureRoomsData) => set(() => ({ lectureRoomsData }), false, 'SET_LECTURE_ROOMS_DATA'),
        
            deleteAllDatas: () => set({ VRsData: [], tabletsData: [], lectureRoomsData: [] }, false, 'DELETE_ALL_DATAS')
        })
    )
);

export default useSuppliesStore;