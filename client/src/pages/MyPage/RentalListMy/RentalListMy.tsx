import React, { useEffect, useState } from "react";
import type { FC } from 'react';
import Button from "../../../components/Button";
//import Modal from '../../components/Modal';   

const RentalListMy: React.FC = () => {
  const [isExtendModalOpen, setExtendModalOpen] = useState<boolean>(false);
  const [isReturnModalOpen, setReturnModalOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const handleExtend = () => {
    setCount(prevCount => prevCount + 1);
    setExtendModalOpen(true);
  };

  const handleReturn = () => {
    setReturnModalOpen(true);
  };

  const handleCloseModal = () => {
    setExtendModalOpen(false);
    setReturnModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleExtend}>연장</button>
      <button onClick={handleReturn}>반납</button>
{/* 
      <Modal isOpen={isExtendModalOpen || isReturnModalOpen} onClose={handleCloseModal}>
        {isExtendModalOpen && <p>연장되었습니다!</p>}
        {isReturnModalOpen && <p>반납이 성공적으로 되었습니다!</p>}
      </Modal> */}

    </div>
  );
};

export default RentalListMy;