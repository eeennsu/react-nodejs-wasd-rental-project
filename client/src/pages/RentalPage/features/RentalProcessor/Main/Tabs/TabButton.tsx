import type { FC, PropsWithChildren } from 'react';
import { useSearchStore, useTabsStore, useToolStore } from '../../../../../../zustand';
import { shallow } from 'zustand/shallow';

type Props = {
    idx: number;
}

const TabButton: FC<PropsWithChildren<Props>> = ({ children, idx }) => {

    const activeTab = useTabsStore(state => state.activeTab);
    const setActiveTab = useTabsStore(state => state.setActiveTab);
    const setCurPage = useToolStore(state => state.setCurPage);
    const { setSearchTerm, searchedResults, setSearchedResults } = useSearchStore(state => ({
        setSearchTerm: state.setSearchTerm, searchedResults: state.searchedResults, setSearchedResults: state.setSearchedResults
    }), shallow);

    const handleSetActiveTab = () => {
        setSearchTerm('');
        setActiveTab(idx as ActiveTab);   
        setCurPage(1);
        searchedResults && setSearchedResults(null);
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