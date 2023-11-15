import type { FC } from 'react';
import MyInfoComponent from './MyInfoComponent';
import RenderedComponent from './NavigationBar';
import { BrowserRouter } from "react-router-dom";
import RepairRequestComponent from './RepairRequset/RepairRequestComponen';
import RentalListComponent from './RentalList/RentalListComponent';
import ApprovalComponent from './ApprovalComponent';
import RentalLogComponent from './RentalLogComponent';
import EquipmentStatusComponent from './EquipmentStatus/EquipmentStatusComponent';


const ManagerPage: FC = () => {

    return (
        <div className='overscroll-auto'>


           <MyInfoComponent/>
           <ApprovalComponent/>
          
           <RepairRequestComponent/>
          
           <RentalListComponent/>
          <RentalLogComponent/>
          <EquipmentStatusComponent/>
          
          
          
       
        
           
          
          
        </div>
    );
};

export default ManagerPage;