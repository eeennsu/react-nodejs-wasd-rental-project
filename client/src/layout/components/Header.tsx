import type { FC, PropsWithChildren } from 'react';
import { useUserStore } from '../../zustand';
import { message } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { messages } from '../../pages/RentalPage/constants';
import UserButton from '../../components/UserButton';
import useStoreController from '../../hooks/commons/useStoreController';

const Header: FC = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { setAllStoreInit } = useStoreController();

    const { isLogin, name, setLogout, setUser, setToken, license, userId } = useUserStore(state => ({
        isLogin: state.isLogin,
        name: state.user?.user_name,
        setLogout: state.setLogout,
        setUser: state.setUser,
        setToken: state.setToken,
        license: state.user?.user_license,
        userId: state.user?.user_id
    }), shallow);

    const handleLogout = () => {
        setLogout();
        setUser(null);
        setToken('');

        if (pathname === '/rental') {
            setAllStoreInit();   
        }

        message.success(messages.logout);
        navigate('/');
    }

    return (
        <header className='relative flex items-center h-[56px] md:h-[48px] bg-01'>  
            <nav className='w-full max-w-6xl mx-auto'>
                {
                    !isLogin ? (
                        <Wrapper>
                            <li>
                                <UserButton>
                                    <Link to='/main/sign-up'>
                                        회원가입
                                    </Link>
                                </UserButton>
                            </li>
                            <li>
                                <UserButton>
                                    <Link to='/main/login'>
                                        로그인
                                    </Link>
                                </UserButton>
                            </li>
                        </Wrapper>
                    ) : license === 1 ? (
                        <Wrapper>
                            <li>
                                <UserButton>
                                    <Link to={`/my-page/${userId}`}>
                                        {name}님
                                    </Link>
                                </UserButton>
                            </li>
                            <li>
                                <UserButton onClick={handleLogout}>
                                    로그아웃
                                </UserButton>
                            </li>
                        </Wrapper>
                    ) : license === 4 ? (
                        <Wrapper>
                            <li>
                                <UserButton>
                                    <Link to='/manager'>
                                        Admin
                                    </Link>
                                </UserButton>
                            </li>
                            <li>
                                <UserButton onClick={handleLogout}>
                                    로그아웃
                                </UserButton>
                            </li>
                        </Wrapper>
                    ) : null
                }
            </nav> 
        </header>
    );
}

export default Header;



const Wrapper: FC<PropsWithChildren> = ({ children }) => {

    return (
        <ul className='flex justify-end gap-2 md:gap-6 max-lg:mx-3'>
            {children}
        </ul>
    )
}