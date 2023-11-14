import type { FC } from 'react';
import Side from './features/Side/Side';
import { login_API } from '../../api/auth/authApis';
import './features/app.css';
import { useStepStore } from '../../zustand';
import { getContent } from './utils/step';

const RentPage: FC = () => {

    const handleTest = async () => {
        const response = await login_API({ user_id: '은수 테스트 아이디', user_pw: '은수 테스트 비밀번호' });

        console.log(response);
    }

    const { systemStep , setSystemStep } = useStepStore();

    return (
        <div className='flex flex-col-reverse w-full h-full mt-6 md:flex-row gap-x-6 md:mt-7'>            
            <aside className='md:w-1/5 '>
                <Side />
            </aside>
            <section className='mb-10 md:w-4/5 3xl:mb-0'>
                {getContent(systemStep)}
                {/* <span onClick={handleTest}>테스트</span> */}
            </section>        
        </div>
    );
};

export default RentPage;