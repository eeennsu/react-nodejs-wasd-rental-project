import React from "react";
import type { FC } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

const ModalComponent: FC<ModalProps> = ({ isOpen, onClose }) =>{

    if(!isOpen){
        return null;
    }

    return (
        <div className="fixed top-[190px] left-[583px] w-[980px] h-[590px]  bg-04 z-[900] rounded-md">
          <div className="mt-[20px] ml-[-780px] text-3xl font-bold">
          건의사항
          </div>
          <div className="mt-[3px] ml-[-780px] text-sm text-02">
            : 기자재정보
          </div>
         
          
          <div className="fixed w-[920px] h-[246px] top-[400px] left-[1073px] text-03 transform -translate-x-1/2 -translate-y-1/2 bg-02 p-4 rounded-lg ">
            <h2>수리 건의사항 모달</h2>   
            </div>

            <div className="w-[920px] h-[194px] bg-03 mt-[270px] ml-[30px] text-02 rounded-md">
                답변내용
               
            </div>
            <button onClick={onClose} className=" ml-[880px] mt-[-100px] cursor-pointer">
               닫기
            </button>
         
        </div>
      );

};

export default  ModalComponent;