import type { ITabsStore } from './types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useTabsStore = create<ITabsStore>()(
    devtools(
        (set) => ({
            activeTab: 0,
            setActiveTab: (changedTab) => set(() => ({ activeTab: changedTab }), false, 'SET_ACTIVE_TAB'),
        }),
    )
);

export default useTabsStore;