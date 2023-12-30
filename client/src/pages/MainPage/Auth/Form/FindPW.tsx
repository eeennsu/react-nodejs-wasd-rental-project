import { useState, type FC, ChangeEvent, FormEvent } from 'react';
import { changePw_API, sendMail_API } from '../../../../api/auth/authApi';
import MainLogo from '../../../../components/MainLogo';
import Button from '../../../../components/Button';
import SignUpSuc from './SignUpSuc';
import { Link } from 'react-router-dom';

type UserInfo = {
    id: string;
    email: string;
    authCode: number | string;
    pw: string;
    confirmPw: string;
}

const FindPW: FC = () => {

    const [senededCode, setSendedCode] = useState<number>(0);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<UserInfo>({
        id: '',
        email: '',
        pw: '',
        confirmPw: '',
        authCode: ''
    });
    
    const [isSuc, setIsSuc] = useState<boolean>(false);

    const handleCodeSend = async () => {
        const { data } = await sendMail_API({ user_email: userInfo.email });
        console.log(data);
        if (data[200] && data.result) {
            setSendedCode(data.result.code);
            alert('코드가 전송되었습니다.');
        }
    }

    const handleCodeCheck = async () => {
        if (senededCode != userInfo.authCode) {
            alert('인증 코드가 일치하지 않습니다.');
        } else {
            alert('인증이 확인되었습니다. 변경할 비밀번호를 입력해 주세요.');
            setIsChecked(true);
        }
    }

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setUserInfo(prev => ({
            ...prev, 
            [target.name]: target.value
        }));
    }

    const handleNext = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();        
        
        if (userInfo.pw !== userInfo.confirmPw) {
            alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
            
            return;
        }

        const { data } = await changePw_API({ user_pw: userInfo.pw });
      
        if (data[200] && data.msg) {
            setIsSuc(true);
        } else {
            alert('오류가 발생했습니다.');
        }
    }

    return (
        <section className='flex flex-col items-center justify-center flex-1 max-w-xl gap-6 mx-auto'>
            <MainLogo />
            {
                !isSuc ? (
                <form className='flex flex-col items-center w-full' onSubmit={handleNext}>
                    <h2 className='font-bold'>비밀번호 찾기</h2>
                    <input required name='id' value={userInfo.id} onChange={handleChange} className='w-full mt-14 rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='id를 입력해 주세요.' />   
                    <div className='flex w-full'>
                        <input required type='email' name='email' value={userInfo.email} onChange={handleChange} className='w-3/4 rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='가입시 기입해주신 이메일을 입력해 주세요.' />   
                        <button type='button' onClick={handleCodeSend} className='w-1/4 rounded-md bg-03 border border-[#3F5D7D] h-[66px] outline-none'>
                            코드 전송
                        </button>
                    </div>
                    <div className='flex w-full'>
                        <input required name='authCode' value={userInfo.authCode} onChange={handleChange} className='w-3/4 rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='인증코드를 입력해 주세요.' />   
                        <button type='button' onClick={handleCodeCheck} className='w-1/4 rounded-md bg-03 border border-[#3F5D7D] h-[66px] outline-none'>
                            코드 확인
                        </button>
                    </div>                
                    <input disabled={!isChecked} required name='pw' value={userInfo.pw} onChange={handleChange} className={`w-full mt-6 rounded-md border border-[#3F5D7D] h-[66px] pl-24 outline-none ${isChecked ? 'bg-03' : 'bg-gray-300'}`} placeholder='변경할 비밀번호를 입력해 주세요.' />   
                    <input disabled={!isChecked} required name='confirmPw' value={userInfo.confirmPw} onChange={handleChange} className={`w-full rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none ${isChecked ? 'bg-03' : 'bg-gray-300'}`} placeholder='비밀번호를 한번 더 입력해 주세요.' />   
                    <div className='flex justify-end w-full mt-24'>
                        <Button type='submit' bgColor='02'>
                            Next
                        </Button>
                    </div>
                </form>  
                ) : (
                    <>
                        <h2 className='font-bold'>비밀번호 찾기</h2>
                        <div className='flex flex-col items-center w-full max-w-xl gap-12 py-24 border rounded-md drop-shadow-lg bg-03 border-01'>
                            <h2 className='font-bold'>
                                비밀번호가 성공적으로 변경되었습니다.
                            </h2>
                            <div>
                                <Button bgColor='01'>
                                    <Link to='/main/login' className='px-4'>
                                        로그인 하러 가기
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </>
                )
            }          
        </section>
    );
}

export default FindPW;