import type { FC } from 'react';
import UserButton from '../../components/UserButton';
import ExNavMenu from './ExNavMenu';
import { useUserStore } from '../../zustand';
import { message } from 'antd';

const Header: FC = () => {

    const { isLogin, name, setLogout, setLoginInfo,setToken } = useUserStore(state => ({
        isLogin: state.isLogin,
        name: state.login?.user_name,
        setLogout: state.setLogout,
        setLoginInfo: state.setLoginInfo,
        setToken: state.setToken,
    }));

    const handleLogout = () => {
        setLogout();
        setLoginInfo(null);
        setToken('');

        message.info('로그아웃하였습니다.');
    }

    return (
        <header className='relative flex items-center h-[48px] bg-01'>
            <ExNavMenu />
            <nav className='w-full max-w-6xl mx-auto'>
                {
                    isLogin && (
                        <ul className='flex justify-center gap-6 md:justify-end'>
                            <li>
                                <UserButton>
                                    {name}님
                                </UserButton>
                            </li>
                            <li>
                                <UserButton onClick={handleLogout}>
                                    로그아웃
                                </UserButton>
                            </li>
                        </ul>
                    )
                }
            </nav> 
        </header>
    );
};

export default Header;