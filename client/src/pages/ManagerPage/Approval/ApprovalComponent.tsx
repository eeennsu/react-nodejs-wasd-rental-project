import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import { useUserStore } from '../../../zustand';
import { approveUser_API, listPendingUsers_API } from '../../../api/auth/authApis';
import ApplicantRow from './ApplicantRow';

const ApprovalComponent: FC = () => {
  const [users, setUsers] = useState<DetailUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await listPendingUsers_API();
        setUsers(data.result);

        console.log('성공')
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const handleApproveUser = async (index: number)  => {
     await approveUser_API({ user_id: users[index].user_id });
  };

  return (
    <div className="overflow-y-auto w-[825px] h-52 absolute top-[140px] ml-[390px] bg-02 rounded-md">
      <table className="w-full h-full">
        <tbody>
          {users.map((user, index) => (
            <ApplicantRow
              key={user.user_id}
              학번={user.user_student_number}
              이름={user.user_name}
              날짜={user.user_created_at}
              onApprove={() => handleApproveUser(user!.user_id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovalComponent;