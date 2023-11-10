import type { FC, PropsWithChildren } from 'react';
import { useSearchStore, useStepStore, useSuppliesStore, useTabsStore } from '../../../../../../zustand';

type Props = {
    idx: number;
}

const CurTabButton: FC<PropsWithChildren<Props>> = ({ children, idx }) => {

    const { setActiveTab } = useTabsStore();
    const { setSearchTerm } = useSearchStore();
    const { resetAllDatas, resetPaginatedDatas } = useSuppliesStore();
    const { setSystemStep } = useStepStore();

    const handleSetActiveTab = () => {
        setSearchTerm('');
        // resetAllDatas();
        // resetPaginatedDatas();
       //  initModalStep(idx as ActiveTab, setSystemStep);
        setActiveTab(idx as ActiveTab);   
    }

    return (
        <div className='relative'>
            <button className='absolute w-[148px] h-10 -top-10 trapezoid' onClick={handleSetActiveTab}>
                <span className='flex items-center justify-center mt-4 text-sm font-semibold text-white'>
                    {children}
                </span>
            </button>
            <div className='w-[148px]'>
                
            </div>
        </div>
        // <button className='w-[132px] text-sm font-bold text-white bg-01' onClick={handleSetActiveTab}>
        //     {children}
        // </button>
    );
};

export default CurTabButton;