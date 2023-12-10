import axios from 'axios';
import type { FC } from 'react';
import React, { useState, useEffect} from 'react';
import {logList_API} from '../../../api/log/logApi'
import Pagination from '../../../components/Pagination/Pagination';






  const RentalLog: FC = () => {
  const [curPage, setCurPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [logs, setLogs] = useState< string[]>([]);

  useEffect(() => {
    const fetchlog = async (page: number) => {
      try {
        const response = await logList_API(page);
        const result = response.data.result;

        if (Array.isArray(result)) {
          setLogs(result);

          console.log(result)
        } else {
          console.error('데이터가 배열이 아닙니다.');
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchlog(1);
  }, []);

    return (
        
        <div className="w-[1180px] h-[60px] absolute top-[120px] bg-01 rounded-t-lg rounded-tr-lg text-2xl text-center">
     
        <div className='p-3 font-bold -ml-[1000px] text-[25px] text-white'>
        기자재 로그
        </div>
  
        <div className="w-[1180px] h-[800px]  space-y-4 left-37 rounded-8 bg-02 p-4 pl-10 rounded-b-lg" >
       {logs.map((logs, index)=>(

         <div  key={index} className=' w-[1020px] h-[80px] bg-03 ml-[35px] rounded-md text-[18px] p-6'>
           {logs}
         </div>

  ))}
        
  
    
      
        </div>
        <Pagination curPage={curPage} setCurPage={setCurPage} total={total}/>

        
    </div>
            
       

        
    );
};

export default RentalLog;