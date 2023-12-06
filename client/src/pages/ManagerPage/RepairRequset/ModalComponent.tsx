import React, { useEffect } from "react";
import type { FC } from 'react';
import Button from "../../../components/Button";
import { myRepairView_API } from "../../../api/repair/repairApi";
import { useUserStore } from "../../../zustand";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalComponent: FC<ModalProps> = ({ isOpen, onClose }) => {

  const { user } = useUserStore();

//   const test = async () => {
//     try {
//       const response = await myRepairView_API(user!.user_id, 'repair_part')

//       console.log(response.data)
//     }
// catch(err){
//   console.log(err)
// }
//   };

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

      <Button onClick={onClose} bgColor='01' className=" w-[120px] h-[45px] ml-[660px] mt-[280px]">
        수리중
      </Button>

      <Button onClick={onClose} bgColor='01' className=" w-[120px] h-[45px] ml-[20px] ">
        수리완료
      </Button>
    </div>
  );
};

export default ModalComponent;