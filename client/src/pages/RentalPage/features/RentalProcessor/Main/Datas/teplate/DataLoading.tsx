import type { FC } from 'react';
import { Skeleton } from 'antd';

const DataLoading: FC = () => {
    
    return Array(10).fill('').map((_, i) => (
        <Skeleton.Input key={i} active />
    ))
};

export default DataLoading;