import type { FC } from 'react';

const ManagerInformation : FC = () => {
  return (
    <div className="text-center">
         <div className="w-[400px] h-52 absolute top-[140px] -ml-[40px] bg-02 rounded-md ">
        <div className="text-2xl font-bold pt-5">
         관리자</div>
        <div> 20202023 </div>
        <div>명지전문대학소프트웨어콘텐츠과</div>
        <div> test_id@naver.com</div>
        <div className="w-30 h-30 absolute top-36 ml-[150px] bg-01 rounded-md text-white">
           정보 수정하기
           </div>
      </div>
      </div>
  // 관리자 정보 업데이트 되면 수정예정
  );
};


export default ManagerInformation;