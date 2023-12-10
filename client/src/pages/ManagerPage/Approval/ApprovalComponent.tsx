import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import { useUserStore } from '../../../zustand';
import { approveUser_API, listPendingUsers_API } from '../../../api/auth/authApi';
import ApplicantRow from './ApplicantRow';

const ApprovalComponent: FC = () => {
  const [users, setUsers] = useState<DetailUser[]>([]);

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await listPendingUsers_API();
        const result = response.data.result;


        if (Array.isArray(result)) {
          setUsers(result);

          console.log()

        } else {
          // 만약 신청한 유저들이 없다면 이곳 조건을 타게됨. 
        }

      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);
  

  const handleApproveUser = async (user_id: string)  => {       

     await approveUser_API({ user_id: user_id });
  };

  return (
    <div className="overflow-y-auto w-[825px] h-52 absolute top-[140px] ml-[390px] bg-02 rounded-md">
      <table className="w-full h-full">
        <tbody>
          {users?.map((user, index) => (
            <ApplicantRow
              key={index}
              학번={user.user_student_number}
              이름={user.user_name}
              날짜={user.user_created_at}
              onApprove={() => handleApproveUser(user.user_id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovalComponent;