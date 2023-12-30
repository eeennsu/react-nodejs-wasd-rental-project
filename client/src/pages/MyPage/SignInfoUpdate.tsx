import type { ChangeEvent, FC, FormEvent } from 'react';
import { useState } from 'react';
import MainLogo from '../../components/MainLogo';
import Button from '../../components/Button';
import { changePw_API, sendMail_API } from '../../api/auth/authApi';
import { useNavigate } from 'react-router-dom';

type Info = {
    id: string;
    pw: string;
    confirmPw: string;
    email: string;
    authCode: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SignInfoUpdate: FC = () => {

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<Info>({
        authCode: '',
        confirmPw: '',
        email: '',
        id: '',
        pw: ''
    });

    const [isCodeConfirmed, setIsCodeConfirmed] = useState<boolean>(false);
    const [verifyCode, setVerifyCode] = useState<number>(0);

    const handleEmailConfirm = async () => {
        if (!emailPattern.test(userInfo.email)) {
            alert('올바른 이메일 형식이 아닙니다');

            return;
        }

        const { data } = await sendMail_API({ user_email: userInfo.email.trim() });
        
        if (data[200]) {
            alert('발송이 완료되었습니다.');
            // console.log(data.result.code);
            setVerifyCode(data.result.code);
        }
    }

    const handleCodeConfirm = () => {
        if (verifyCode.toString() === userInfo.authCode) {
            alert('인증에 성공했습니다!');
            setIsCodeConfirmed(true);
        } else {
            alert('인증에 실패했습니다!');
            location.reload();
        }
    }    

    const handleUpdateSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (userInfo.pw !== userInfo.confirmPw) {
            alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
            return;
        }

        const { data } = await changePw_API({ user_pw: userInfo.pw.trim() });
        //console.log('요기', data);
        if (data[200] && data.msg) {
            alert(data.msg);
        } else {
            alert('오류가 발생했습니다.');
        }

        navigate('/');
    }

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setUserInfo(prev => ({
            ...prev, 
            [target.name]: target.value
        }));
    }

    return (
        <form className='flex flex-col items-center justify-center flex-1 gap-12' onSubmit={handleUpdateSubmit}>
            <MainLogo />
            <div className='flex flex-col w-full max-w-[714px]'>
                <div className='flex'>
                    <input required type='email' value={userInfo.email}  onChange={handleChange} name='email' className='w-3/4 rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-5' placeholder='email을 입력해 주세요' />
                    <input className='w-1/4 rounded-md bg-03 border border-[#3F5D7D] h-[66px] font-bold text-sm cursor-pointer' type='button' value='코드 발송' onClick={handleEmailConfirm} />
                </div>
                <div className='flex'>
                    <input required value={userInfo.authCode} name='authCode' onChange={handleChange} className='w-3/4 rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-5' placeholder='이메일로 받은 코드를 입력해 주세요(6자리)' minLength={6} maxLength={6} />
                    <input className='w-1/4 rounded-md bg-03 border border-[#3F5D7D] h-[66px] font-bold text-sm cursor-pointer' type='button' value='코드 확인' onClick={handleCodeConfirm} />
                </div>
                <input disabled={!isCodeConfirmed} type='password' required value={userInfo.pw} onChange={handleChange} name='pw' className={`mt-12 w-full rounded-md ${isCodeConfirmed ? 'bg-03' : 'bg-02/20'} border border-[#3F5D7D] h-[66px] pl-5`} placeholder='PW를 입력해 주세요' />
                <input disabled={!isCodeConfirmed} type='password' required value={userInfo.confirmPw} onChange={handleChange} name='confirmPw' className={`w-full rounded-md ${isCodeConfirmed ? 'bg-03' : 'bg-02/20'} border border-[#3F5D7D] h-[66px] pl-5`} placeholder='PW를 확인해 주세요' />
            </div>
            <div>
                <Button bgColor='01' type='submit'>
                    수정
                </Button>
            </div>
        </form>
    );
}

export default SignInfoUpdate;