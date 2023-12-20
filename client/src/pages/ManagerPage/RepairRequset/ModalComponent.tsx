import React, { useEffect, useState } from "react";
import type { FC } from 'react';
import Button from "../../../components/Button";
import { myRepairView_API } from "../../../api/repair/repairApi";
import { useUserStore } from "../../../zustand";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}



const ModalComponent: FC<ModalProps> = ({ isOpen, onClose,  }) => {

  const { user } = useUserStore();


  const [repairs, setRepairs]= useState<ResMyRepairView[]>([]);

  



  return (
    <div className={`fixed top-[190px] ml-[95px] w-[980px] h-[460px] bg-04 z-[900] rounded-md ${isOpen ? 'visible' : 'invisible'}`}>
      <div className="mt-[40px] ml-[-780px] text-[36px] font-bold">
        건의사항
      </div>
      <div className="mt-[8px] mr-[820px] text-[16px] text-02">
        : {}
      </div>

      <div className="fixed w-[920px] h-[246px] top-[430px] ml-[490px] text-03 transform -translate-x-1/2 -translate-y-1/2 bg-02 p-4  ">
        <h2></h2>
      </div>

      <div  onClick={onClose} className="w-[10px] text-[30px] ml-[920px] -mt-[80px] cursor-pointer">
        x
      </div>

      <Button onClick={onClose} bgColor='01' className=" w-[120px] h-[45px] ml-[660px] mt-[320px]">
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