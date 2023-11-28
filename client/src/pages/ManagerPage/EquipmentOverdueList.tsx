import type { FC } from 'react';


const EquipmentOverdueList: FC = () => {


    return(
        <div className="w-[400px] h-14 absolute ml-[815px] top-96 bg-01 rounded-t-lg rounded-tr-lg text-2xl text-center">
      <div className='p-3 font-bold text-[30px] text-white'>
      기자재 연체 목록
      </div>
      <div className="w-[400px] h-[560px] space-y-4 left-37 rounded-8 bg-02 p-4 pl-10 rounded-b-lg" >
      <div className='w-80 h-11 top-91 bg-03 rounded-md text-[18px] p-1'>
       기자재 연체 목록
      </div>
      <div className='w-80 h-11 bg-03 rounded-md text-[18px] p-1'>
       기자재 연체 목록
      </div>
      <div className='w-80 h-11 bg-03 rounded-md text-[18px] p-1'>
       기자재 연체 목록
      </div>
      <div className='w-80 h-11 bg-03 rounded-md text-[18px] p-1'>
       기자재 연체 목록
      </div>
    
      </div>
      
      
  </div>
    );

};



export default EquipmentOverdueList;