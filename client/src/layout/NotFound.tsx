import type { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC = () => {

    return (
        <main className='flex flex-col items-center justify-center gap-12 mt-20'>
            <h1 className='text-3xl font-bold sm:text-4xl md:text-5xl text-err-red'>
                404 Page Not Found
            </h1>
            <p className='text-base font-semibold md:text-lg'>
                경로가 잘못되었습니다.
            </p>
            <Link to='/' className='underline'>
                메인페이지 가기
            </Link>
        </main>
    );
}

export default NotFound;