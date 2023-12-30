import type { FC } from 'react';
import Button from '../../../components/Button';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { viewInfo_API } from '../../../api/user/userApi';
import { useUserStore } from '../../../zustand';

const PersonalInformation : FC = () => {

  const userId = useUserStore(state => state.user?.user_id);
  const [myInfo, setMyInfo] = useState<MyUserInfo | null>(null);

  useEffect(() => {
      (async () => {
          const { data } = await viewInfo_API(userId as string);

          if (data[200] && data.result) {
            setMyInfo(data.result);
          } else {           
            alert('사용자의 개인정보를 불러오는데 실패했습니다.');            
          }
      })();
  }, []);

  return (
        <div className='flex flex-col items-center w-1/4 gap-1 py-4 text-center rounded-xl bg-02'>      
            <div className="text-[26px] font-bold">
                {myInfo?.user_name}
            </div>
            <div className=''>
            <p>{myInfo?.user_student_number}</p>
            <p>{myInfo?.department.department_name}</p>
            <p>{myInfo?.user_email}</p>
            </div>
            <Button bgColor='01'className='w-[96px] h-[26px] mt-[10px]'>
                <Link to='/my-page/update'>
                    정보 수정하기
                </Link>
            </Button>    
        </div>
    );    
};

export default PersonalInformation;