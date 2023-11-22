import React, { useState } from 'react';

// 회원가입 시 필요한 정보를 담는 타입
type UserData = {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  isEmailVerified: boolean;
  verificationCode: string;
};

// 상태 관리를 위한 Zustand store
type SignUpStore = {
  userData: UserData;
  setUserData: (userData: UserData) => void;
};

// Zustand 초기 상태
const initialUserData: UserData = {
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  isEmailVerified: false,
  verificationCode: '',
};

const useSignUpStore = () => {
  const [userData, setUserData] = useState<UserData>(initialUserData);

  return { userData, setUserData } as SignUpStore;
};

const SignInfo: React.FC = () => {
  const { userData, setUserData } = useSignUpStore();
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean | null>(null);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value;
    setUserData((prevData) => ({ ...prevData, username: newUsername }));
    // 아이디 중복 확인 로직 (예시: 무조건 중복 가능으로 가정)
    setIsUsernameAvailable(true);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setUserData((prevData) => ({ ...prevData, password: newPassword }));
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setUserData((prevData) => ({ ...prevData, confirmPassword: newConfirmPassword }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setUserData((prevData) => ({ ...prevData, email: newEmail }));
  };

  const handleVerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVerificationCode = e.target.value;
    setUserData((prevData) => ({ ...prevData, verificationCode: newVerificationCode }));
  };

  const handleEmailVerification = () => {
    // 이메일 인증 로직 (예시: 무조건 인증 성공으로 가정)
    setUserData((prevData) => ({ ...prevData, isEmailVerified: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 회원가입 로직 (여러 유효성 검사를 추가로 수행해야 함)
    console.log('제출된 데이터:', userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아이디:
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleUsernameChange}
          required
        />
        {/* 아이디 중복 확인 결과 표시 */}
        {isUsernameAvailable !== null && (
          <span>{isUsernameAvailable ? '사용 가능한 아이디입니다.' : '이미 사용 중인 아이디입니다.'}</span>
        )}
      </label>
      <br />
      <label>
        비밀번호:
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handlePasswordChange}
          required
        />
      </label>
      <br />
      <label>
        비밀번호 확인:
        <input
          type="password"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        {/* 비밀번호 일치 여부 표시 */}
        {userData.confirmPassword && userData.password !== userData.confirmPassword && (
          <span>비밀번호가 일치하지 않습니다.</span>
        )}
      </label>
      <br />
      <label>
        이메일:
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <br />
      {userData.email && !userData.isEmailVerified && (
        <>
          <button type="button" onClick={handleEmailVerification}>
            이메일 인증 요청
          </button>
          {/* 이메일 인증코드 입력 */}
          <label>
            인증번호:
            <input
              type="text"
              name="verificationCode"
              value={userData.verificationCode}
              onChange={handleVerificationCodeChange}
              required
            />
          </label>
        </>
      )}
      <br />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignInfo;