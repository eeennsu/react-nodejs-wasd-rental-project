import type { FC } from 'react';
import UserButton from '../components/UserButton';

const Header: FC = () => {

    return (
        <header className='flex items-center h-[60px] bg-01'>
            <nav className='mx-auto min-w-7xl max-w-7xl' role='navigation' aria-label='header-nav'>
                <ul className='flex justify-end gap-6'>
                    <li>
                        <UserButton>
                            방은수님
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