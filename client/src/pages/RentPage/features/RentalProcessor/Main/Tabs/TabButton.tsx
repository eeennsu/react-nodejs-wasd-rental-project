import type { FC, PropsWithChildren } from 'react';
import { useSearchStore, useTabsStore, useToolStore } from '../../../../../../zustand';

type Props = {
    idx: number;
}

const TabButton: FC<PropsWithChildren<Props>> = ({ children, idx }) => {

    const { activeTab, setActiveTab } = useTabsStore();
    const { setSearchTerm }  = useSearchStore();
    const { setPage } = useToolStore();

    const handleSetActiveTab = () => {
        setSearchTerm('');
        setActiveTab(idx as ActiveTab);   
        setPage(1);
    }

    if (activeTab === idx) {
        return (
            <div className='relative'>
                <button className='absolute md:w-[148px] w-[100px] h-10 -top-10 trapezoid' onClick={handleSetActiveTab}>
                    <span className='flex items-center justify-center mt-4 text-sm font-semibold text-white'>
                        {children}
                    </span>
                </button>
                <div className='md:w-[148px] w-[100px]' />
            </div>
        )
    }

    return (
        <button className='w-[100px] md:w-[148px] h-10 text-sm font-semibold bg-01 whitespace-nowrap text-white/60' onClick={handleSetActiveTab}>
            {children}
        </button>
    );
};

export default TabButton;