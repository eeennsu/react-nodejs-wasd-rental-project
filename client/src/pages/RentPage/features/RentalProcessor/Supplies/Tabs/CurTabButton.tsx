import type { FC, PropsWithChildren } from 'react';
import { useSearchStore, useStepStore, useSuppliesStore, useTabsStore } from '../../../../../../zustand';

type Props = {
    idx: number;
}

const CurTabButton: FC<PropsWithChildren<Props>> = ({ children, idx }) => {

    const setActiveTab  = useTabsStore(state => state.setActiveTab);
    const setSearchTerm  = useSearchStore(state => state.setSearchTerm);

    const handleSetActiveTab = () => {
        setSearchTerm('');
        setActiveTab(idx as ActiveTab);   
    }

    return (
        <div className='relative'>
            <button className='absolute md:w-[148px] w-[100px] h-10 -top-10 trapezoid' onClick={handleSetActiveTab}>
                <span className='flex items-center justify-center mt-4 text-sm font-semibold text-white'>
                    {children}
                </span>
            </button>
            <div className='md:w-[148px] w-[100px]' />
        </div>
    );
};

export default CurTabButton;