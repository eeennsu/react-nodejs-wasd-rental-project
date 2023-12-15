import type { ISearchStore } from './types';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';

const useSearchStore = createWithEqualityFn<ISearchStore>()(
    devtools(
        (set) => ({
            searchTerm: '',
            setSearchTerm: (searchTerm) => set(() => ({ searchTerm }), false, 'SET_SEARCH_TERM'),

            searchedResults: null,
            setSearchedResults: (searchedResults) => set(() => ({ searchedResults }), false, 'SET_SEARCHED_RESULTS')
        }),
    )
);

export default useSearchStore;