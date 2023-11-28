import type { FC } from 'react';
import ModalComponent from './ModalComponent';
import React, { useState, useEffect} from 'react';


const RepairRequestComponent : FC = () =>{

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return(
        <div className="w-[400px] h-[190px] absolute top-96 -ml-[35px] bg-01 rounded-md">
            <div className='text-white font-bold text-[36px] p-3  mt-[50px] text-center'>
            기자재 건의사항
            </div>
            {/* <div className="w-[400px] h-96 top-416 rounded-8 bg-02 p-4 pl-10 rounded-b-lg" >
            <div className='w-80 h-11 top-91 left-30 bg-03 rounded-md text-[18px] p-1'>
                <div onClick={openModal}>
                 수리 건의사항1
                </div>
             
            </div>
          
            </div>
            <ModalComponent isOpen={isModalOpen} onClose={closeModal} /> */}
        </div>
    );

};

export default RepairRequestComponent;