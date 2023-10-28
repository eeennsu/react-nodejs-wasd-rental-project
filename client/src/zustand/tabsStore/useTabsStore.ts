import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { TabsStoreType } from './types';

const useTabsStore = create<TabsStoreType>()(
    devtools(
        (set) => ({
            activeTab: 0,
            setActiveTab: (changedTab) => set(() => ({ activeTab: changedTab }), false, 'SET_ACTIVE_TAB'),
        }),
    )
);

export default useTabsStore;