import React, { useEffect, useState } from "react";
import type { FC } from 'react';
import Button from "../../../components/Button";
import { myRepairView_API } from "../../../api/repair/repairApi";
import { useUserStore } from "../../../zustand";
import { string } from "prop-types";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface text_1 {

  repair_id: number;
  repair_part: string;
  repair_reason: string;
  repair_create_at: string;
  repair_state: string;
  user_id: string,
  tool_id: string;

}


const ModalComponent: FC<ModalProps> = ({ isOpen, onClose }) => {

  const { user } = useUserStore();


  const [repairs, setRepairs]= useState<ResMyRepairView[]>([]);

  useEffect(() => {

    const test = async () => {

      try {
        const response = await myRepairView_API(user!.user_id, user?.repair_id)
  
        console.log(response.data)
      }
  catch(err){
    console.log(err)
  }
    };

    test();
    
  },[]);

  // const test_2 = async (user_id)


 

  return (
    <div className={`fixed top-[190px] left-[583px] w-[980px] h-[460px] bg-04 z-[900] rounded-md ${isOpen ? 'visible' : 'invisible'}`}>
      <div className="mt-[20px] ml-[-780px] text-[36px] font-bold">
        건의사항
      </div>
      <div className="mt-[8px] mr-[820px] text-[16px] text-02">
        : 기자재정보
      </div>

      <div className="fixed w-[920px] h-[246px] top-[410px] left-[1073px] text-03 transform -translate-x-1/2 -translate-y-1/2 bg-02 p-4  ">
        <h2></h2>
      </div>

      <div  onClick={onClose} className="text-[30px] -mr-[900px] -mt-[80px]">
        x
      </div>

      <Button onClick={onClose} bgColor='01' className=" w-[120px] h-[45px] ml-[660px] mt-[340px]">
        <div className="text-[16px]">
        수리중
        </div>
       
      </Button>

      <Button onClick={onClose} bgColor='01' className=" w-[120px] h-[45px] ml-[20px] ">
        <div className="text-[16px]">
        수리완료
        </div>
       
      </Button>
    </div>
  );
};

export default ModalComponent;