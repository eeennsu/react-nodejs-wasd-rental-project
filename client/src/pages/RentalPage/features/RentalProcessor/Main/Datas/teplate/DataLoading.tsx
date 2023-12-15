import type { FC } from 'react';
import { Skeleton } from 'antd';

const DataLoading: FC = () => {
    
    return Array(10).fill('').map((_, i) => (
        <Skeleton.Input key={i} active className='bg-03' />
    ));
}

export default DataLoading;