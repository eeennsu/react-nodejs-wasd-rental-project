import type { FC } from 'react';
import Button from '../../../components/Button';

const RequestMy: FC = () => {

  return(

      <div className='w-[700px] h-52 absolute top-[200px] ml-[450px] bg-02 rounded-md flex items-center justify-center'>
        
        <div className=''>수리요청</div>
        <div className='w-[60px] h-[30px] ml-[200px] bg-01 rounded-md flex items-center justify-center text-white'>연장</div>
        <div className=' ml-[200px] '>2023.10.08</div>

        <div className="h-px bg-white w-full absolute top-1/2 left-0 transform -translate-y-1/2"></div>
  
  </div>

  );


}

export default RequestMy;