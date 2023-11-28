import type { FC } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ManagerToolStatus from '../ManagerToolStatus';
import { Link } from 'react-router-dom';



const EquipmentStatusComponent: FC = () => {


  
    return (
      <div className='w-[400px] h-[190px] bg-01 rounded-md absolute top-[810px] -ml-[35px]'>
        <div className='mt-[60px] ml-[110px]'>
     <Link to='/manager/tool-status' className=' text-[36px] text-04 font-bold'>
                기자재 현황
      </Link>  </div>
    
      </div>
    );
  };
  
  export default EquipmentStatusComponent;