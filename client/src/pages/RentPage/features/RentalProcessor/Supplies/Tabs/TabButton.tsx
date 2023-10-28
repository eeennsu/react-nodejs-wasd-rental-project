import type { FC, PropsWithChildren } from 'react';
import { useSearchStore, useTabsStore } from '../../../../../../zustand';

type Props = {
    idx: number;
    isCurTab: boolean;
}

const TabButton: FC<PropsWithChildren<Props>> = ({ children, idx, isCurTab }) => {

    const { setActiveTab } = useTabsStore();
    const { setSearchTerm } = useSearchStore();

    const handleSetActiveTab = () => {
        setSearchTerm('');
        setActiveTab(idx);   
    }

    return (
        <button className={`${isCurTab ? 'bg-amber-300' : 'bg-white'} w-20 px-4 py-2 rounded-sm whitespace-nowrap`} onClick={handleSetActiveTab}>
            {children}
        </button>
    );
};

export default TabButton;