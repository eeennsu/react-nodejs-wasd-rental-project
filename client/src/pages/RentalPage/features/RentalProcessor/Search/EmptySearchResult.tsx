import type { FC } from 'react';
import { Empty } from 'antd';

const EmptySearchResult: FC = () => {

    return (
        <div className='flex items-center justify-center flex-grow'>
            <Empty description='검색 결과가 없습니다.' className='font-bold' />
        </div>
    );
};

export default EmptySearchResult;