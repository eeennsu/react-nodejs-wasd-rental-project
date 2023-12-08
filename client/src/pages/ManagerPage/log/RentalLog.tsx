import axios from 'axios';
import type { FC } from 'react';

const RentalLog: FC = () => {

    async function test() {

        try {

            const page = 1;
            const response = await axios.get(`http://125.248.162.72:3000/log/logList/${page}`);
            const data = response.data;
            console.log('성공', data);
          } catch (err) {
            console.error('오류 발생:', err);
          }
        
    }



    return (
        
        <div className="w-[1180px] h-[60px] absolute top-[120px] bg-01 rounded-t-lg rounded-tr-lg text-2xl text-center">
     
        <div className='p-3 font-bold -ml-[1000px] text-[25px] text-white'>
        기자재 로그
        </div>
  
        <div className="w-[1180px] h-[800px]  space-y-4 left-37 rounded-8 bg-02 p-4 pl-10 rounded-b-lg" >
  
        <div className='   w-[1020px] h-[80px] bg-03 ml-[35px] rounded-md text-[18px] p-1'>
         
        </div>
  
    
      
        </div>
        
        
    </div>
            
       

        
    );
};

export default RentalLog;