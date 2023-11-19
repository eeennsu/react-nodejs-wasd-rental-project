import type { FC } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ManagerToolStatus from '../ManagerToolStatus';
import { Link } from 'react-router-dom';



const EquipmentStatusComponent: FC = () => {


  
    return (
      <div className='w-[400px] h-[160px] bg-01 rounded-md absolute top-[840px] -ml-[40px]'>
        <div className='mt-[50px] ml-[110px]'>
     <Link to='/manager/tool-status' className=' text-[36px] text-04 font-bold'>
                기자재 현황
      </Link>  </div>
    
      </div>
    );
  };
  
  export default EquipmentStatusComponent;