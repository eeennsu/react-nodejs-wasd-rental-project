import type { FC } from 'react';
import MyInfoComponent from './MyInfoComponent';
import { BrowserRouter } from "react-router-dom";
import RepairRequestComponent from './RepairRequset/RepairRequestComponen';
import RentalListComponent from './RentalList/RentalListComponent';
import ApprovalComponent from './Approval/ApprovalComponent';
import RentalLogComponent from './log/RentalLogComponent';
import EquipmentStatusComponent from './EquipmentStatus/EquipmentStatusComponent';
import EquipmentOverdueList from './EquipmentOverdueList'


const ManagerPage: FC = () => {

    return (
        <div className='overscroll-auto'>


          <MyInfoComponent/>
          <ApprovalComponent/>
          <RepairRequestComponent/>
          <RentalListComponent/>
          <RentalLogComponent/>
          <EquipmentStatusComponent/>
          <EquipmentOverdueList/>
          
          
          
       
        
           
          
          
        </div>
    );
};

export default ManagerPage;