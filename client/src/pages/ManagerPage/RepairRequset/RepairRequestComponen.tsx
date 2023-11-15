import type { FC } from 'react';
import ModalComponent from './ModalComponent';
import React, { useState } from 'react';


const RepairRequestComponent : FC = () =>{

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return(
        <div className="w-[400px] h-14 absolute top-96 -ml-[40px] bg-01 rounded-t-lg rounded-tr-lg text-2xl text-center">
            <div className='text-white font-bold p-3'>
            기자재 건의사항
            </div>
            <div className="w-[400px] h-96 top-416 rounded-8 bg-02 p-4 pl-10 rounded-b-lg" >
            <div className='w-80 h-11 top-91 left-30 bg-03 rounded-md text-sm p-2.5'>
                <div onClick={openModal}>
                 수리 건의사항1
                </div>
             
            </div>
          
            </div>
            <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );

};

export default RepairRequestComponent;