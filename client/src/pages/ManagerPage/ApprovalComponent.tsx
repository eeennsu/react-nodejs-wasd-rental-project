import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { useUserStore } from '../../zustand';
import {approveUser_API, listPendingUsers_API} from '../../api/auth/authApis';


const ApprovalComponent : FC = () =>{

 const { user } = useUserStore();

//   const test = async () => {
//     try {
//       const response = await listPendingUsers_API(user!.user_student_number)

//     console.log(response.data)

//     }
// catch(err){
//   console.log(err)
// }
//   };

  const [users, setUsers] = useState<DetailUser[]>([]);

  useEffect(() => {

    try {
      const fetch = async () => {
        const { data } = await listPendingUsers_API();

        setUsers(data.result);
      }
      console.log(' 여기!!', users);
      // 실행!
      fetch();
    } catch(error){
      
      console.log(error);

    };
    
  }, []);

  const handleApproveUsre = async (index: number) => {
    const response = await approveUser_API({ user_id: users[index].user_id });
  }

  const applicants = [
    { id: 1, 학번: '2021001', 이름: '홍길동', 날짜: '2023-11-09' },
    { id: 2, 학번: '2021002', 이름: '김철수', 날짜: '2023-11-10' },
    { id: 3, 학번: '2021003', 이름: '이영희', 날짜: '2023-11-11' },
    { id: 4, 학번: '2021004', 이름: '박영수', 날짜: '2023-11-12' },
    // { id: 5, 학번: '2021005', 이름: '박영수', 날짜: '2023-11-12' },
    // { id: 6, 학번: '2021006', 이름: '박영수', 날짜: '2023-11-12' },
    // { id: 7, 학번: '2021007', 이름: '박영수', 날짜: '2023-11-12' },
    // { id: 8, 학번: '2021008', 이름: '박영수', 날짜: '2023-11-12' },


  ];

  return (
    <div className="overflow-y-auto w-[825px] h-52 absolute top-[140px] ml-[390px] bg-02 rounded-md">
      <table className="w-full h-full">
      
        <tbody>
          {applicants.map((applicant, index) => (
            <React.Fragment key={applicant.id} index={index}> 
              <tr >
                <td className="text-center">{applicant.학번}</td>
                <td className="text-center">{applicant.이름}</td>
                <td className="text-center">{applicant.날짜}</td>
                <td className="text-center">
                  <Button bgColor='01' className='w-[10px] h-[30px]'>
                    승인
                  </Button>
                </td>
              </tr>
              {/* 가로 선을 추가 */}
              {index < applicants.length - 1 && (
                <tr key={`line-${index}`}>
                  <td colSpan={4} className="border-b border-gray-300"></td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};




export default ApprovalComponent;