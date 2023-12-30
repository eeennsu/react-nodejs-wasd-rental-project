import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { getAllCount } from '../../RentalPage/utils/getAllCount';
import { notRentalToolCount_API, rentalToolCount_API } from '../../../api/tool/toolApi';

const TabletsInfo: FC = () => {
    
    const [tabletAbleCount, setTabletAbleCount] = useState<string>('');
    const [tabletDisableCount, setTabletDisAbleCount] = useState<string>('');

    useEffect(() => {
        (async () => {
            const { data: ableCount } = await rentalToolCount_API('타블렛'); 
            const { data: disableCount } = await notRentalToolCount_API('타블렛'); 
            
            if (ableCount && ableCount.result) {
                setTabletAbleCount(ableCount.result);
            }

            if (disableCount && disableCount.result) {
                setTabletDisAbleCount(disableCount.result);
            }
        })();
    }, []);

    return (
        <div className='flex flex-col items-center w-full gap-3 px-12 text-center'>
        <div className='flex items-center w-full'>
            <h3 className='flex-1'>보유중</h3>
            <span className='flex-1'>{getAllCount(tabletAbleCount, tabletDisableCount)}</span>
        </div>
        <div className='flex items-center w-full'>
            <h3 className='flex-1 text-xs'>🔴</h3>
            <span className='flex-1'>{tabletAbleCount}</span>                
        </div>
        <div className='flex items-center w-full'>
            <h3 className='flex-1 text-xs'>🟢</h3>
            <span className='flex-1'>{tabletDisableCount}</span>
        </div>
    </div>
    );
}

export default TabletsInfo;