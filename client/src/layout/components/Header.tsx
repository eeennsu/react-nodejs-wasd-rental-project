import type { FC } from 'react';
import UserButton from '../../components/UserButton';
import ExNavMenu from './ExNavMenu';

const Header: FC = () => {

    return (
        <header className='relative flex items-center h-[48px] bg-01'>
            <ExNavMenu />
            <nav className='w-full max-w-6xl mx-auto'>
                <ul className='flex justify-center gap-6 md:justify-end'>
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