import type { FC } from 'react';
import OverdueListTooltip from './OverdueListTooltip';
import { useState, useEffect } from 'react';



const EquipmentOverdueList: FC = () => {

  const [showTooltips, setShowTooltips] = useState(false);

  const toggleTooltip = () => {
    setShowTooltips(!showTooltips);
  }



    return(
        <div className="w-[400px] h-14 absolute ml-[815px] top-96 bg-01 rounded-t-lg rounded-tr-lg text-2xl text-center">
     
      <div className='p-3 font-bold text-[30px] text-white'>
      기자재 연체 목록
      </div>

      <OverdueListTooltip showTooltip={showTooltips} toggleTooltip={toggleTooltip} />
      
      
  </div>
    );

};



export default EquipmentOverdueList;