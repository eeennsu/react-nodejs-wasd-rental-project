import { Empty } from 'antd';
import type { FC } from 'react';

const EmptySearchResult: FC = () => {

    return (
        <div className='flex items-center justify-center flex-1'>
            <Empty description='검색 결과가 없습니다.' className='font-bold' />
        </div>
    );
};

export default EmptySearchResult;