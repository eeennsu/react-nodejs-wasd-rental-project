import type { FC, PropsWithChildren } from 'react';
import { useSearchStore, useTabsStore, useToolStore } from '../../../../../../zustand';
import { shallow } from 'zustand/shallow';
import { motion } from 'framer-motion';

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
                <motion.button 
                    className='absolute md:w-[148px] w-[100px] max-3xl:h-[38px] h-[42px] max-3xl:-top-[37px] -top-[42px] trapezoid' 
                    onClick={handleSetActiveTab}
                    initial={{ opacity: 0.3, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <span className='flex items-center justify-center mt-4 text-xs font-semibold text-white md:text-sm'>
                        {children}
                    </span>
                </motion.button>
                <div className='md:w-[148px] w-[100px]' />
            </div>
        );
    }

    return (
        <button className='w-[100px] md:w-[148px] max-3xl:h-[38px] h-[42px] text-xs md:text-sm font-semibold bg-01 whitespace-nowrap text-white/60' onClick={handleSetActiveTab}>
            {children}
        </button>
    );
}

export default TabButton;