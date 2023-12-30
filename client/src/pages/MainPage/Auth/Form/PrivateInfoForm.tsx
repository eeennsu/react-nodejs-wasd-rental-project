import { useState, type Dispatch, type FC, type SetStateAction, ChangeEvent, FormEvent } from 'react';
import Button from '../../../../components/Button';
import { UserInfo } from '../SignUp';
import { signUp_API } from '../../../../api/auth/authApi';

type Props = {
    setStep: Dispatch<SetStateAction<number>>;
    userInfo: UserInfo;
    setUserInfo: Dispatch<SetStateAction<UserInfo>>;
}

const PrivateInfoForm: FC<Props> = ({ setStep, userInfo, setUserInfo }) => {

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setUserInfo(prev => ({
            ...prev, 
            [target.name]: target.value
        }));
    }

    const handleNext = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();    
        
        const { name, department, studentNumber } = userInfo;
        
        if (name === '' || studentNumber === '' || department === '') {
            alert('정보를 다 입력해 주세요.');
            
            return;
        }
        
        const signUpInfo: SignUpUser = {
            user_id: userInfo.id,
            user_name: userInfo.name,
            department_id: '1',         // 그냥 모두 소콘과이므로 1로 대체
            user_email: userInfo.email,
            user_pw: userInfo.pw,
            user_student_number: userInfo.studentNumber
        };

        const { data } = await signUp_API(signUpInfo);

        if (data[200]) {
            if (data.msg?.startsWith('회원가입에 성공')) {
                setStep(2);
            } else if (data.err){
                alert(data.err);
            } else {
                alert(data.msg)
            }
        } else {
            alert('알 수 없는 에러가 발생했습니다.')
        }   
    }

    return (
        <form className='w-full max-w-2xl mt-20' onSubmit={handleNext}>
            <input required className='w-full rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='소속을 입력해 주세요' /> 
            <input required onChange={handleChange} value={userInfo.department} name='department' className='w-full rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='학과/부서명을 입력해 주세요' /> 
            <input required onChange={handleChange} value={userInfo.studentNumber} name='studentNumber' className='w-full rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='학번을 입력해 주세요' /> 
            <input required onChange={handleChange} value={userInfo.name} name='name' className='w-full rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='이름을 입력해 주세요' /> 
            <input required className='w-full rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='휴대폰 번호를 입력해 주세요' /> 
            <input required className='w-full rounded-md bg-03 border border-[#3F5D7D] h-[66px] pl-24 outline-none' placeholder='생년월일을 입력해 주세요' /> 
            <div className='flex justify-end w-full mt-10 ml-32'>
                <Button type='submit' bgColor='02'>
                    Next
                </Button>
            </div>    
        </form>
    );
}

export default PrivateInfoForm;