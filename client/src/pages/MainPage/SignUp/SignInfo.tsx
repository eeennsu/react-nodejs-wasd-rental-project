import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import Input from 'antd/es/input/Input';
import { useNavigate } from 'react-router-dom';
import Password from 'antd/es/input/Password';


    const SignInfo: FC = () => {

        const [signupForm, setSignupForm] = useState({
          id: "",
          password: "",
          passwordConfirm: "",
          email: "",
          sendEmail: "",
      });

      const [validMessage, setValidMessage] = useState({
        idMessage: "",
        passwordMessage: "",
        passwordConfirmMessage: "",
        emailMessage: "",
        codeMessage: "",
        idDuplicationMessage: "",
      });
      
      const [isValid, setIsValid] = useState<boolean>(false);
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 폼 데이터 사용 또는 전송
        console.log('제출된 데이터:', signupForm);
      };


      const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupForm({ ...signupForm, [name]: value });
      };

      const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupForm({ ...signupForm, [name]: value });
      };


      const handleChangePwConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupForm({ ...signupForm, [name]: value });

        // 비교 로직 추가
        if (signupForm.password === signupForm.passwordConfirm) {
          setIsValid(true);
        } else {
          setIsValid(false);
          setValidMessage(prev => ({ ...prev, passwordConfirmMessage: '비밀번호 노일치' }));
        }
      };

      const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupForm({ ...signupForm, [name]: value });
      };


      const handleChangeEmsend = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupForm({ ...signupForm, [name]: value });
      }; 

      return (
          <section>
          <div className="w-24 pt-14 mx-auto">
            <form onSubmit={handleSubmit}>
              {/* 아이디 input */}
              <div className="mt-12">
                <p>아이디</p>
                <Input 
                  type="text" 
                  value={signupForm.id} 
                  placeholder="Id를 입력해주세요." 
                  onChange={handleChangeId} />
              </div>

              {/* 비밀번호 input */}
              <div className="mt-6">
                <p>비밀번호</p>
                <Input 
                  type="text" 
                  value={signupForm.password} 
                  placeholder="PW를 입력해주세요." 
                  onChange={handleChangePw} />

                {/* {!isValied && <St.ErrorMessage>{PasswordMessage}</St.ErrorMessage>} */}
                </div>

                <div className="mt-6">
                <p>비밀번호 확인</p>
                <Input  
                  type="text" 
                  value={signupForm.passwordConfirm} 
                  placeholder="PW를 확인해주세요." 
                  onChange={handleChangePwConfirm} />

                {/* {isPwdConfirm === false && (
                  <St.ErrorMessage>{PasswordConfirmMessage}</St.ErrorMessage>
                )} */}
              </div>

              {/* 이메일 input */}
              <div className="mt-6">
                <p>이메일</p>
                <Input 
                type="text" 
                value={signupForm.email} 
                placeholder="Email을 입력해주세요." 
                onChange={handleChangeEmail} />
              </div>

              {/* 회원가입 버튼 */}
              <div className='bottom-0 right-0'>
              <Button bgColor='02'>NEXT</Button>
              </div>
            </form>
          </div>
        </section>
      );
  };


export default SignInfo;