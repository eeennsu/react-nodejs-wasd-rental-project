import type { FC } from 'react';
import { tabs } from '../../../../constants';
import { getTabName } from '../../../../utils/tables';
import { useTabsStore } from '../../../../../../zustand/index';

import Table from '../Table/Table';
import TabButton from './TabButton';
import Loading from '../../../../../../components/Loading';
import Pagination from '../../Pagination/Pagination';

type Props = {
    isAnyoneLoading: boolean;
}

const Supplies: FC<Props> = ({ isAnyoneLoading }) => {

    const { activeTab } = useTabsStore();

    return (
        <div className='flex flex-col h-full'>
            <div className='flex gap-1'>
                {
                    tabs.map((tab, i) => (
                        <TabButton key={tab} idx={i} isCurTab={activeTab === i}>
                            {getTabName(tab)}
                        </TabButton>
                    ))
                }
            </div>
            <div className='border-t-[1px] border-black p-4 h-full'>
                {
                    isAnyoneLoading ? (
                        <Loading />
                    ) : (
                        <Table /> 
                    )
                }                
            </div>     
            <div className='flex justify-center w-full'>                
                <Pagination />
            </div>      
        </div>
    );
};

export default Supplies;