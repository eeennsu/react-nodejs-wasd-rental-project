import type { FC } from 'react';
import UserButton from '../../components/UserButton';
import ExNavMenu from './ExNavMenu';
import { useUserStore } from '../../zustand';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

const Header: FC = () => {

    const navigate = useNavigate();
    const { isLogin, name, setLogout, setUser,setToken } = useUserStore(state => ({
        isLogin: state.isLogin,
        name: state.user?.user_name,
        setLogout: state.setLogout,
        setUser: state.setUser,
        setToken: state.setToken,
    }), shallow);

    const handleLogout = () => {
        setLogout();
        setUser(null);
        setToken('');

        message.info('로그아웃하였습니다.');
        navigate('/sampleLogin');
    }

    return (
        <header className='relative flex items-center h-[56px] md:h-[48px] bg-01'>
            <ExNavMenu />
            <nav className='w-full max-w-6xl mx-auto'>
                {
                    isLogin && (
                        <ul className='flex justify-end gap-2 md:gap-6 max-lg:mx-3'>
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