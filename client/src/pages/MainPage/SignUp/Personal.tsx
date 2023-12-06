import type { FC } from 'react';
import React, { useState } from 'react';
import Button from '../../../components/Button';

// // 개인정보 타입 정의
// type Personal = {
//   Name: string;
//   studentNumber: string,
//   email: string;
//   phoneNumber: string;
// };

// const Personal: FC = () => {
//   // 폼 상태
//   const [formData, setFormData] = useState<Personal>({
//     Name: '',
//     studentNumber: '',
//     email: '',
//     phoneNumber: '',
//   });

//   // 입력 값 변경 핸들러
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // 폼 제출 핸들러
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // 폼 데이터 사용 또는 전송
//     console.log('제출된 데이터:', formData);
//   };




  return (
    <div className='w-full'>
      <div className='fixed w-full h-12 top-28 bg-03'>
          <form onSubmit={handleSubmit}>
            <div className='w-[400px] h-[560px] space-y-4 left-37 rounded-8 bg-02 p-4 pl-10 rounded-b-lg'>
              <div className='rounded-md'>
                학번:
                <input
                  type="text"
                  value={formData.studentNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
              <br />
              <div className='rounded-md'>
                이름:
                <input
                  type="text"
                  value={formData.Name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <br />
              <div className='rounded-md'>
                이메일:
                <input
                  type="email"
                  name="user_email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <br />
              <div className='rounded-md'>
                전화번호:
                <input
                  type="number" 
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <br />
          
          <Button bgColor='02' type="submit">next</Button>
        </form>
    </div>
    </div>
  );
};

export default Personal;