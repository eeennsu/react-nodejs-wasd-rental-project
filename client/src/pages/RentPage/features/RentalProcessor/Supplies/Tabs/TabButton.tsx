import type { FC, PropsWithChildren } from 'react';
import { useSearchStore, useSuppliesStore, useTabsStore } from '../../../../../../zustand';
import useModalStore from '../../../../../../zustand/suppliesStore/useStepStore';

type Props = {
    idx: number;
}

const TabButton: FC<PropsWithChildren<Props>> = ({ children, idx }) => {

    const { setActiveTab } = useTabsStore();
    const { setSearchTerm } = useSearchStore();
    const { resetAllDatas, resetPaginatedDatas } = useSuppliesStore();
    const { setSystemStep } = useModalStore();

    const handleSetActiveTab = () => {
        setSearchTerm('');
        // resetAllDatas();
        // resetPaginatedDatas();
        // initModalStep(idx as ActiveTab, setSystemStep);
        setActiveTab(idx as ActiveTab);   
    }

    return (
        <button className='w-[148px] h-10 text-sm font-semibold bg-01 whitespace-nowrap text-white/60' onClick={handleSetActiveTab}>
            {children}
        </button>
    );
};

export default TabButton;