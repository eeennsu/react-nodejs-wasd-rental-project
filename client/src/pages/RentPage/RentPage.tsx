import type { FC } from 'react';
import { login_API, signUp_API } from '../../api/auth/authApis';
import { useStepStore } from '../../zustand';
import { getContent } from './utils/step';
import Side from './features/Side/Side';
import './features/app.css';
import { useEffect, useState } from 'react';
import useUserStore, { LOGIN_SESSION_STORAGE } from '../../zustand/userStore/useUserStore';
import useUserSession from '../../hooks/commons/useUserSession';
import { message } from 'antd';

const RentPage: FC = () => {

    const { systemStep } = useStepStore();
    const { setLogin, setLoginResponse } = useUserStore((state) => ({
        setLogin: state.setLogin,
        setLoginResponse: state.setLoginResponse
    }));

    const handleLoginTest = async () => {
        const response = await login_API({
            user_id: 'dbsxo149',
            user_pw: 'ptr73724083! '
        });

        if (response.data.suc) {
            setLogin();
            setLoginResponse(response.data);
        } else {
            message.error('로그인에 실패하였습니다. 다시 시도해주세요');
        }
    }

    return (
        <div className='flex flex-col-reverse w-full h-full mt-6 md:flex-row gap-x-6 md:mt-7'>            
            <aside className='md:w-1/5 '>
                <Side />
            </aside>
            <section className='mb-10 md:w-4/5 3xl:mb-0'>
                {getContent(systemStep)}
            </section>        
            {/* <button onClick={handleLoginTest}>로그인 테스트</button>  */}
        </div>
    );
};

export default RentPage;

