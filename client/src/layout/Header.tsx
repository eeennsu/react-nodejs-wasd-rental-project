import type { FC } from 'react';
import UserButton from '../components/UserButton';
import { Link } from 'react-router-dom';

const Header: FC = () => {

    return (
        <header className='relative flex items-center h-[48px] bg-01'>
            <Link className='absolute pl-4 text-white' to='/'>
                임시 내비게이션 페이지 가기
            </Link>
            <nav className='w-full max-w-6xl mx-auto ' role='navigation' aria-label='header-nav'>
                <ul className='flex justify-end gap-6'>
                    <li>
                        <UserButton>
                            이연우님
                        </UserButton>
                    </li>
                    <li>
                        <UserButton>
                            로그아웃
                        </UserButton>
                    </li>
                </ul>
            </nav> 
        </header>
    );
};

export default Header;