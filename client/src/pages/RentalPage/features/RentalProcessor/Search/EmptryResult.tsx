import type { FC } from 'react';
import { Empty } from 'antd';

type Props = {
    msg: string;
}

const EmptryResult: FC<Props> = ({ msg }) => {

    return (
        <div className='flex items-center justify-center flex-grow'>
            <Empty description={msg} className='font-bold' />
        </div>
    );
};

export default EmptryResult;