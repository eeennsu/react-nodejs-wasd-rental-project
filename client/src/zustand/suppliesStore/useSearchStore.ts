import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { SearchStoreType } from './types';

const useSearchStore = create<SearchStoreType>()(
    devtools(
        (set) => ({
            searchTerm: '',
            setSearchTerm: (searchTerm) => set(() => ({ searchTerm }), false, 'SET_SEARCH_TERM'),

            searchedVRs: null,
            setSearchedVRs: (searchedVRs) => set(() => ({ searchedVRs }), false, 'SET_SEARCHED_VRS'),

            searchedTablets: null,
            setSearchedTablets: (searchedTablets) => set(() => ({ searchedTablets }), false, 'SET_SEARCHED_TABLETS'),

            searchedLectureRooms: null,
            setSearchedLectureRooms: (searchedLectureRooms) => set(() => ({ searchedLectureRooms }), false, 'SET_SEARCHED_LECTURE_ROOMS'),
        }),
    )
);

export default useSearchStore;