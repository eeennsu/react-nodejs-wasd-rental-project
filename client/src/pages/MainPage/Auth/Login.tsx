import type { FC } from 'react';
import { useState } from 'react';
import MainLogo from '../../../components/MainLogo';
import Button from '../../../components/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../zustand';
import { shallow } from 'zustand/shallow';
import { login_API } from '../../../api/auth/authApi';
import { message } from 'antd';
import { messages } from '../../RentalPage/constants';

const Login: FC = () => {


    const { state } = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [id, setId] = useState<string>('');
    const [pw, setPw] = useState<string>('');

    const { setLogin, setToken, setUser} = useUserStore(state => ({
        setLogin: state.setLogin,
        setToken: state.setToken,
        setUser: state.setUser
    }), shallow);

    const handleLogin = async () => {
        setIsLoading(true);
        
        try {
            const response = await login_API({
                user_id: id,
                user_pw: pw,
            });
    
            if (response.data[200]) {    
                
                if (response.data.err) {
                    message.error(messages.notFoundUser);
                    
                    return;
                }
    
                else if (!response.data.token?.token) {
                    message.error(messages.failGetToken);
                    
                    return;
                }
    
                setLogin();

                const { user_pw, user_created_at, ...rest } = response.data.login!;

                setUser(rest);
                setToken(response.data.token.token);
             
                if (rest.user_license === 4) {
                    message.success(messages.sugManager);
                } else {
                    message.success(messages.sugLogin);
                }
                
                const from = state?.from;

                if (from) {
                    navigate(from.pathname);
                } else {
                    navigate('/');
                }
                
            } else {
                message.error(messages.unknownErr);
            }
            
        } catch (error) {
            console.log(error);
            message.error(messages.unknownErr);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className='mx-auto  w-full flex flex-col items-center justify-center gap-10'>
            <MainLogo />
            <div className='max-w-xl w-full'>
                <input className='w-full rounded-md bg-03 focus:border-[3px] focus:border-[#3F5D7D] outline-none h-[66px] pl-5' placeholder='ID를 입력해 주세요' onChange={(e) => setId(e.target.value)}  />
                <input className='w-full rounded-md bg-03 focus:border-[3px] focus:border-[#3F5D7D] outline-none h-[66px] pl-5' placeholder='PW를 입력해 주세요' onChange={(e) => setPw(e.target.value)}  />
            </div>
            <div className='flex gap-6 items-center'>
                <Button bgColor='02' onClick={handleLogin} isLoading={isLoading}>
                    Login
                </Button>
                <Button bgColor='02'>
                    <Link to='/main/forgot'>
                        Forgot
                    </Link>
                </Button>
            </div>
        </section>
    );
}

export default Login;