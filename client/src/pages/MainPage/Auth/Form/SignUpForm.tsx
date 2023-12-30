import type { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction } from 'react';
import { useState } from 'react';
import { checkId_API, sendMail_API } from '../../../../api/auth/authApi';
import Button from '../../../../components/Button';
import { UserInfo } from '../SignUp';

type Props = {
    setStep: Dispatch<SetStateAction<number>>;
    userInfo: UserInfo;
    setUserInfo: Dispatch<SetStateAction<UserInfo>>;
}

const SignUpForm: FC<Props> = ({ setStep, userInfo, setUserInfo }) => {

    const [license, setLicense] = useState<'사용자' | '관리자'>('사용자');
    const [isIdCheck, setIsIdCheck] = useState<boolean>(false);
    const [senededCode, setSendedCode] = useState<number>(0);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setUserInfo(prev => ({
            ...prev, 
            [target.name]: target.value
        }));
    }

    const handleIdConfirm = async () => {
        const { data } = await checkId_API({ user_id: userInfo.id });

        if (data[200] && data.msg) {
            alert(data.msg);

            if (data.msg.startsWith('아이디가 중복되지')) {
                setIsIdCheck(true);
            }
        } else if (data.err){
           alert(data.err);
        }
    }

    const handleCodeCheck = async () => {
        const { data } = await sendMail_API({ user_email: userInfo.email });
        
        if (data[200] && data.result) {
            setSendedCode(data.result.code);
            alert('코드가 전송되었습니다.');
        }
    }

    const handleNext = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!isIdCheck) {
            alert('아이디 중복확인을 진행해 주세요.');

            return;
        }

        if (userInfo.pw !== userInfo.confirmPw) {
            alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');

            return;
        }

        if (userInfo.authCode != senededCode) {
            alert('인증코드가 일치하지 않습니다.');

            return;
        }

        setStep(1);
    }

    return (
        <form className='w-full max-w-2xl' onSubmit={handleNext}>
            <div className='flex gap-3 mt-6'>
                <button onClick={() => setLicense('사용자')} type='button' value={'사용자'} className={`w-1/2 rounded-md ${license === '사용자' ? 'bg-slate-400/75' : 'bg-03'} outline-none h-[66px]`}>
                    사용자
                </button>
                <button onClick={() => alert('관리자 가입은 문의를 부탁드립니다.')} type='button' value={'사용자'} className={`w-1/2 rounded-md ${license === '관리자' ? 'bg-slate-400/75' : 'bg-03'} outline-none h-[66px]`}>
                    관리자
                </button>
            </div>
            <div className='flex flex-col mt-6'>
                <div className='flex'>
                    <input required name='id' value={userInfo.id} onChange={handleChange} className='w-3/4 rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='ID를 입력해 주세요' />   
                    <button type='button' onClick={handleIdConfirm} className='w-1/4 rounded-md bg-03 border border-[#3F5D7D] h-[66px] outline-none'>
                        중복확인
                    </button>
                </div>
                <input required type='password' onChange={handleChange} value={userInfo.pw} name='pw' className='w-full rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='PW를 입력해 주세요' /> 
                <input required type='password' onChange={handleChange} value={userInfo.confirmPw} name='confirmPw' className='w-full rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='PW를 확인해 주세요' /> 
                <div className='flex mt-6'>
                    <input required type='email' name='email' value={userInfo.email} onChange={handleChange} className='w-3/4 rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='이메일을 입력해 주세요' />   
                    <button type='button' onClick={handleCodeCheck} className='w-1/4 rounded-md bg-03 border border-[#3F5D7D] h-[66px] outline-none'>
                        코드 전송
                    </button>
                </div>
                <input required type='number' onChange={handleChange} value={userInfo.authCode} name='authCode' className='w-full rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='인증코드를 입력해 주세요' /> 
            </div>       
            <div className='flex justify-end w-full mt-10 ml-32'>
                <Button type='submit' bgColor='02'>
                    Next
                </Button>
            </div>    
        </form>
    );
}

export default SignUpForm;