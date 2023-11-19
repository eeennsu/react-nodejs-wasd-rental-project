import type { FC } from 'react';
import { getTabName } from '../../../../utils/tables';
import { tabs } from '../../../../constants';
import TabButton from './TabButton';

const Tabs: FC = () => {
    
    return (
        <div className='flex mt-2.5 bg-01'>
            {
                tabs.map((tab, i) => (
                    <TabButton key={tab} idx={i}>
                        {getTabName(tab)}
                    </TabButton>
                ))
            }
        </div>
    );
};

export default Tabs;