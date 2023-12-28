import type { IToolStore } from './types';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';

const useToolStore = createWithEqualityFn<IToolStore>()(
    devtools(
        (set) => ({
            tool: null,
            setTool: (tool) => set(() => ({ tool })),

            toolImg: null,
            setToolImg: (toolImg) => set(() => ({ toolImg })),

            curPage: 1,
            setCurPage: (curPage) => set(() => ({ curPage })),

            total: 1,
            setTotal: (total) => set(() => ({ total })),
        })
    )
);

export default useToolStore;