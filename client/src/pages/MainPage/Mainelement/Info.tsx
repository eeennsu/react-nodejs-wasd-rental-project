import type { FC } from 'react';

const Info: FC = () => {
    
    return (
        <div className='grid grid-cols-3 divide-x h-20 mx-auto top-64 ml-[390px] items-center justify-center'>
          <div>오큘러스</div>
          <div>타블렛</div>
          <div>강의실</div>
        </div>
    );
};

export default Info;