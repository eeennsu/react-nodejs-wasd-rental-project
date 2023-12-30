import type { FC } from 'react';
import { useState } from 'react';
import MainLogo from '../../../components/MainLogo';
import SignUpForm from './Form/SignUpForm';
import Button from '../../../components/Button';
import PrivateInfoForm from './Form/PrivateInfoForm';
import SignUpSuc from './Form/SignUpSuc';

export type UserInfo = {
    name: string;
    studentNumber: string;
    department: string;
    id: string;
    pw: string;
    confirmPw: string;
    email: string;
    authCode: number;
}

const SignUp: FC = () => {

    const [step, setStep] = useState<number>(0);

    const [userInfo, setUserInfo] = useState<UserInfo>({
        id: '',
        pw: '',
        authCode: 0,
        email: '',
        confirmPw: '',
        name: '',
        studentNumber: '',
        department: '',
    });

    return (
        <section className='flex flex-col items-center w-full'>
            <div className='my-5'>
                <MainLogo />
            </div>
            <div className='flex items-center justify-center w-full h-32 mt-2 text-white bg-03'>
                <div className='flex items-center justify-center w-full max-w-5xl gap-24 text-center'>
                    <div className={`flex-1 h-20 items-center flex justify-between ${step === 0 ? 'bg-01' : 'bg-02'}`}>
                        <div className='h-full rotate-[45deg] bg-03 w-20 -translate-x-10' />                           
                        <div className='translate-x-4'>
                            1. 가입 정보를 입력
                        </div>
                        <div className={`w-[56px] translate-x-7 h-[56px] rotate-[45deg] ${step === 0 ? 'bg-01' : 'bg-02'}`} />       
                    </div>
                    <div className={`flex-1 h-20 items-center flex justify-between ${step === 1 ? 'bg-01' : 'bg-02'}`}>
                        <div className='h-full rotate-[45deg] bg-03 w-20 -translate-x-10' />                           
                        <div className='translate-x-4'>
                            2. 회원 정보를 입력
                        </div>
                        <div className={`w-[56px] translate-x-7 h-[56px] rotate-[45deg] ${step === 1 ? 'bg-01' : 'bg-02'}`} />        
                    </div>
                    <div className={`flex-1 h-20 items-center flex justify-between ${step === 2 ? 'bg-01' : 'bg-02'}`}>
                        <div className='h-full rotate-[45deg] bg-03 w-20 -translate-x-10' />                           
                        <div className='translate-x-4'>
                            3. 완료
                        </div>
                        <div className={`w-[56px] translate-x-7 h-[56px] rotate-[45deg] ${step === 2 ? 'bg-01' : 'bg-02'}`} />         
                    </div>
                </div>
            </div>
            {
                step === 0 ? (
                    <SignUpForm setStep={setStep} userInfo={userInfo} setUserInfo={setUserInfo} />
                ) : step === 1 ? (
                    <PrivateInfoForm setStep={setStep} userInfo={userInfo} setUserInfo={setUserInfo}  />
                ) : (
                    <SignUpSuc msg='회원 가입을 성공하였습니다!' />
                )
            }
        </section>
    );
}

export default SignUp;