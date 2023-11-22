import type { FC } from 'react';
import React, { useState } from 'react';

// 개인정보 타입 정의
type Personal = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

const PersonalInfoForm: React.FC = () => {
  // 폼 상태
  const [formData, setFormData] = useState<Personal>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  // 입력 값 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 데이터 사용 또는 전송
    console.log('제출된 데이터:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        학번:
        <input
          type="text"
          name="user_student_number"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        이름:
        <input
          type="text"
          name="user_name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        이메일:
        <input
          type="email"
          name="user_email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        생년월일:
        <input
          type="birth"
          name="user_birth"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <button type="submit">next</button>
    </form>
  );
};

export default Personal;