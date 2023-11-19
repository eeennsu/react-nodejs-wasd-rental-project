import type { FC, PropsWithChildren } from 'react';
import { useSearchStore, useSuppliesStore, useTabsStore, useStepStore } from '../../../../../../zustand';

type Props = {
    idx: number;
}

const TabButton: FC<PropsWithChildren<Props>> = ({ children, idx }) => {

    const setActiveTab  = useTabsStore(state => state.setActiveTab);
    const setSearchTerm  = useSearchStore(state => state.setSearchTerm);

    const handleSetActiveTab = () => {
        setSearchTerm('');
        setActiveTab(idx as ActiveTab);   
    }

    return (
        <button className='w-[100px] md:w-[148px] h-10 text-sm font-semibold bg-01 whitespace-nowrap text-white/60' onClick={handleSetActiveTab}>
            {children}
        </button>
    );
};

export default TabButton;