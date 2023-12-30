import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { notRentalToolCount_API, rentalToolCount_API } from '../../../api/tool/toolApi';
import { getAllCount } from '../../RentalPage/utils/getAllCount';

const VrsInfo: FC = () => {

    const [vrAbleCount, setVrAbleCount] = useState<string>('');
    const [vrDisableCount, setVrDisAbleCount] = useState<string>('');

    useEffect(() => {
        (async () => {
            const { data: ableCount } = await rentalToolCount_API('VR 실습기기'); 
            const { data: disableCount } = await notRentalToolCount_API('VR 실습기기'); 
            
            if (ableCount && ableCount.result) {
                setVrAbleCount(ableCount.result);
            }

            if (disableCount && disableCount.result) {
                setVrDisAbleCount(disableCount.result);
            }
        })();
    }, []);

    return (        
        <div className='flex flex-col items-center w-full gap-3 px-12 text-center'>
            <div className='flex items-center w-full'>
                <h3 className='flex-1'>보유중</h3>
                <span className='flex-1'>{getAllCount(vrAbleCount, vrDisableCount)}</span>
            </div>
            <div className='flex items-center w-full'>
                <h3 className='flex-1 text-xs'>🔴</h3>
                <span className='flex-1'>{vrAbleCount}</span>                
            </div>
            <div className='flex items-center w-full'>
                <h3 className='flex-1 text-xs'>🟢</h3>
                <span className='flex-1'>{vrDisableCount}</span>
            </div>
        </div>
    );
}

export default VrsInfo;