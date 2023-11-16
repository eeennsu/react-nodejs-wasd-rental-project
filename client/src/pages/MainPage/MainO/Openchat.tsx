import type { FC } from 'react';
import Button from '../../../components/Button';
import './main.css';



const Openchat: FC = () => {
  
  //p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4
  //flex items-center w-80 h-70 justify-center gap-10px
   
    return (
      <div>
        <div>
        <div className='m-1 p-16 max-w-sm mx-auto bg-02 flex items-center space-x-8'>
          <div className='flex items-center w-80 h-90 justify-center gap-[100px]'>
            <Button onClick={() => {location.href='https://open.kakao.com/o/sUALlY5e';}} bgColor='01'>
              실습조교 오픈채팅
            </Button>
            <Button onClick={() => {location.href='https://open.kakao.com/o/si2T0Z4e';}} bgColor='01'>
              행정조교 오픈채팅
            </Button>
            
          </div>          
        </div>
        </div>
        
      </div>
    );
};

export default Openchat;
