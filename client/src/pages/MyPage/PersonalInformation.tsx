import type { FC } from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const ModifyInformation : FC = () => {
  return (
    <div className="text-center">
         <div className="w-[400px] h-52 absolute top-[140px] -ml-[35px] bg-02 rounded-md ">
        <div className="text-[36px] font-bold pt-3">
         이연우
         </div>
         <div className='text-[20px]'>
        <div> 2022661068 </div>
        <div>명지전문대학소프트웨어콘텐츠과</div>
        <div> test_id@naver.com</div>
        </div>
        <Button bgColor='01'className='w-[96px] h-[26px] mt-[10px]'>
            <Link to = 'ModifyInformation'></Link>
              정보 수정하기
        </Button>
       
      </div>
      </div>

    );
    
};


export default ModifyInformation;