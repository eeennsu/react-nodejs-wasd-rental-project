import type { FC } from 'react';
import React, { useState } from 'react';
import TooltipComponent from './TooltipComponent';

const RentalListComponent: FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  }

  return (
    <div className="w-[400px] h-14 absolute top-96 ml-[390px] bg-01 rounded-t-lg rounded-tr-lg text-2xl text-center">
      <div className='text-white font-bold text-[30px] p-3'>
        기자재 대여 목록
      </div>
      <TooltipComponent showTooltip={showTooltip} toggleTooltip={toggleTooltip} />
    </div>
  );
};

export default RentalListComponent;