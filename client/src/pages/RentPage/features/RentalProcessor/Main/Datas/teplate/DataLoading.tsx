import type { FC } from 'react';
import { Spin } from 'antd';

const DataLoading: FC = () => {
    
    return (
        <div className='flex items-center justify-center flex-1'>
            <Spin size='large' />
        </div>
    );
};

export default DataLoading;