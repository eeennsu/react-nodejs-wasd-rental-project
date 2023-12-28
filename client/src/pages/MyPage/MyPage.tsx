import type { FC } from 'react';
import ModifyInformation from './ModifyInformation';
import RequestMy from './Request/RequestMy';
import RentalListMy from './RentalListMy/RentalListMy';
import PersonalInformation from './Information/PersonalInformation';
import RentalListBody from './RentalListMy/RentalListBody';

const MyPage: FC = () => {

    return (
        <div>
            <PersonalInformation/>
            
            <RentalListBody/>

            <RequestMy/>
 
            

      
        </div>
    );
};

export default MyPage;