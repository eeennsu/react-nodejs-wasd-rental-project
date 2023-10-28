import type { FC } from 'react';
import { tabs } from '../../../../constants';
import { getTabName } from '../../../../utils/tabs';
import { useTabsStore } from '../../../../../../zustand/index';

import Table from '../Table/Table';
import TabButton from './TabButton';

const Supplies: FC = () => {

    const { activeTab } = useTabsStore();

    return (
        <div>
            <h2 className='text-2xl text-center'>
                기자재 정보
            </h2>
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
                <Table />
            </div>           
        </div>
    );
};

export default Supplies;