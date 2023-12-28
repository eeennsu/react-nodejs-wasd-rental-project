import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { message } from 'antd';
import { login_API } from '../../api/auth/authApi';
import { useUserStore } from '../../zustand';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { messages } from '../RentalPage/constants';
import Button from '../../components/Button';

const SampleLogin: FC = () => {

    const { state } = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [id, setId] = useState<string>('');
    const [pw, setPw] = useState<string>('');

    const { isLogin, setLogin, setToken, user, setUser} = useUserStore(state => ({
        isLogin: state.isLogin, setLogin: state.setLogin,
        setToken: state.setToken, user: state.user, setUser: state.setUser
    }), shallow);
    
    useEffect(() => {   
        if (state) {
            if (state.from.pathname === '/manager') {
                message.info(messages.requireManager);
            }

            else {
                message.info(messages.requireLogin);
            }
        }
    }, [state]);

    const handleLoginTest = async () => {
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
        <div className='flex flex-col items-center justify-center flex-1 w-full gap-3 ounded-sm '>
            {
                isLogin ? (
                    <div className='flex flex-col items-center w-full h-full gap-4'>
                        <p>
                            로그인에 성공하였습니다! 
                        </p>
                        <p>
                            {user?.user_name}님 안녕하세요! 
                        </p>
                        <p>
                            당신은 {user?.user_license === 1 ? '일반 유저' : '관리자'}입니다                         
                        </p>                      
                        <p className='underline'>
                            <Link to='/'>
                                샘플 네비바 가기
                            </Link>
                        </p>                         
                    </div>
                ) : (
                    <div className='flex flex-col items-center gap-2 p-11 bg-slate-300 rounded-2xl'>
                        <h3 className='text-3xl'>Sample Login</h3> 
                        <div className='flex gap-10'>
                            <div className='flex flex-col items-center'>
                                <h3>일반 유저 테스트 계정</h3>
                                <p>
                                    dbsxo149
                                </p>
                                <p>
                                    ptr73724083!
                                </p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h3>관리자 테스트 계정</h3>
                                <p>
                                    admin
                                </p>
                                <p>
                                    1111
                                </p>
                            </div>
                        </div>
                        <div className='mt-9'>
                            아이디 : 
                            <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
                        </div>
                        <div>
                            비밀번호 : 
                            <input type='password' value={pw} onChange={(e) => setPw(e.target.value)} />
                        </div>
                        <div className='mt-9'>
                            <Button bgColor='01' onClick={handleLoginTest} isLoading={isLoading}>
                                로그인
                            </Button>
                        </div>
                    </div>                  
                )
            }
        </div>
    );
}

export default SampleLogin;