import type { FC } from 'react';

const Rentlist: FC = () => {
    
    return (
        <div className=' mt-[5px] max-w-4xl bg-01 h-[65%] mx-auto top-96 ml-[390px] items-center justify-center'>
          <div className='text-sm tracking-wide text-white align-middle ml-32 pt-10'>
            오큘러스 
          </div>
          <div className='space-y-4'>
            <div className='text-sm tracking-wider ml-10 align-middle relative text-white'>보유중</div>
            
            <div className='ml-12 text-xs'>🔴</div>
            
            <div className='ml-12 text-xs'>🟢</div>
          </div>
        </div>
    );
};

export default Rentlist;