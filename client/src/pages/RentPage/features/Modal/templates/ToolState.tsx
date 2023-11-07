import type { FC } from 'react';

type Props = {
    status?: Tool['tool_state'];
}

const ToolState: FC<Props> = ({ status }) => {

    const isRentable = status === '대여가능';

    return (
        <p className='w-full'>
            <span className={`${isRentable ? 'font-bold' : 'text-gray-500 opacity-50 '}`}>
                대여 가능
            </span>
            {' / '}
            <span className={`${!isRentable ? 'font-bold' : 'text-secondary' }`}>
                대여 중
            </span>
        </p>
    );
};

export default ToolState;