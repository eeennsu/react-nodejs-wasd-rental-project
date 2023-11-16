import type { FC } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ManagerToolStatus from '../ManagerToolStatus';
import { Link } from 'react-router-dom';



const EquipmentStatusComponent: FC = () => {


  
    return (
      <div className='w-[400px] h-[160px] bg-01 rounded-md p-14 absolute top-[840px] -ml-[40px]'>
        <div className=''
       >
     <Link to='/manager/tool-status' className='text-4xl text-center p-11 text-04 font-bold'>
                기자재 현황
      </Link>  </div>
    
      </div>
    );
  };
  
  export default EquipmentStatusComponent;