import type { FC } from 'react';

const RoomsInfo: FC = () => {

    return (
        <div className='flex flex-col items-center w-full gap-3 px-12 text-center'>
            <div className='flex items-center w-full'>
                <h3 className='flex-1'>보유중</h3>
                <span className='flex-1'>8개</span>
            </div>
            <div className='flex items-center w-full'>
                <h3 className='flex-1 text-xs'>🔴</h3>
                <span className='flex-1'>0개</span>                
            </div>
            <div className='flex items-center w-full'>
                <h3 className='flex-1 text-xs'>🟢</h3>
                <span className='flex-1'>8개</span>
            </div>
        </div>
    );
}

export default RoomsInfo;