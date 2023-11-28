import type { FC } from 'react';
import ModalComponent from './ModalComponent';
import React, { useState, useEffect} from 'react';

const Suggestions: FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
        <div className="w-[1180px] h-[60px] absolute top-[120px] bg-01 rounded-t-lg rounded-tr-lg text-2xl text-center">
     
        <div className='p-3 font-bold -ml-[900px] text-[25px] text-white'>
        기자재 건의사항
        </div>
  
        <div className="w-[1180px] h-[800px]  space-y-4 left-37 rounded-8 bg-02 p-4 pl-10 rounded-b-lg" >
  
        <div className='w-[1020px] h-11 bg-03 ml-[35px] rounded-md text-[18px] p-1'>
         <div onClick={openModal}>
         기자재 건의사항1
         </div>
         
        </div>
  
        <div className='w-[1020px] h-11 bg-03 ml-[35px] rounded-md text-[18px] p-1'>
        기자재 건의사항1
        </div>
  
        <div className='w-[1020px] h-11 bg-03 ml-[35px] rounded-md text-[18px] p-1'>
        기자재 건의사항1
        </div>
  
        <div className='w-[1020px] h-11 bg-03 ml-[35px] rounded-md text-[18px] p-1'>
        기자재 건의사항1
        </div>

        <div className='w-[1020px] h-11 bg-03 ml-[35px] rounded-md text-[18px] p-1'>
        기자재 건의사항1
        </div>

        <div className='w-[1020px] h-11 bg-03 ml-[35px] rounded-md text-[18px] p-1'>
        기자재 건의사항1
        </div>
      
        </div>
        
        <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
    </div>
    );
};

export default Suggestions; 