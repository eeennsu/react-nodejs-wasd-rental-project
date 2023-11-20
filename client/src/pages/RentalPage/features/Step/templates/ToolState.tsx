import type { FC } from 'react';

type Props = {
    status?: Tool['tool_state'];
}

const ToolState: FC<Props> = ({ status }) => {
    
    return (
        <p className='w-full'>
            <span className={`${status === '대여가능' ? 'font-bold' : 'text-gray-500 opacity-50 '}`}>
                대여 가능
            </span>
            {' / '}
            <span className={`${status === '대여중' ? 'font-extrabold' : 'text-gray-500 opacity-50'}`}>
                대여 중
            </span>
            {' / '}
            <span className={`${status === '대여불가' ? 'font-bold' : 'text-gray-500 opacity-50'}`}>
                대여 불가능
            </span>
        </p>
    );
};

export default ToolState;