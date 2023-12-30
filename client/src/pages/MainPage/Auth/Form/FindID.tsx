import { useState, type FC, ChangeEvent, FormEvent } from 'react';
import { searchId_API, sendMail_API } from '../../../../api/auth/authApi';
import MainLogo from '../../../../components/MainLogo';
import Button from '../../../../components/Button';

type UserInfo = {
    name: string;
    email: string;
    classNum: string;
    authCode: number | string;
}

const FindID: FC = () => {

    const [senededCode, setSendedCode] = useState<number>(0);
    const [userInfo, setUserInfo] = useState<UserInfo>({
        name: '',
        email: '',
        classNum: '',
        authCode: ''
    });

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setUserInfo(prev => ({
            ...prev, 
            [target.name]: target.value
        }));
    }

    const handleCodeCheck = async () => {
        const { data } = await sendMail_API({ user_email: userInfo.email });
        console.log(data);
        if (data[200] && data.result) {
            setSendedCode(data.result.code);
            alert('코드가 전송되었습니다.');
        }
    }

    const handleNext = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (senededCode != userInfo.authCode) {
            alert('인증코드가 일치하지 않습니다.');

            return;
        }

        const { data } = await searchId_API({ user_email: userInfo.email, user_name: userInfo.name, user_student_number: userInfo.classNum });
        console.log(data);
        
        if (data.result) {

        }
    }

    return (
        <section className='flex flex-col items-center justify-center flex-1 max-w-xl gap-6 mx-auto'>
            <MainLogo />
            <form className='flex flex-col items-center w-full' onSubmit={handleNext}>
                <h2 className='font-bold'>사용자 ID 찾기</h2>
                <input required name='name' value={userInfo.name} onChange={handleChange} className='w-full mt-14 rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='이름을 입력해 주세요.' />   
                <input required name='classNum' value={userInfo.classNum} onChange={handleChange} className='w-full rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='가입시 기입해주신 학번을 적어주세요.' />   
                <div className='flex w-full mt-5'>
                    <input required type='email' name='email' value={userInfo.email} onChange={handleChange} className='w-3/4 rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='가입시 기입해주신 이메일을 입력해 주세요.' />   
                    <button type='button' onClick={handleCodeCheck} className='w-1/4 rounded-md bg-03 border border-[#3F5D7D] h-[66px] outline-none'>
                        중복확인
                    </button>
                </div>                
                <input required name='authCode' value={userInfo.authCode} onChange={handleChange} className='w-full rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='인증코드를 입력해 주세요.' />   
                <div className='flex justify-end w-full mt-24'>
                    <Button type='submit' bgColor='02'>
                        Next
                    </Button>
                </div>
            </form>            
        </section>
    );
}

export default FindID;