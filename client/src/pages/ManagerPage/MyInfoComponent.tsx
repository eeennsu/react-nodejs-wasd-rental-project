import type { FC } from 'react';
import Button from '../../components/Button';

const ManagerInformation : FC = () => {
  return (
    <div className="text-center">
         <div className="w-[400px] h-52 absolute top-[140px] -ml-[35px] bg-02 rounded-md ">
        <div className="text-[36px] font-bold pt-3">
         관리자
         </div>
         <div className='text-[20px]'>
        <div> 20202023 </div>
        <div>명지전문대학소프트웨어콘텐츠과</div>
        <div> test_id@naver.com</div>
        </div>
        <Button bgColor='01'className='w-[96px] h-[26px] mt-[10px]'>
              정보 수정하기
        </Button>
       
      </div>
      </div>
  // 관리자 정보 업데이트 되면 수정예정
  );
};


export default ManagerInformation;