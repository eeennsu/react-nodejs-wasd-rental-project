import type { ChangeEvent, FC, FormEvent } from 'react';
import { useState } from 'react';
import MainLogo from '../../components/MainLogo';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { checkId_API, sendMail_API } from '../../api/auth/authApi';
import { changeInfo_API } from '../../api/user/userApi';

type Info = {
    name: string;
    email: string;
    classNum: string
}

const PrivateInfoUpdate: FC = () => {

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<Info>({
        name: '',
        email: '',
        classNum: ''
    });

    const handleUpdateSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { email, name, classNum } = userInfo;

        const { data } = await changeInfo_API({ user_email: email, user_name: name, user_student_number: classNum });
      
        if (data[200] && data.suc) {
            alert('회왼정보가 수정되었습니다.');
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
                <input required type='email' value={userInfo.email} onChange={handleChange} name='email' className='w-full rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-5' placeholder='이메일을 입력해 주세요' />       
                <input required value={userInfo.name} name='name' onChange={handleChange} className='w-full rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-5' placeholder='이름을 입력해 주세요' />
                <input required type='number' value={userInfo.classNum} name='classNum' onChange={handleChange} className='w-full rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-5' placeholder='학번을 입력해 주세요' />
            </div>
            <div>
                <Button bgColor='01' type='submit'>
                    수정
                </Button>
            </div>
        </form>
    );
}

export default PrivateInfoUpdate;