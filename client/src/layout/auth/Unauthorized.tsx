import type { FC } from 'react';
import { Link } from 'react-router-dom';

const Unauthorized: FC = () => {



    return (
        <div className='flex flex-col items-center justify-center gap-12 mt-20'>
            <h1 className='text-4xl font-bold'>권한이 없습니다!</h1>
            <Link to='/' className='underline'>
                샘플 내비바 가기
            </Link>
        </div>
    );
};

export default Unauthorized;