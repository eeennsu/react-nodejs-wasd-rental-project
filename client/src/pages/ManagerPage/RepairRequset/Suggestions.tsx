import type { FC } from 'react';
import ModalComponent from './ModalComponent';
import React, { useState, useEffect} from 'react';
import { notRepairList_API, myRepairView_API } from '../../../api/repair/repairApi'


const Suggestions: FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };


    const [suggestions, setSuggestions] = useState<ResNotRepairList[]>([]);

    useEffect(() => {
      const test_3 = async () => {
        try{

           const response = await notRepairList_API()

           console.log(response.data.result)

        }catch(err){

          console.log(err);

        }
      };

      test_3();
    },[]);

    // const handlesuggestions = async (user_id:string, repair_id:string) => {

    //   await myRepairView_API({ user_id, repair_id });
      
    // }

    

    return (
      <div className="w-[1180px] h-[60px] absolute top-[120px] bg-01 rounded-t-lg rounded-tr-lg text-2xl text-center">
        <div className='p-3 font-bold -ml-[900px] text-[25px] text-white'>
          기자재 건의사항
        </div>
        <div className="w-[1180px] h-[800px] space-y-4 left-37 rounded-8 bg-02 p-4 pl-10 rounded-b-lg" >
        {suggestions.map((suggestion, index) => (
  <div key={index} onClick={openModal} className='flex w-[1020px] h-[80px] bg-03 ml-[35px] rounded-md text-[18px] p-1'>
    <h3 className="ml-[30px] mt-[20px] font-bold" >
      {suggestion.repair_reason} {/* 건의사항 제목 */}
    </h3>
    <div className='ml-[550px] mt-[20px]'>
      {suggestion.user_id} {/* 작성자 이름 */}
    </div>
    <div className='ml-[10px] mt-[20px]'>
      {suggestion.repair_create_at} {/* 작성일 */}
    </div>
  </div>
          ))}
        </div>
        <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
      </div>
    );
  };

export default Suggestions; 